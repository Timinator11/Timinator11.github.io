import {Routes, Route } from "react-router-dom";
import { HashRouter } from "react-router-dom";

import Home from "./home";
import Maps from "./maps";
import Info from "./info";
import Sources from "./sources";
import Drought from "./drought"


function App() {

    return (

        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/maps" element={<Maps/>}/>
            <Route path="/info" element={<Info/>}/>
            <Route path="/sources" element={<Sources/>}/>
            <Route path="/drought" element={<Drought/>}/>
        </Routes>

    );
}

export default App;