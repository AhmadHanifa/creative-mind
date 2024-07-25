import React from "react";
import Hero from "../../Components/Hero/Hero";
import Title from "../../Components/Title/Title";
import ProjectItem from "./ProjectItem";
import ContactSection from "../../Components/ContactSection/ContactSection";

const Portfolio = () => {
  return (
    <div>
      <Hero
        title="Portfolio"
        img="https://images.unsplash.com/photo-1646503475889-5661ff674520?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <div className="p-8 md:px-44 mt-16">
        <Title fontSize="text-5xl md:text-8xl" title="Our Projects" description="We work closely with our clients, to ensure they are completely satisfied" />
      </div>
      <ProjectItem />
      <ContactSection text="If your business is seeking clear growth targets, consider partnering with Element8 to pave your way to success." />
    </div>
  );
};

export default Portfolio;
