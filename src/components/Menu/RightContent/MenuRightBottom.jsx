import React from "react";
import 'remixicon/fonts/remixicon.css'

const MenuRightBottom = () => {
  return (
    <div className="grid grid-cols-[1fr_1fr] grid-rows-[auto] gap-x-20 gap-y-12 ">
        <div className="col-start-1 col-end-2 row-start-1 row-end-2 ">
          <h3 className="uppercase font-[a4] text-[0.7rem] tracking-[0rem] leading-none opacity-70 ">
            Follow <br /> <span className="inline-block ml-1">(AROCK®)</span>
          </h3>
        </div>
        <div className="col-start-1 col-end-2 row-start-2 row-end-3">
            <h3 className="uppercase font-[a4] text-[0.7rem] tracking-[0rem] leading-none opacity-70 ">
            Listen <br /> <span className="inline-block ml-1">(AROCK®)</span>
          </h3>
        </div>
        <div className="col-start-1 col-end-2 row-start-3 row-end-4">
            <h3 className="uppercase font-[a4] text-[0.7rem] tracking-[0rem] leading-none opacity-70 ">
            Get In Touch
          </h3>
        </div>
        <div className="col-start-1 col-end-2 row-start-4 row-end-5 whitespace-nowrap">
            <h3 className="uppercase font-[a4] text-[0.7rem] tracking-[0rem] leading-none opacity-70 ">
            SAN DIEGO <br /> BPM MUSIC <br /> 1600 NATIONAL AVE <br /> SAN DIEGO, CA 92123
          </h3>
        </div>

        
        <div className="col-start-2 col-end-3 row-start-1 row-end-2 ">
          <h3 className="uppercase font-[a4] text-[0.7rem] tracking-[0rem] leading-none opacity-70 ">
            Instagram <br /> youtube
          </h3>
        </div>
        <div className="col-start-2 col-end-3 row-start-2 row-end-3">
            <h3 className="uppercase font-[a4] text-[0.7rem] tracking-[0rem] leading-none opacity-70 ">
            spotify <br /> mixcloud
          </h3>
        </div>
        <div className="col-start-2 col-end-3 row-start-3 row-end-4">
            <h3 style={{color: "black"}} className="uppercase bg-white w-fit px-0.5 py-0.5 font-[a4] text-[0.7rem] tracking-[0rem] leading-none opacity-70 ">
            email <i style={{color: "black"}} className="ri-arrow-right-s-line"></i>
          </h3>
        </div>
        <div className="col-start-2 col-end-3 row-start-4 row-end-5 whitespace-nowrap">
            <h3 className="uppercase font-[a4] text-[0.7rem] tracking-[0rem] leading-none opacity-70 ">
            LOS ANGELES <br /> 6255 SUNSET BLVD. <br /> SUITE #700 <br /> LOS ANGELES, CA 90028
          </h3>
        </div>
    </div>
  );
};

export default MenuRightBottom;
