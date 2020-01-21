import React, { Suspense } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Loading } from "./pages/Loading";
// import Wallpaper from "./pages/wallpaper";
// import HomePage from "./pages/HomePage";

const lazyHomePage = React.lazy(() => import("./pages/Home"));
const lazyDowanload = React.lazy(() => import("./home/Download"));
const lazyWallpaper = React.lazy(() => import("./pages/wallpaper"));
const lazyDownloadMobile = React.lazy(() => import("./home/mobile/Download"));
const lazyPrivacy = React.lazy(() => import("./pages/Privacy"));
const lazyAgreement = React.lazy(() => import("./pages/Agreement"));
const lazyTest = React.lazy(() => import("./pages/TODOLIST"));

function AppRouter() {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Route path="/wallpaper/:id" component={lazyWallpaper} />
        <Route path="/" exact component={lazyHomePage} />
        <Route path="/download/" exact component={lazyDowanload} />
        <Route path="/m/download/" exact component={lazyDownloadMobile} />
        <Route path="/privacy" component={lazyPrivacy} />
        <Route path="/agreement" component={lazyAgreement} />
        <Route path="/Test" component={lazyTest} />
      </Suspense>
    </Router>
  );
}

export default AppRouter;
