import spreadDataMap from '../data';
import numeral from 'numeral';
import * as math from 'mathjs';

export const spreadCompute = ({ newYears, rawData }: { newYears?: number[] | null | undefined; rawData: any }) => {
  //console.clear();

  console.log({ newYears, rawData });

  let spread: any = rawData;
  let spreadData: any = {};
  let spreadDataObject: any = {};

  //loop through the years and create a new spreadData object using yeasr as keys and spreadDataMap as values
  if (newYears) {
    newYears.forEach((year) => {
      spreadData[year] = spreadDataMap.map((item: any) => {
        return {
          ...item,
          year,
          formula: item?.formula || null,
          input: item.input || '0',
          value: item?.formula ? '0' : item.value || '0',
        };
      });
    });
  }

  if (rawData) {
    rawData.forEach((year: any) => {
      spreadData[year[0].year] = year;
    });
  }

  //sort spreadData year object by year from smallest to largest
  const years = Object.keys(spreadData).sort((a, b) => Number(a) - Number(b));

  years.forEach((el) => {
    let x = flattenArrayToObject(spreadData[el]);
    spreadDataObject[el] = x;
  });

  spread = computeSpread(years, spreadData, spreadDataObject);
  return spread;
};

const flattenArrayToObject = (array: any) => {
  let x = {};
  array.forEach((item: any) => {
    let key: any = item.slug;
    x[key] = item?.formula || validateInput(item.input);
  });
  return x;
};

const validateInput = (input: any) => {
  input = input.replace(/=/g, "'");
  return `${math.evaluate(input)}`;
};

const computeSpread = (years: any, spreadData: any, spreadDataObject: any) => {
  const result: any = [];
  let kk: any = spreadDataObject;

  years.sort((a, b) => Number(a) - Number(b));
  years.forEach((year: any) => {
    let items = spreadData[year];
    let arr: any = [];

    items.forEach((item: any) => {
      if (item.formula) kk[year][item.slug] = item.formula ? computeFormula(year, item.formula, kk) : item?.input || 0;
      let obj = { ...item, value: kk[year][item.slug] };
      arr.push(obj);
    });
    result.push(arr);
  });
  return result;
};

const computeFormula = (year: number, formula: string, spreadDataObject: any) => {
  const identifier = '$';
  let result = 0;
  let splitFormula: any = formula.split(identifier);
  splitFormula = splitFormula.filter((el: any) => el !== '');

  splitFormula.forEach((el: any, index: number) => {
    let data: any = '';

    if (el.includes('@')) {
      let checkYear = year - el.split('@')[1];
      if (!spreadDataObject[checkYear]) {
        data = 0;
      } else {
        data = spreadDataObject[checkYear][el.split('@')[0]];
      }
    }

    if (spreadDataObject[year][el]) data = spreadDataObject[year][el];
    if (data !== '') splitFormula[index] = numeral(data).value();
  });

  splitFormula = splitFormula.join().replace(/,/g, '');
  result = math.evaluate(splitFormula);
  console.log(splitFormula);
  console.log(result);
  //console.log(year, '=========================================================', year);
  return result;
};

export const spreadFormatting = (spread: CompanyData[][]) => {
  const titles = spread[0].map((year: any) => year.title);
  return titles.map((title: any) => {
    return spread.map((year) => year.find((item) => item.title === title));
  });
};
