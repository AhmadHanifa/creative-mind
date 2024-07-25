import React from "react";

const AboutSection = () => {
  return (
    <div className={` creative-bg `}>
      <div className="px-8 md:px-8 py-8 md:py-16 bg-gradient-to-t from-[#111] to-[30%] to-[#0000]">
        <div className="grid">
          <div className="grid gap-2 md:gap-2 ">
            <p>We are</p>
            <p className="text-3xl md:text-5xl font-bold   bg-clip-text bg-gradient-to-r from-[#f6891f] via-orange-300 to-rose-600 text-transparent">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione libero, iure temporibus eligendi explicabo, veniam quo a enim distinctio aut nesciunt asperiores, mollitia est vitae molestias accusamus ea expedita exercitationem quisquam! Eveniet necessitatibus, consequatur ullam quas praesentium iure, nam omnis quis cupiditate corporis laudantium ad autem perferendis in aliquam facere?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
