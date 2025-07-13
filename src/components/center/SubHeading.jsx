import React from "react";
import 'remixicon/fonts/remixicon.css'

const SubHeading = () => {
  return (
    <div className="flex justify-between items-center font-[a4]">
      <div className="flex items-center">
        <i className="ri-play-mini-fill border px-2 py-1 rounded-full"></i>
        <h3 className="uppercase leading-none text-xs ml-2">
          Play <br /> the film
        </h3>
      </div>
      <div className="flex gap-16 font-[a4]">
        <h3 className="uppercase leading-none text-xs">Creator <br /> Curator</h3>
        <h3 className="uppercase leading-none text-xs">New York <br />Los Angeles</h3>
      </div>
    </div>
  );
};

export default SubHeading;
