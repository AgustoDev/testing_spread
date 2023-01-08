const spreadDataMap = [
  {
    title: 'Revenue',
    isInput: true,
    slug: 'revenue',
    class: 'default',
  },
  {
    title: 'Cost of Goods Sold',
    isInput: true,
    slug: 'cost_of_goods_sold',
    class: 'default',
  },
  {
    title: 'Gross Profit c/f',
    isInput: false,
    slug: 'gross_profit',
    formula: '$($revenue$-$cost_of_goods_sold$)$+$gross_profit@1',
    class: 'totals',
  },
];

export default spreadDataMap;
