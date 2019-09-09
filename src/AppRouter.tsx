import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {Wallpaper} from "./pages/wallpaper";
import HomePage from "./pages/HomePage";

function AppRouter() {
    return (
        <Router>
            <Route path="/wallpaper/:id" component={Wallpaper}/>
            <Route path="/" exact component={HomePage}/>
        </Router>
    );
}

export default AppRouter