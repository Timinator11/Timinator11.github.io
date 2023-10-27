import {Routes, Route } from "react-router-dom";

import Home from "./home"
import Maps from "./maps";
import Info from "./info";
import Sources from "./sources";


function App() {

    return (

        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/maps" element={<Maps/>}/>
            <Route path="/info" element={<Info/>}/>
            <Route path="/sources" element={<Sources/>}/>
        </Routes>

    );
}

export default App;