import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import ResterauntMenu from "./components/ResterauntMenu";
import Cart from "./components/Cart";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
// import Grocery from "./components/Grocery";

const AppLayout = () => {

  return (
    <Provider store={appStore}>
    <div className="app">
      <Header />
      <Outlet />
    </div>
    </Provider >
  );
};


const Grocery = lazy(()=>import("./components/Grocery"));


const appRouter = createBrowserRouter([{
  path:"/",
  element:<AppLayout/>,
  children:[
    {
      path: "/",
      element:<Body/>,
    },
    {
      path:"/about",
      element:<About/>
    },
    {
      path:"/grocery",
      element:<Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense>
    },
    {
      path:"/res/:resId",
      element:<ResterauntMenu/>
    },
    {
      path:"/cart",
      element:<Cart/>
    },
  ]
}])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>)
