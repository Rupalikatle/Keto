import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'  
import LogoHotel from '../Components/Images/LogoHotel.png'        

const Navbar = () => {
    return (
        <>
            <nav className='navbar'>
                <a className='logo'>
                    <img className='logo-1' src={LogoHotel} alt="" />
                </a>
                <ul className="nav-links">
                    <Link to='/home' className='home'>
                        <li >HOME</li>
                    </Link>
                    <Link to='/about' className='about'>
                        <li>ABOUT</li>
                    </Link>
                    <Link to='/ourroom' className='our-room'>
                        <li>OUR ROOM</li>
                    </Link>
                    <Link to='/gallary' className='gallery'>
                        <li>GALLERY</li>
                    </Link>
                    <Link to='/blog' className='blog'>
                        <li>BLOG</li>
                    </Link>
                    <Link to='/contact' className='contact'>
                        <li>CONTACT US</li>
                    </Link>
                </ul>
            </nav>
        </>
    )
}

export default Navbar