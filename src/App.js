import {Routes, Route } from "react-router-dom";
//import { HashRouter } from "react-router-dom";

import Home from "./home"
import Maps from "./maps";
import Info from "./info";
import Sources from "./sources";


function App() {

    return (

        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/home" element={<Home/>}></Route>
            <Route path="/maps" element={<Maps/>}></Route>
            <Route path="/info" element={<Info/>}></Route>
            <Route path="/sources" element={<Sources/>}></Route>
        </Routes>

    );
}

export default App;
