import React from "react";
import Title from "../../Components/Title/Title";
import Capabilities from "./Capabilities";
import Button from "../../Components/Button/Button";

const Section = (props) => {
  return (
    <div >
      <div className={`${props.float} block md:w-5/12 grid gap-8 md:gap-12`}>
        <Title
          fontSize="text-4xl md:text-9xl"
          title={props.title}
          description={props.description}
        />
        <Capabilities List={props.capList} />
        <div className="grid md:flex gap-4">
          <Button width="w-full" name="VIEW DETAILS" fontSize="text-sm" />
          <Button width="w-full" name="VIEW PORTFOLIO" fontSize="text-sm" />
        </div>
      </div>
    </div>
  );
};

export default Section;
