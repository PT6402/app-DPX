import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "components/layout";
import {
  AddAdminPage,
  Ctn_dtPage,
  DetailPage,
  FormInforPage,
  LoginPage,
  NotFoundPage,
  VipPage,
} from "components/pages";
import ProtectedRoute from "routes/ProtectedRoute";

import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LoginPage />} />
          <Route element={<ProtectedRoute needAdmin />}>
            <Route index path="/ctn_dt" element={<Ctn_dtPage />} />
            <Route path="/ctn_dt/:id/:phone/:name" element={<DetailPage />} />
            <Route path="/vip" element={<VipPage />} />
          </Route>
          <Route element={<ProtectedRoute needSuperAdmin />}>
            <Route path="/add_admin" element={<AddAdminPage />} />
          </Route>
          <Route path="/user/:id" element={<FormInforPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
