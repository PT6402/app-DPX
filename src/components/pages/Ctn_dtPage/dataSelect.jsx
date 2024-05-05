const listDT_CTN = [
  "Phat chi",
  "opt2",
  "opt3",
  "Phat chi",
  "opt2",
  "opt3",
  "Phat chi",
  "opt2",
  "opt3",
  "Phat chi",
  "opt2",
  "opt3",
  "Phat chi",
  "opt2",
  "opt3",
  "Phat chi",
  "opt2",
  "opt3",
  "Phat chi",
  "opt2",
  "opt3",
  "Phat chi",
  "opt2",
  "opt3",
  "Phat chi",
  "opt2",
  "opt3",
  "Phat chi",
  "opt2",
  "opt3",
  "Phat chi",
  "opt2",
  "opt3",
  "Phat chi",
  "opt2",
  "opt3",
  "Phat chi",
  "opt2",
  "opt3",
  "Phat chi",
  "opt2",
  "opt3",
  "Phat chi",
  "opt2",
  "opt3",
  "Phat chi",
  "opt2",
  "opt3",
  "Phat chi",
  "opt2",
  "opt3",
  "Phat chi",
  "opt2",
  "opt3",
  "Phat chi",
  "opt2",
  "opt3",
];

const handleGenerateOption = ({ listDT_CTN }) => {
  const arr = [];
  listDT_CTN.map((item) => {
    const element = {
      label: item,
      value: item.toLowerCase().replace(/\W/g, ""),
    };
    arr.push(element);
  });
  return arr;
};
const optionDT_CTN = handleGenerateOption({ listDT_CTN });
export { optionDT_CTN };
