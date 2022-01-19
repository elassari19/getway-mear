export const data = [
  {x: 1453075200}, {x: 1453161600},
  {x: 1453248000}, {x: 1453334400},
  {x: 1453420800}, {x: 1453507200},
  {x: 1453593600}, {x: 1453680000},
  {x: 1453766400}, {x: 1453852800},
  {x: 1453939200}, {x: 1454025600},
  {x: 1454112000}, {x: 1454198400},
];

export const chartPrice = (reciveData, datas= data) => {
  const price = datas.map((item, i)=> ({x: item.x, y: reciveData[i]}))
  return price;
}