import React from "react";
import { Link } from "react-router-dom";

const Card = ({ title, icon, description, link }) => {
  return (
    <Link to={link}>
      <div className="md:ml-20 md:my-3 ">
        <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow light:bg-gray-800 hover:dark:border-[#a3e635]">
          <span className="color text-5xl">
            <ion-icon name={icon}></ion-icon>
          </span>

          <Link to={link}>
            <h3 className="text-2xl font-bold">{title}</h3>
          </Link>
          <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
            {description}
          </p>
          <Link
            to={link}
            class="inline-flex items-center text-blue-600 hover:underline"
          >
            Open The Tool
            <svg
              class="w-5 h-5 ml-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
              <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
            </svg>
          </Link>
        </div>
      </div>
    </Link>
  );
};

export default Card;
