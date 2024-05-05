import { useState } from "react";
import useUUID from "./useUUID";
import { useDispatch } from "react-redux";
// import { logout, updateInfo } from "context/userSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { logout, updateInfo } from "../context/userSlice";
import { setIsLoadding as loadingApp } from "../context/loadingSlice";
// import { setIsLoadding as loadingApp } from "context/loadingSlice";
const useAdmin = () => {
  const [isLoading, setIsLoading] = useState();
  const [isError, setIsError] = useState();
  const urlServer = import.meta.env.VITE_APP_SCRIPT;
  const dispatch = useDispatch();
  const { handHash } = useUUID();
  const navigate = useNavigate();
  const loginAdmin = async ({ email, phone }) => {
    setIsLoading(true);
    setIsError(null);
    try {
      const id = handHash(`${email}${phone}`);
      const res = await axios.get(
        `${urlServer}?action=login&id=${id}&phone=${phone}`
      );
      if (res.data.status == 200) {
        dispatch(updateInfo(res.data.data));
        if (res.data.data.Role == "admin") {
          navigate("/app-DPX-deploy/ctn_dt");
        }
        if (res.data.data.Role == "super-admin") {
          navigate("/app-DPX-deploy/add_admin");
        }
      } else {
        setIsError(res.data.message);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  const logoutAdmin = () => {
    navigate("/app-DPX-deploy");
    dispatch(logout());
  };
  const addAdmin = async ({ name, phone, email }) => {
    setIsLoading(true);
    setIsError(null);
    dispatch(loadingApp(true));
    const id = handHash(`${email}${phone}`);
    try {
      const res = await axios.get(
        `${urlServer}?action=addUser&name=${name}&id=${id}&phone=${phone}&role=admin&type=Center`
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
      setIsLoading(false);
      dispatch(loadingApp(false));
    }
  };
  return { loginAdmin, logoutAdmin, addAdmin, isLoading, isError };
};
export default useAdmin;
