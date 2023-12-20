import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "../components/landingPage/landingPage";
import HomePage from '../components/homePage/homePage'
import Login from "../components/forms/login/login";


const RoutesComponent = () => {
    return (
        <Routes>
            <Route path="/" Component={LandingPage}></Route>
            <Route path="/homepage" Component={HomePage}></Route>
            <Route path="/login" Component={Login}></Route>
        </Routes>
    )
}

export default RoutesComponent;