import React from "react";
import Home from "../Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";


export default function Main(){

    return(
        <BrowserRouter basename={`/`} >
            <div style={{minHeight:'100vh'}}>
            <Routes>
                <Route
                path="/"
                element={
                    <Home/>
                }
                />
                <Route
                path="/cadastro"
                element={
                    <Home/>
                }
                />
            </Routes>
            </div>
        </BrowserRouter>
    )
}