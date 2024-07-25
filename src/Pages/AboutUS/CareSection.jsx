import React from "react";

const list = [
  {
    title: "Our Crew",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo harum  dolorum officiis, itaque soluta ipsum unde voluptas enim tempora ullam beatae alias esse eveniet, ex totam minima voluptatibus ipsa consequatur architecto, suscipit velit iusto? Possimus libero, numquam expedita totam atque debitis incidunt eaque!",
  },
  {
    title: "Our Clients",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo harum doloribus repudiandae dolorum officiis, itaque soluta ipsum unde voluptas enim tempora ullam beatae alias esse eveniet, ex totam minima voluptatibus ipsa consequatur architecto, suscipit velit iusto? Possimus libero, numquam expedita totam atque debitis incidunt eaque!",
  },
  {
    title: "Our Crew",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo harum doloribus repudiandae dolorum officiis, itaque soluta ipsum unde voluptas enim tempora ullam beatae alias esse eveniet numquam expedita totam atque debitis incidunt eaque!",
  },
];

const CareSection = () => {
  return (
    <div className="relative">
      <div className="px-8 py-8 md:py-16 grid gap-8 ">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative grid md:place-items-center">
            <p className=" text-4xl md:text-7xl font-bold  md:leading-tight bg-clip-text bg-gradient-to-b from-[#f6891f] via-[#f6891f] to-rose-600 text-transparent">
              We Care
            </p>
          </div>
          <div className="grid gap-20 flex-none min-w-full px-4 sm:px-6 md:px-0 ">
            {list.map((item) => (
              <div className="h-full">
                <p className="border-[#fff] font-bold text-3xl md:text-7xl">
                  {item.title}
                </p>
                <p className="border-[#fff] text-sm lg:text-auto">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareSection;
