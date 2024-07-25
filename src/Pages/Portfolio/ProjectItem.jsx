import React, { useState } from "react";
import { projects, options } from "./projects";

const ProjectItem = () => {
  const [selectedOption, setSelectedOption] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState(projects);

  const handleOptionChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);

    if (selectedValue === "all") {
      setFilteredProjects(projects);
    } else {
      const filteredProjects = projects.filter((project) => {
        return project.category.toLowerCase() === selectedValue;
      });
      setFilteredProjects(filteredProjects);
    }
  };

  return (
    <div className="flex flex-col w-full ">
      <div className="flex justify-center md:justify-end w-full px-8 pb-16 md:pb-4 md:pe-4 ">
        <select className="cursor-pointer w-full md:w-auto px-4 pb-2 border pt-1 bg-[#0000] rounded-full " value={selectedOption} onChange={handleOptionChange}>
          {options.map((option) => (
            <option
              className="text-[#222]"
              value={option.value}
              key={option.value}
            >
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className="p-1 grid md:grid-cols-2 lg:grid-cols-3 gap-1">
        {filteredProjects.map((item) => (
          <div className="group relative overflow-hidden max-h-[320px]">
            <a href="/portfolio" className="relative overflow-hidden">
              <img
                className="group-hover:scale-105 duration-300"
                src={item.img}
                alt={item.title}
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectItem;
