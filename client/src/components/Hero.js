import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import Button from "./Button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ToolButton from "./ToolButton";

const Hero = () => {
  return (
    <div className={`${styles.header}`}>
      <div className="intro flex h-[100vh] pt-10 md:pt-20 px-6 md:px-12">
        <div className="i-left flex relative pt-16 flex-1 flex-col">
          <div className="i-name flex flex-col ">
            <span className="text-6xl  md:text-7xl  w-9/12 font-mulish font-semibold pb-6 text-black ">
              Welcome, to the AI of Coding Buddy!
            </span>
            <span className="w-11/12 md:w-9/12 py-2">
              Our AI coding tools empower you to streamline your development
              process and transform your ideas into reality. Say goodbye to the
              tedious and time-consuming aspects of coding and hello to a world
              of efficiency and productivity. With our cutting-edge technology,
              you can easily write code, debug, and optimize your applications
              in a matter of minutes.
            </span>
          </div>
          <div className="HeroBtns py-4 flex items-center">
            <Link to="/tools">
              <ToolButton
                title="Tools ->"
                className="mt-2 px-3"
                borderRadius={`rounded-lg`}
              />
            </Link>
          </div>
        </div>
        <div
          className={`${styles.iright} md:flex-1 flex-1 pt-3 md:pt-3 md:relative md:block hidden`}
        >
          <img src="/images/startup.png" alt="" />
          <img className={styles.rocketAnimation} src="/images/rocket-bg.png" />
          <img src="/Group.png" alt="" />
          <motion.img
            initial={{ left: "-30%" }}
            whileInView={{ left: "-15%" }}
            transition={{
              duration: 2,
              // repeat: Infinity,
              repeatDelay: 1,
              type: "spring",
            }}
            src="/images/rocket-up.png"
            alt="rocket"
          />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Hero;
