import { v5 as uuidv5 } from "uuid";

const useUUID = () => {
  const handHash = (data) => {
    const MY_NAMESPACE = "1b671a64-40d5-491e-99b0-da01ff1f3341";
    return uuidv5(data, MY_NAMESPACE);
  };

  return {
    handHash,
  };
};
export default useUUID;
