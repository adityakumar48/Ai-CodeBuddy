import React from "react";

const Button = (props) => {
  const { type, title, className, borderRadius } = props;
  return (
    <div className="justify-center flex">
      <button
        {...props}
        className={`text-lg font-semibold ${className} duration-300	 bg-[#4154F1] text-[#fff] ${borderRadius} hover:bg-[#fff] text-center items-center flex justify-center hover:text-[#4154F1] border-2 transition-all hover:border-[#4154F1] font-poppins px-2 py-1`}
      >
        <span className="items-center justify-center flex pr-1">
          <ion-icon name="logo-github"></ion-icon>
        </span>{" "}
        {title}
      </button>
    </div>
  );
};

export default Button;
