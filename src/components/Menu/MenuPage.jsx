import React, { useRef } from "react";
import MenuLeft from "./MenuLeft";
import MenuRight from "./MenuRight";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const MenuPage = (props) => {
  const menRef = useRef(null);
  useGSAP(() => {
    if (props.menuOpen) {
      gsap.to(menRef.current, {
        top: 0,
      });
    } else {
      gsap.to(menRef.current, {
        top: "100%",
      });
    }
  }, [props.menuOpen]);

  return (
    <div
      ref={menRef}
      className="fixed top-full h-screen flex w-full bg-[linear-gradient(#1A1A1A,#1A1A1A)] z-50 "
    >
      <MenuLeft />
      <MenuRight menuOpen={props.menuOpen} setMenuOpen={props.setMenuOpen} />
    </div>
  );
};

export default MenuPage;
