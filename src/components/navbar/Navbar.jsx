import React, { useState } from 'react';
import { ReMenu3Line, RiCloseLin } from 'react-icons/ri';
import './navbar.css'
import logo from '../../assets/logo.svg'


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar_links'>
        <div className='gpt3__navbar-links_logo'>
          <img src={logo} alt="logo" />
        </div>
        <div className='gpt3__navbar-links_container'>
          <p><a href='#home'>Home</a></p>
          <p><a href='#wgpt3'>What is GPT3</a></p>
          <p><a href='#possibility'>Open AI</a></p>
          <p><a href='#features'>CaseStudies</a></p>
          <p><a href='#blog'>Library</a></p>
        </div>
      </div>
      <div className='gpt3__navbar-sign'>
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      {/*<div className='gpt3__navbar-menu'>
          {toggleMenu
            ? <ReCloseLin color = '#fff' size ={27} onclick = {() => setToggleMenu(false)} />
            : <ReMenu3Line color = '#fff' size ={27} onclick = {() => setToggleMenu(true)} />
          }
          {toggleMenu && (<div className='gpt3__navbar_menu_container scale-up-center'></div>)}
       </div>*/}
    </div>
  )
}

export default Navbar