import React from 'react'

const Menu = (props) => {

  const menuBarOpens = () => {
    props.setMenuOpen(!props.menuOpen)
  }
  
  return (
    <div onClick={menuBarOpens} className='font-[a4] uppercase text-[0.7vw] opacity-95 cursor-pointer hover:opacity-70 active:scale-95 '>
      menu
    </div>
  )
}

export default Menu
