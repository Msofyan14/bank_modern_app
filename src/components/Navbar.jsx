import { useState, useEffect, useRef } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  let useClickOutside = (handler) => {
    let domNode = useRef();

    useEffect(() => {
      let maybeHandler = (event) => {
        if (!domNode.current.contains(event.target)) {
          handler();
        }
      };
      document.addEventListener("mousedown", maybeHandler);

      return () => {
        document.removeEventListener("mousedown", maybeHandler);
      };
    });

    return domNode;
  };

  let domNode = useClickOutside(() => {
    setToggle(false);
  });

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <a href="#">
        {" "}
        <img src={logo} alt="hoobank" className="w-[124px] h-[32px] sidebar" />
      </a>
      <div
        ref={domNode}
        className="sm:hidden flex flex-1 justify-end items-center"
      >
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />
      </div>
      <div
        className={`${
          toggle ? "flex" : "sm:flex hidden"
        } p-6  absolute top-14 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar sm:static sm:p-0 bg-hamburger-menu `}
      >
        <ul className="list-none flex flex-col sm:flex-row justify- items-center flex-1 ">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer text-[16px] ${
                index === navLinks.length - 1 ? "mr-0" : "mb-4 sm:mb-0 sm:mr-10"
              } text-slate-800 sm:text-white hover:text-[#5CE1E6]`}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
