import React, { useEffect } from "react";
import "./App.css";
import Home from "./Pages/Home/Home";
import AOS from "aos";
import "aos/dist/aos.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutUs from "./Pages/AboutUS/AboutUs";
import RootLayout from "./RootLayout/Root";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import Services from "./Pages/Services/Services";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Contact from "./Pages/Contact/Contact";
import Careers from "./Pages/Careers/Careers";
import Blog from "./Pages/Blog/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/Creative_mind", element: <Home /> },
      { path: "/about", element: <AboutUs /> },
      { path: "/services", element: <Services /> },
      { path: "/portfolio", element: <Portfolio /> },
      { path: "/careers", element: <Careers /> },
      { path: "/blog", element: <Blog /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);

function App() {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div className=" overflow-hidden bg-[#111] text-[#fff] relative">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
