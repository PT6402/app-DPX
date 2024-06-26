import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import {
  AddAdminPage,
  Ctn_dtPage,
  DetailPage,
  FormInforPage,
  LoginPage,
  NotFoundPage,
  ThuKy,
  VipPage,
} from "./components/pages";
import ProtectedRoute from "./routes/ProtectedRoute";

import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LoginPage />} />
          <Route element={<ProtectedRoute needAdmin />}>
            <Route path="ctn_dt" element={<Ctn_dtPage />} />
            <Route path="thu-ky" element={<ThuKy />} />
            <Route path="ctn_dt/:id/:phone/:name" element={<DetailPage />} />
            <Route path="vip" element={<VipPage />} />
          </Route>
          <Route element={<ProtectedRoute needSuperAdmin />}>
            <Route path="add_admin" element={<AddAdminPage />} />
          </Route>
          <Route path="user/:id" element={<FormInforPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
        {/* <Route path="/app-DPX-deploy/user/:id" element={<Layout />}>
          <Route index element={<FormInforPage />} />
        </Route> */}
      </Routes>
    </>
  );
}

export default App;
