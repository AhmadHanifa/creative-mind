// Navbar.jsx
import React, { useState, useEffect } from "react";
import logo_white from "../../Assets/logo-white.png";
import { Bars3BottomRightIcon } from "@heroicons/react/24/solid";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { PhoneIcon } from "@heroicons/react/24/outline";
import { Link, NavLink } from "react-router-dom";
import {navItems} from "./NavList"
import nav_img from '../../Assets/nav_creative-01.png'
import Locations from "../Footer/Locations";
import facebook from "../../Assets/socialMedia/facebook-01.svg";
import instagram from "../../Assets/socialMedia/instagram-01.svg";
import youtube from "../../Assets/socialMedia/youtube-01.svg";
import linkedin from "../../Assets/socialMedia/linkedin-01.svg";

// import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [hasClass, setHasClass] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleClass = () => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      setNav(!nav);
    }, 500);
  }
  const handleLogo = () => {
    window.scrollTo(0, 0);
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setHasClass(true);
      } else {
        setHasClass(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={
        hasClass
          ? "bg-[#000] fixed w-full px-8  md:px-40 py-2 flex gap-4 md:gap-8 justify-between items-center  text-white duration-300 overflow-hidden z-[999] "
          : "bg-[#0000] fixed w-full px-8 md:px-40 py-2 md:py-12 flex gap-4 md:gap-8 justify-between items-center  text-white duration-1000 overflow-hidden z-[999]"
      }
    >
    
    
      {/* Logo */}
      <h1 className="w-full text-3xl font-bold text-[#fff]">
        <Link preventScrollReset to="/Creative_mind">
          <img
            width="100%"
            height="100%"
            className={
              hasClass
                ? "w-[60px] md:w-[110px] duration-200"
                : "w-[80px] md:w-[200px] duration-1000"
            }
            src={logo_white}
            alt=""
            onClick={handleLogo}
          />
        </Link>
      </h1>

      {/* Desktop Navigation */}
      {/* <ul className='hidden md:flex'>
        {navItems.map((item) => (
          <li
            key={item.id}
            className='p-4 hover:bg-[#f6891f] rounded-xl m-2 cursor-pointer duration-300 hover:text-black'
          >
            {item.text}
          </li>
        ))}
      </ul> */}

      <button className="block flex items-center justify-center ">
        <PhoneIcon className="size-12 text-[#fff] border border-[#fff] rounded-full p-3" />
      </button>

      <button className="text-[24px] md:text-[28px] -translate-y-1">
        <p>عربي</p>
      </button>

      {/* Mobile Navigation Icon */}
      <button
        onClick={handleNav}
        className="block flex items-center justify-center"
      >
        {nav ? (
          <XMarkIcon className="size-14 md:size-12 text-[#fff]" />
        ) : (
          <Bars3BottomRightIcon className="size-14 md:size-12 text-[#fff]" />
        )}
      </button>

      {/* Mobile Navigation Menu */}
      <div
        className={
          nav
            ? "fixed  left-0 top-[0] w-[100%] h-full border-r  bg-[#000300] ease-in-out duration-500  pt-20 grid md:grid-cols-2 gap-8 md:gap-0 md:place-items-center flex-col text-start overflow-hidden nav-bg"
            : "ease-in-out w-[100%] h-0 duration-500 fixed top-[0]  left-[0] grid md:grid-cols-2 gap-8 md:gap-0 md:place-items-center flex-col text-start overflow-hidden nav-bg"
        }
      >
      <div className="grid gap-8 px-8 md:px-0">

        <ul
          className=" md:ps-44 duration-500 grid md:grid-cols-2 text-start "
        >
          {/* Mobile Navigation Icon */}
          <button
            onClick={handleNav}
            className={
              nav
                ? "   h-auto ease-in-out duration-500 overflow-hidden p-10  absolute end-0 top-0  flex items-center justify-center"
                : "ease-in-out h-0 duration-500 overflow-hidden absolute end-0 -top-[500%]"
            }
          >
            <XMarkIcon className="size-12 text-[#fff] border border-[#fff] rounded-full p-2" />
          </button>

          {/* Mobile Navigation Items */}
          <div
            className={
              nav
                ? "   h-full ease-in-out duration-500 overflow-hidden"
                : "ease-in-out h-0 duration-500 overflow-hidden"
            }
          >
            {navItems.map((item) => (
              <li
                key={item.id}
                className="px-8 py-2 text-3xl md:text-6xl font-bold duration-300 cursor-pointer text-[#fff] bg-clip-text hover:bg-gradient-to-t from-[#f6891f] to-rose-600 hover:text-transparent "
              >
                <NavLink to={item.url} onClick={handleClass}>{item.text}</NavLink>
              </li>
            ))}
          </div>
        </ul>
      </div>
        <div className="grid gap-8 px-8 md:px-0">

        <Locations  />
        <div className="flex lg:col-span-1 justify-center lg:justify-start items-center md:items-auto ">
            <ul className="flex gap-2 items-center">
              <li>
                <button>
                  <img src={facebook} alt="" className="w-10" />
                </button>
              </li>
              <li>
                <button>
                  <img src={instagram} alt="" className="w-10" />
                </button>
              </li>
              <li>
                <button>
                  <img src={youtube} alt="" className="w-10" />
                </button>
              </li>
              <li>
                <button>
                  <img src={linkedin} alt="" className="w-10" />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
