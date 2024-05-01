import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import CTN_DT from "./components/pages/CTN_DT";
import VIP from "./components/pages/VIP";
import Detail from "./components/pages/CTN_DT/Detail";
import FormInfor from "./components/pages/FormInfor";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/ctn_dt" element={<CTN_DT />} />
          <Route path="/ctn_dt/:id/:phone" element={<Detail />} />
          <Route path="/vip" element={<VIP />} />
          <Route path="/user/:id" element={<FormInfor />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
