import React from 'react'
import Logo from './Logo'
import Menu from './Menu'

const NavBar = (props) => {
  return (
    <div className='flex w-full items-start justify-between px-2 py-2 pr-5'>
      <Logo />
      <Menu menuOpen={props.menuOpen} setMenuOpen={props.setMenuOpen} />
    </div>
  )
}

export default NavBar
