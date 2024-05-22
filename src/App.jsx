import "./App.css";
import Navbar from "../src/components/layout/Navbar";
import Footer from "../src/components/layout/Footer";
import { Outlet } from "react-router-dom";
import { store } from "./ReduxStore/store";
import { Provider } from "react-redux";
import AppWrapper from "./AppWrapper";

function App() {
  return (
    <Provider store={store}>
      <AppWrapper />
    </Provider>
  );
}

export default App;
