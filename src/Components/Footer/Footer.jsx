import React from "react";
import Locations from "./Locations";
import facebook from "../../Assets/socialMedia/facebook-01.svg";
import instagram from "../../Assets/socialMedia/instagram-01.svg";
import youtube from "../../Assets/socialMedia/youtube-01.svg";
import linkedin from "../../Assets/socialMedia/linkedin-01.svg";
import Button from "../Button/Button";
import {navItems} from "../Navbar/NavList"
import { Link } from "react-router-dom";


const Footer = () => {

  const handleClick = () => {
    window.scrollTo(0, 0);
  }


  return (
    <div className="">
      <div className="border-t border-[#fff3] pt-16 px-8 md:px-44 grid">
        <div className="w-full h-full grid md:grid-cols-2 gap-8">
          <div>
            <Locations md='md'/>
          </div>
          <div>
            <div className="flex flex-wrap gap-4">
              <Button name="feature 1" size="small" fontSize='text-sm'/>
              <Button name="feature 2" size="small" fontSize='text-sm'/>
              <Button name="feature 2" size="small" fontSize='text-sm'/>
              <Button name="service 1" size="small" fontSize='text-sm'/>
              <Button name="service 2" size="small" fontSize='text-sm'/>
              <Button name="service 3" size="small" fontSize='text-sm'/>
              <Button name="service 4" size="small" fontSize='text-sm'/>
              <Button name="service 5" size="small" fontSize='text-sm'/>
              <Button name="service 6" size="small" fontSize='text-sm'/>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 items-center py-8 gap-4">
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
          <div className="lg:col-span-3">
            <ul className="flex  gap-4 items-center md:items-auto justify-evenly">
              {navItems.map((item) => (
                <li
                  key={item.id}
                  className="text-sm md:text-xl md:font-bold duration-300 cursor-pointer text-[#fff] bg-clip-text hover:bg-gradient-to-t from-[#f6891f] to-rose-600 hover:text-transparent "
                >
                <Link to={item.url} onClick={handleClick}>{item.text}</Link>
                  
                </li>
              ))}
            </ul>
          </div>
        </div>
        <hr className="opacity-25 " />
        <div>
          <div className="flex gap-2  justify-center py-4">
            <p>All right reserved to <a href="/" className="font-bold">
              CREATIVE MAIND
            </a></p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
