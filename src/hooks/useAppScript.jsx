import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { updateInfo } from "../context/userSlice";
import { useState } from "react";

const useAppScript = () => {
  const [isLoading, setIsLoadding] = useState();
  const [isError, setIsError] = useState();
  const dispatch = useDispatch();
  const { contextForm } = useSelector((state) => state.formSlice);
  const urlServer =
    "https://script.google.com/macros/s/AKfycbwinG3i46ppq8Xps5WAcnLOxEixxvY2IX8m4eJemDRKzEh1_uLkRfiZHjaK78OoQ7HCGg/exec";
  const login = async (id, phone) => {
    setIsLoadding(true);
    setIsError(null);
    try {
      const urlID = `http://192.168.1.10:3000/user/${id}`;
      const res = await axios.get(
        `${urlServer}?action=login&id=${urlID}&phone=${phone}`
      );
      if (res.data.status == 200) {
        dispatch(updateInfo(res.data.data));
      } else {
        setIsError(res.data.message);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoadding(false);
    }
  };
  const add = async ({ id, name, phone }) => {
    const urlID = `http://192.168.1.10:3000/user/${id}`;
    console.log(typeof phone);
    const res = await axios.get(
      `${urlServer}?action=add&name=${name}&id=${urlID}&phone=${String(phone)}`
    );

    console.log(res.data.status);
  };
  const addApp = async ({ id, name, phone }) => {
    setIsLoadding(true);
    setIsError(null);
    try {
      const formData = new FormData();
      formData.append("action", "addApp");
      formData.append("id", id);
      formData.append("phone", phone);
      formData.append("name", name);
      formData.append("name_tai_xe", contextForm?.name_tai_xe);
      formData.append("phone_tai_xe", contextForm?.phone_tai_xe);
      const res = await axios.post(urlServer, formData);
      return res.data;
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoadding(false);
    }
  };
  return { login, add, addApp, isLoading, isError };
};
export default useAppScript;
