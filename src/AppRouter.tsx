import React, { Suspense } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Loading from "./pages/Loading";

const lazyHomePage = React.lazy(() => import("./pages/Home"));
const lazyDowanload = React.lazy(() => import("./home/Download"));
const lazyWallpaper = React.lazy(() => import("./pages/detail/Wallpaper"));
const lazyDownloadMobile = React.lazy(() => import("./home/mobile/Download"));
const lazyPrivacy = React.lazy(() => import("./pages/Privacy"));
const lazyAgreement = React.lazy(() => import("./pages/Agreement"));
// const lazyTODO = React.lazy(() => import("./pages/TODOLIST"));
const lazyTest = React.lazy(() => import("./pages/test/Test"));

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
        <Route path="/test" component={lazyTest} />
      </Suspense>
    </Router>
  );
}

export default AppRouter;
