import React from "react";
import ClientItem from "../../Components/Clients/ClientItem";
import { HomeIcon } from "@heroicons/react/24/solid";
import Title from "../../Components/Title/Title";

const Clients = (props) => {
  return (
    <div className="md:px-44 grid gap-8 py-16 ">
      <div className="px-8 md:px-0 ">
        <Title
          title="Our Clients"
          // description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi facilis provident nostrum hic facere? Quo, at!"
        />
      </div>

      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 md:gap-4">
        <ClientItem Clients={<HomeIcon />} />
        <ClientItem Clients={<HomeIcon />} />
        <ClientItem Clients={<HomeIcon />} />
        <ClientItem Clients={<HomeIcon />} />
        <ClientItem Clients={<HomeIcon />} />
        <ClientItem Clients={<HomeIcon />} />
        <ClientItem Clients={<HomeIcon />} />
        <ClientItem Clients={<HomeIcon />} />
        <ClientItem Clients={<HomeIcon />} />
        <ClientItem Clients={<HomeIcon />} />
        <ClientItem Clients={<HomeIcon />} />
        <ClientItem Clients={<HomeIcon />} />
      </div>
    </div>
  );
};

export default Clients;
