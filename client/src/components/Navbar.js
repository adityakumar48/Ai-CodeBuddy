import React, { useState } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

const Navbar = () => {
  let [open, setOpen] = useState(false);

  return (
    <div className=" w-full z-[999] fixed  top-0 left-0">
      <div className="md:flex  bg-white md:bg-white opacity-90 items-center  justify-between  md:py-0 py-4 md:px-10 px-7">
        <div className="font-bold w-[60%] mt-1 md:w-[16%] md:ml-7 text2xl cursor-pointer flex items-center font-poppins text-gray-800">
          <Link href="/">
            <p>
              <span className="text-[#4154F1]">Ai</span> Code-Buddy
            </p>
          </Link>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>
        <ul
          className={`md:flex  md:items-center md:pb-0 pb-12 absolute md:static bg-white md:bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20" : "top-[-490px]"
          }   `}
        >
          {[
            { name: "Home", Link: "/" },
            { name: "About", Link: "/#service" },
            { name: "Tools", Link: "/works" },
          ].map((item) => {
            return (
              <li className="md:ml-6 text-lg ms:my-0 my-6" key={item.name}>
                <Link href={item.Link}>
                  <a
                    onClick={() => setOpen(!open)}
                    className="text-gray-800 hover:text-[#4154F1] font-poppins font-semibold duration-500"
                  >
                    {item.name}
                  </a>
                </Link>
              </li>
            );
          })}
          <div className="mx-2">
            <Link href="/contact">
              <Button
                onClick={() => setOpen(!open)}
                title={`Repoisitory`}
                className={`px-4`}
                borderRadius={`rounded-lg`}
              />
            </Link>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
