import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Hotel from "./Pages/Hotel/Hotel";
import List from "./Pages/List/List";
import './App.css';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/Hotels" element={<List/>}></Route>
      <Route path="/Hotels/:id" element={<Hotel/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
