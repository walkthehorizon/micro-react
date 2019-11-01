import React, {Suspense} from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {Loading} from "./pages/Loading";
// import Wallpaper from "./pages/wallpaper";
// import HomePage from "./pages/HomePage";

const lazyHomePage = React.lazy(() => import("./pages/Home"));
const lazyDowanload = React.lazy(()=> import("./home/Download"))
const lazyWallpaper = React.lazy(() => import("./pages/wallpaper"));
const lazyDownloadMobile = React.lazy(()=>import("./home/mobile/Download"))

function AppRouter() {

    return (
        <Router>
            <Suspense fallback={<Loading/>} >
                <Route path="/wallpaper/:id" component={lazyWallpaper}/>
                <Route path="/" exact component={lazyHomePage}/>
                <Route path="/download/" exact component = {lazyDowanload}/>
                <Route path="/m/download/" exact component = {lazyDownloadMobile}/>
            </Suspense>
        </Router>
    );
}

export default AppRouter