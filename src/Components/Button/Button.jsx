import React from "react";

const Button = (props) => {
  return (
    <div>
      <button
        className={`${
          props.size === "small"
            ? "px-3 pb-1 border  pt-1"
            : " border-2 px-6 pb-3 pt-2"
        } ${
          props.fontSize ? `${props.fontSize}` : "md:text-xl text-sm"
        }  ${props.width ? `${props.width}` : ""} rounded-full`}
      >
        {props.name}
      </button>
    </div>
  );
};

export default Button;
