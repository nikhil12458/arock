import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const Black = () => {
  const blackRef = useRef(null);

  useGSAP(() => {
    gsap.to(blackRef.current, {
      y: "-100%",
      duration: 1,
      delay: 1.9,
    });
  });

  return (
    <div ref={blackRef} className="h-screen bg-[#111] w-full absolute z-10"></div>
  );
};

export default Black;
