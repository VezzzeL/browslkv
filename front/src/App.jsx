import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Layout } from "./components/Layout";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:4000/";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}></Route>
    </Routes>
  );
}

export default App;
