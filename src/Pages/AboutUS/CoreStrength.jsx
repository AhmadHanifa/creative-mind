import React from "react";

const CoreStrength = () => {
  return (
    <div className={` creative-bg `}>
      <div className="px-8 md:px-8 py-8 md:py-16 bg-gradient-to-t from-[#111] to-[30%] to-[#0000]">
        <div className="grid md:grid-cols-2">
          <div className="grid gap-2 md:gap-2 bg-gradient-to-t from-[#f6891f55] p-4 to-[#0000]">
            <p>Our Core Strength</p>
            <p className="text-3xl md:text-5xl font-bold   bg-clip-text bg-gradient-to-r from-[#f6891f] via-orange-300 to-rose-600 text-transparent">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias earum at soluta sapiente esse incidunt unde hic provident explicabo necessitatibus!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreStrength;
