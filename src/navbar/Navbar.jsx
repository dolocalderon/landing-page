import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { nabvarRedes, navbarLinks } from '../utils/constants'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'




const Navbar = () => {


    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <nav className='fixed top-0 left-0 bg-blue-100/80 w-full  backdrop-blur-md z-50'>
            <div className='flex justify-between items-center sm:px-12 sm:py-6 px-4 py-3'>

                {/* Logo navbar */}
                <div>
                    <img src={logo} alt='Logo del sitio' className='w-[100px]' />
                </div>

                {/* Boton*/}
                <button onClick={toggleMenu} className='md:hidden text-blue-950'>
                    {/* imagen que se crea co coordenadas */}
                    <svg className='w-6 h-6'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'>
                        {isOpen ?
                            <FontAwesomeIcon icon={faXmark} className='sm:text-2xl text-lg text-blue-950 hover:text-blue-800 transition-all duration-300' />
                            : 
                            <FontAwesomeIcon icon={faBars} className='sm:text-2xl text-lg text-blue-950 hover:text-blue-800 transition-all duration-300' />
                        }


                    </svg>
                </button>

                {/* Navegacion desktop */}
                <div className='hidden md:block'>
                    <ul className='flex sm:space-x-8 space-x-4'>
                        {navbarLinks.map((link) => (
                            <li key={link.id}>
                                <a
                                    className='text-blue-950 sm:text-lg text-sm hover:text-blue-800 transition-transform hover:scale-110
                                transform inline-block duration-300'
                                    href={link.link}>
                                    {link.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Navegacion redes en el escritorio */}
                <div className='hidden md:block'>
                    <ul className='flex space-x-4'>
                        {nabvarRedes.map((link) => (
                            <li key={link.id}>
                                <a
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='inline-block transition-transform duration-300 transform hover:scale-125'
                                    href={link.link}>
                                    <FontAwesomeIcon icon={link.icon} className='sm:text-2xl text-lg text-blue-950 hover:text-blue-800 transition-all duration-300' />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Menu mobile */}
            <div className={`md:hidden absolute w-full bg-blue-100 transition-all duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
                <ul className='flex flex-col px-4 py-2'>
                    {navbarLinks.map((link) => (
                        <li key={link.id} className='py-2 text-center'>
                            <a
                                className='text-blue-950 hover:text-blue-800'
                                href={link.link} onClick={() => setIsOpen(false)}>
                                {link.title}</a>
                        </li>
                    ))}
                </ul>


                <ul className='flex space-x-4 px-4 py-2 border-t border-blue-950 justify-center'>
                    {nabvarRedes.map((link) => (
                        <li key={link.id}>
                            <a
                                target='_blank'
                                rel='noopener noreferrer'
                                className='inline-block'
                                href={link.link} onClick={() => setIsOpen(false)}>
                                <FontAwesomeIcon icon={link.icon} className='text-lg text-blue-950 hover:text-blue-800' />
                            </a>
                        </li>
                    ))}
                </ul>
            </div>


        </nav>
    )
}

export default Navbar
