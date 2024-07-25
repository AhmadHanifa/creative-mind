import React from "react";
import Hero from "../../Components/Hero/Hero";
import AboutSection from "./AboutSection";
import BelieveSection from "./BelieveSection";
import CoreStrength from "./CoreStrength";
import CareSection from "./CareSection";
import VisionSection from "./VisionSection";

const AboutUs = () => {
  return (
    <div>
      <Hero title="About Us" img="https://images.unsplash.com/photo-1646503475889-5661ff674520?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <AboutSection />
      <BelieveSection />
      <CoreStrength />
      <CareSection />
      <VisionSection />
    </div>
  );
};

export default AboutUs;
