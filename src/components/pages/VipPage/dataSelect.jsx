const listVIP = ["opt1", "opt2", "opt3"];

const handleGenerateOption = ({ listVIP }) => {
  const arr = [];
  listVIP.map((item) => {
    const element = {
      label: item,
      value: item.toLowerCase().replace(/\W/g, ""),
    };
    arr.push(element);
  });
  return arr;
};
const optionVIP = handleGenerateOption({ listVIP });
export { optionVIP };
