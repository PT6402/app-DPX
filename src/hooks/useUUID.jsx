import { v5 as uuidv5 } from "uuid";
import CryptoJS from "crypto-js";
const useUUID = () => {
  const handHash = (data) => {
    const MY_NAMESPACE = "1b671a64-40d5-491e-99b0-da01ff1f3341";
    return uuidv5(data, MY_NAMESPACE);
  };
  const handleHash = () => {
    const SECRET_KEY = "1b671a64-40d5-491e-99b0-da01ff1f3341";
    const encrypt = CryptoJS.AES.encrypt("0971866177", SECRET_KEY).toString();
    const decrypt = CryptoJS.AES.decrypt(encrypt, SECRET_KEY).toString(
      CryptoJS.enc.Utf8
    );
    console.log(encrypt);
    console.log(decrypt);
  };
  return {
    handHash,
    handleHash,
  };
};
export default useUUID;
