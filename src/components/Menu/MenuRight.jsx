import React from "react";
import MenuClose from "./MenuClose";
import Logo from "../Navbar/Logo";
import MenuRightCenter from "./RightContent/MenuRightCenter";
import MenuRightBottom from "./RightContent/MenuRightBottom";

const MenuRight = (props) => {
  return (
    <div className="w-1/3 h-full px-2 py-3 pr-5 ">
      <MenuClose menuOpen={props.menuOpen} setMenuOpen={props.setMenuOpen} />
      <div className="flex flex-col gap-32 items-start center-content h-full w-full py-6 px-28">
        <div className="scale-[1.2]"><Logo /></div>
        <MenuRightCenter />
        <MenuRightBottom />
      </div>
    </div>
  );
};

export default MenuRight;
