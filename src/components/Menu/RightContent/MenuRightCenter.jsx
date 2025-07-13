import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const MenuRightCenter = () => {
  const headingRefs = useRef([]); // array of refs for each <h1>

  const moveAnimation = (index) => {
    const targetSpan = headingRefs.current[index]?.querySelector("div:nth-child(1)");
    if (!targetSpan) return;

    gsap.to(targetSpan, {
      y: "-50%",            // move second <span> down
      duration: 0.5,
      ease: "power2.inOut",
    });
    console.log("Hover animation triggered on:", targetSpan.textContent);
  };

  const resetAnimation = (index) => {
    const targetSpan = headingRefs.current[index]?.querySelector("div:nth-child(1)");
    if (!targetSpan) return;

    gsap.to(targetSpan, {
      y: "0%",              // reset second <span> to original position
      duration: 0.5,
      ease: "power2.inOut",
    });
  };

  return (
    <div>
      {["About", "Story", "Projects", "Releases"].map((item, index) => (
        <h1
          key={index}
          ref={(el) => (headingRefs.current[index] = el)} // assign ref
          onMouseEnter={() => moveAnimation(index)}
          onMouseLeave={() => resetAnimation(index)}
          className="font-[u7] tracking-tight uppercase text-[2vw] leading-[2vw] overflow-hidden h-[2vw]"
        >
          <div>
            <span style={{display: "block"}}>{item}</span>
          <span
            style={{ display: "block" }} // initial position
          >
            {item}
          </span>
          </div>
        </h1>
      ))}
    </div>
  );
};

export default MenuRightCenter;
