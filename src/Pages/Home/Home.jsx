import React from "react";
import Hero from "../../Components/Hero/Hero";
import AboutSection from "./AboutSection";
import Services from "./Services";
import Clients from "./Clients";
import MediaCenter from "./MediaCenter";
import Reports from "./Reports";
import ContactSection from "../../Components/ContactSection/ContactSection";
import heroVideo from "../../Assets/8.mp4";

const Home = () => {
  return (
    <div>
      <Hero
        video={heroVideo}
        // img="https://images.unsplash.com/photo-1646503475889-5661ff674520?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <AboutSection />
      <Services />
      <Clients />
      <MediaCenter />
      <Reports />
      <ContactSection text="Get your business to scale new heights" />
      {/* <AboutSection />
        <AboutSection />
        <AboutSection /> */}
    </div>
  );
};

export default Home;
