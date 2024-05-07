import { v5 as uuidv5 } from "uuid";
import { validate as uuidValidate } from "uuid";
const useUUID = () => {
  const handHash = (data) => {
    const MY_NAMESPACE = "1b671a64-40d5-491e-99b0-da01ff1f3341";
    // console.log(uuidv5(`tranphat701@gmail.com0971866177`, MY_NAMESPACE));
    return uuidv5(data, MY_NAMESPACE);
  };
  const checkValidateUUID = (id) => {
    // console.log(uuidValidate(id), id);
    return uuidValidate(id);
  };

  return {
    handHash,
    checkValidateUUID,
  };
};
export default useUUID;
