const listType = ["4 chỗ", "7 chỗ", "16 chỗ", "42 chỗ", "50 chỗ", "30 chỗ"];
const handleGenerateOption = ({ list }) => {
  const arr = [];
  list.map((item) => {
    const element = {
      label: item,
      value: item.toLowerCase().replace(/\W/g, ""),
    };
    arr.push(element);
  });
  return arr;
};
const optionType = handleGenerateOption({ list: listType });
export { optionType };
