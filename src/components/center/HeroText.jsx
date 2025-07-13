import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const HeroText = () => {

  const textRef = useRef(null)


  useGSAP(() => {
    let clutter = ""
    const splitedText = textRef.current.textContent.split("")

    splitedText.forEach(function(e){
      clutter += `<span>${e}</span>`
    })
    textRef.current.innerHTML = clutter
    
      gsap.from("h1 span",{
        y: 100,
        opacity: 0,
        delay: 2.3,
        stagger: 0.15,
        rotateZ: 8
      })
    })
  
  return (
    <div>
      <h1 ref={textRef} className="whitespace-nowrap px-3 overflow-hidden font-[u8] leading-[17vw] text-center uppercase text-[21vw] tracking-tight">
        Arock 
      </h1>
    </div>
  );
};

export default HeroText;
