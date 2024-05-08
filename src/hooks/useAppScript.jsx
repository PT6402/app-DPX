import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { updateInfo } from "../context/userSlice";
import { useState } from "react";
import { toast } from "react-toastify";
// import { setIsLoadding as loadingApp } from "context/loadingSlice";
import { setIsLoadding as loadingApp } from "../context/loadingSlice";
const useAppScript = () => {
  const url_app = import.meta.env.VITE_URL_APP;
  const [isLoading, setIsLoadding] = useState();
  const [isError, setIsError] = useState();
  const dispatch = useDispatch();
  const { contextForm } = useSelector((state) => state.formSlice);
  const urlServer = import.meta.env.VITE_APP_SCRIPT;
  const login = async (id, phone) => {
    setIsLoadding(true);
    setIsError(null);
    try {
      const urlID = `${url_app}user/${id}`;
      const res = await axios.get(
        `${urlServer}?action=login&id=${urlID}&phone=${phone}`
      );
      if (res.data.status == 200) {
        dispatch(updateInfo(res.data.data));
      } else {
        setIsError(res.data.message);
      }
      return res.data;
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoadding(false);
    }
  };
  const addUser = async ({ id, name, phone, type }) => {
    setIsLoadding(true);
    setIsError(null);
    dispatch(loadingApp(true));
    try {
      const urlID = `${url_app}user/${id}`;
      const res = await axios.get(
        `${urlServer}?action=addUser&name=${name}&id=${urlID}&phone=${phone}&role=user&type=${type}`
      );
      if (res.data.status == 204) {
        toast.error(res.data.message, {
          position: "top-right",
        });
      }
      if (res.data.status == 200) {
        toast.success(res.data.message, {
          position: "top-right",
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoadding(false);
      dispatch(loadingApp(false));
    }
  };
  const addApp = async ({ id, name, phone }) => {
    setIsLoadding(true);
    setIsError(null);
    dispatch(loadingApp(true));
    try {
      const formData = new FormData();
      formData.append("action", "addApp");
      formData.append("id", id);
      formData.append("phone", phone);
      formData.append("name", name);
      formData.append("name_tai_xe", contextForm?.name_tai_xe || "");
      formData.append("phone_tai_xe", contextForm?.phone_tai_xe || "");
      formData.append("type_car", contextForm?.type_car?.label || "");
      formData.append("number_of_people", contextForm?.number_of_people || "");
      formData.append(
        "time_leave_pagoda",
        contextForm?.time_leave_pagoda || ""
      );
      formData.append("bien_so", contextForm?.bien_so || "");
      const res = await axios.post(urlServer, formData);
      return res.data;
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoadding(false);
      dispatch(loadingApp(false));
    }
  };

  const addVip = async ({ name, phone, type, urlID, licensePlateInput }) => {
    dispatch(loadingApp(true));
    setIsError(null);
    try {
      const addLogin = await axios.get(
        `${urlServer}?action=addUser&name=${name}&id=${urlID}&phone=${phone}&role=user&type=${type}`
      );
      if (addLogin.data.status == 200) {
        const formData = new FormData();
        formData.append("action", "addApp");
        formData.append("id", `'${urlID}`);
        formData.append("phone", phone);
        formData.append("name", name);
        formData.append("type_car", type.split("-")[1]);
        formData.append("bien_so", licensePlateInput);
        await axios.post(urlServer, formData);
      }
      return addLogin.data;
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(loadingApp(false));
    }
  };

  return { login, addUser, addApp, addVip, isLoading, isError };
};
export default useAppScript;
