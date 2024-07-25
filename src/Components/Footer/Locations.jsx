import React from "react";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";

const Locations = (props) => {
  return (
    <div>
      <div className={`grid ${props.md==='md' ?'md:grid-cols-2' :'grid-cols-2'} gap-8`}>
        <div className="grid gap-4 text-sm md:text-auto">
          <p className="text-4xl font-bold">Location</p>
          <div>
            <p>adress location example</p>
            <p>adress location example 2</p>
            <p>adress location 3</p>
          </div>
          <div className="grid gap-1">
            <div className="flex gap-2">
              <PhoneIcon className="size-6" />
              <a href="tel:+96666666666">+96666666666</a>
            </div>
            <div className="flex gap-2">
              <EnvelopeIcon className="size-6" />
              <a href="mailto:example@info.com">example@info.com</a>
            </div>
          </div>
        </div>
        <div className="grid gap-4 text-sm md:text-auto">
          <p className="text-4xl font-bold">Location</p>
          <div>
            <p>adress location example</p>
            <p>adress location example 2</p>
            <p>adress location 3</p>
          </div>
          <div className="grid gap-1">
            <div className="flex gap-2">
              <PhoneIcon className="size-6" />
              <a href="tel:+96666666666">+96666666666</a>
            </div>
            <div className="flex gap-2">
              <EnvelopeIcon className="size-6" />
              <a href="mailto:example@info.com">example@info.com</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Locations;
