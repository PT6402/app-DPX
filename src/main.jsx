import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import "./assets/fonts/satoshi.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./context/store.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);
