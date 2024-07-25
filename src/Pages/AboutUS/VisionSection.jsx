import React from "react";

const VisionSection = () => {
  return (
    <div
      className="bg-cover bg-center"
      style={{
        backgroundImage: `url(${"https://images.unsplash.com/photo-1608555307638-992062b31329?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"})`,
      }}
    >
      <div>
        <div className="h-screen grid items-center justify-center md:justify-start">
          <p className="ps-0 md:ps-32 text-4xl md:text-6xl font-bold text-center md:text-start">
            New Dimension of innovation
          </p>
        </div>
        <div className="h-screen grid md:w-3/4 items-end">
          <div className=" grid gap-2 md:gap-2 p-16 md:p-32">
            <p className="font-bold">Our Vision</p>
            <p className="text-3xl md:text-5xl font-bold">
              To create a reality where the answer to the most complex questions
              is technology, and transform ideas into reality through a clearly
              defined purpose and careful positioning, embodying our branding.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionSection;
