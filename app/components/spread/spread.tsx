/* eslint-disable react-hooks/exhaustive-deps */
import { useLoaderData } from '@remix-run/react';
import { useEffect, useRef, useState } from 'react';
import cookieStorage from '~/helpers/cookie-store';
import { spreadCompute, spreadFormatting } from '~/modules/spread/spread.controller';
import type { CompanyLoader } from '~/routes';

const Spread = () => {
  const itemsRef = useRef<any>({});
  const [newYears, setNewYears] = useState<any>([]);
  const { spreadData, company } = useLoaderData() as CompanyLoader;
  const [rawData, setRawData] = useState<any[][]>([]);
  const [updateRawData, setUpdateRawData] = useState<any>(spreadData);
  const [spread, setSpread] = useState<CompanyData[][]>([]);
  const [keys, setKeys] = useState<string[]>([]);
  const [years, setYears] = useState<number[]>([]);
  const [isFocused, setIsFocused] = useState<string>('');

  const addNewYear = () => {
    let yearsUsed = rawData.map((item) => item[0].year);
    //add new year to the end of the array base highest year else add 2018
    let newYear = yearsUsed.length > 0 ? Math.max(...yearsUsed) + 1 : 2018;
    setNewYears([newYear]);
  };

  const clearData = () => {
    cookieStorage.removeItem(company.slug);
    window.location.reload();
  };

  const updateSpread = (data: CompanyData[][]) => {
    let formattedData: any = spreadFormatting(data);
    let tableKeys = formattedData.map((item: CompanyData[]) => ({ title: item[0].title, class: item[0].class }));
    let allYears = formattedData[0].map((item: CompanyData) => item.year);

    setNewYears([]);
    setYears(allYears);
    setKeys(tableKeys);
    setSpread(formattedData);
    setRawData(data);
    cookieStorage.setItem(company.slug, JSON.stringify(data));
  };

  const runCalc = () => {
    if (rawData.length === 0 && !newYears) return;
    let result = spreadCompute({ newYears, rawData: updateRawData?.length > 0 ? updateRawData : rawData });
    if (result) updateSpread(result);
  };

  //on focus change the value of cell to input
  const onFocus = (refIndex: string) => {
    setIsFocused(refIndex);
  };

  const handleKeyUp = ({ e, refIndex, item }: { e: any; refIndex: string; item: CompanyData }) => {
    e.preventDefault();
    const keys = [13, 38, 40];

    if (!keys.includes(e.keyCode)) return;

    itemsRef.current[refIndex].blur();

    let enterTabDown = e.keyCode === 9 || e.keyCode === 13 || e.keyCode === 40;
    let upArrow = e.keyCode === 38;
    let leftArrow = e.keyCode === 37;
    let right = e.keyCode === 39;

    onBlur({ refIndex, item });
    if (enterTabDown) tabCell(refIndex, 'down');
    if (upArrow) tabCell(refIndex, 'up');
    //if (leftArrow) tabCell(refIndex, 'left');
    //if (right) tabCell(refIndex, 'right');
  };

  const tabCell = (refIndex: string, movement: 'up' | 'down' | 'left' | 'right') => {
    let lastChar = refIndex.charAt(refIndex.length - 1);
    let add = movement === 'down' ? Number(1) + Number(lastChar) : Number(lastChar) - Number(1);
    let newRefIndex = refIndex.slice(0, -1) + add;

    if (!itemsRef.current[newRefIndex]) return;
    const inputEl = itemsRef.current[newRefIndex].getAttribute('contentEditable');

    //recursively call tabCell until it finds a cell that is editable
    if (inputEl === false) {
      tabCell(newRefIndex, movement);
      return;
    }

    itemsRef.current[newRefIndex].focus();
  };

  //on blur update company data
  const onBlur = ({ refIndex, item }: { refIndex: string; item: CompanyData }) => {
    setIsFocused('');
    const { current } = itemsRef;
    const currentRef = current[refIndex];
    const { year, title } = item;

    if (currentRef) {
      let yearIndex = rawData.findIndex((item) => item[0].year === year);
      let titleIndex = rawData[yearIndex].findIndex((item) => item.title === title);
      let newData = rawData;

      let value = currentRef.textContent;

      if (currentRef.textContent?.includes('\n')) {
        value = value.replace(/\n/g, '');
        currentRef.textContent = value;
      }

      newData[yearIndex][titleIndex].input = currentRef?.textContent || '0';
      setUpdateRawData(newData);
    }
  };

  useEffect(() => {
    if (rawData.length === 0 || !rawData) return;
    runCalc();
  }, [updateRawData]);

  useEffect(() => {
    if (newYears.length === 0 || !newYears) return;
    runCalc();
  }, [newYears]);

  useEffect(() => {
    if (spreadData.length === 0) {
      let data: any = cookieStorage.getItem(company.slug);
      if (data) {
        data = JSON.parse(data);
        setRawData(data);
        setUpdateRawData(data);
      }
    }
  }, [spreadData]);

  return (
    <div className="w-full ">
      <div className="flex items-center gap-4">
        <button className="p-3 mb-4 text-xs text-white uppercase bg-green-700 rounded " onClick={addNewYear}>
          Add New Year
        </button>

        <button className="p-3 mb-4 text-xs text-white uppercase bg-red-700 rounded " onClick={clearData}>
          reset data
        </button>
      </div>

      <table className="w-full uppercase ">
        <thead>
          <tr className="">
            <th className="w-full p-3 text-left border-l-2">Year</th>
            {years.map((item, i) => (
              <th key={i} className="p-3 border-l-2">
                {item}
              </th>
            ))}
          </tr>
        </thead>

        {
          <tbody>
            {keys.map((el: any, i) => (
              <tr key={i} className={`${el.class}`}>
                <td className="p-3 text-left border-l-2 ">{el.title}</td>
                {spread[i].map((item, ii) => {
                  let refIndex = `year_${item.year}_${i}`;
                  return (
                    <td
                      ref={(el) => (itemsRef.current[refIndex] = el)}
                      key={ii}
                      onFocus={(e) => onFocus(refIndex)}
                      onBlur={(e) => onBlur({ refIndex, item })}
                      contentEditable={item?.isInput}
                      onKeyUp={(e) => handleKeyUp({ e, refIndex, item })}
                      suppressContentEditableWarning={true}
                      className={`${item.class} single-line p-3 text-center min-w-[10vw]`}
                    >
                      {isFocused === refIndex ? item?.input : item?.value}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        }
      </table>

      <div className="mt-20">
        <h2 className="font-bold uppercase">NOTE:</h2>

        <li>
          <span className="font-bold">1. </span> To add new year click on the{' '}
          <span className="font-bold uppercase">Add New Year (min 2018)</span>{' '}
        </li>

        <li>
          <span className="font-bold">2. </span> To reset data click on the{' '}
          <span className="font-bold uppercase">reset data</span>{' '}
        </li>

        <li>
          <span className="font-bold">3. </span> To edit data click on the cell and edit the value
        </li>

        <li>
          <span className="font-bold">4. </span> To save data click outside the cell (Just like excel)
        </li>

        <li>
          <span className="font-bold">5. </span> You can also use expression <br />
          <span className="block mt-4 font-bold uppercase">eg:</span>
          <span className="block mt-1">1. 100 + 200 </span>
          <span className="block mt-1">2. 100 - 200 </span>
          <span className="block mt-1">3. 100 * 200 </span>
          <span className="block mt-1">4. 100 / 200 </span>
        </li>
      </div>
    </div>
  );
};

export default Spread;
