import React from "react";
import Hero from "../../Components/Hero/Hero";
import Section from "./Section";
import { impressive_brand } from "./capList";
import { interactive_digital } from "./capList";
import { effective_communication } from "./capList";
import ContactSection from "../../Components/ContactSection/ContactSection";

const Services = () => {
  return (
    <div className="global-bg">
      <Hero
        title="Services"
        img="https://images.unsplash.com/photo-1646503475889-5661ff674520?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <div className="p-8 md:p-32">
        <div className=" flex flex-col gap-16">
          <Section
            float="md:float-start"
            title="Immpressive Brand"
            capList={impressive_brand}
            description="Catering to Saudi Arabia, we elevate your brand's essence by crafting a visual and verbal symphony that resonates, making your brand unforgettable."
          />
          <Section
            float="md:float-end"
            title="Interactive Digital"
            capList={interactive_digital}
            description="Experience digital innovation with cutting-edge website design and development. We craft immersive online experiences that blend captivating design with seamless functionality."
          />
          <Section
            float="md:float-start"
            title="Effective Communication"
            capList={effective_communication}
            description="Discover unparalleled growth with our communication strategies, clever marketing campaigns, and ads that elevate engagement, to create lasting impressions."
          />
        </div>
      </div>
      <ContactSection text="Let's get started on transforming your business" subtext="Tell us about you and your project

" />
    </div>
  );
};

export default Services;
