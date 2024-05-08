const listVIP = [
  "Vận chuyển cúng dường",
  "Đưa đón Quý Thầy,Cô",
  "Đưa đón khách VIP",
];

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
