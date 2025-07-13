import React from 'react'

const MenuClose = (props) => {

    const menuBarCloses = () => {
        props.setMenuOpen(!props.menuOpen)
    }
    
  return (
    <div onClick={menuBarCloses} className='hover:opacity-70 active:scale-y-85' >
      <h3 className='font-[a4] text-[0.7vw] uppercase cursor-pointer text-right'>close</h3>
    </div>
  )
}

export default MenuClose
