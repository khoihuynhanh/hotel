// import hooks from react
import { useState, useEffect } from 'react'

import { NavLink } from 'react-router-dom'

// import logo
import logoWhite from '../assets/images/logo-white.png'
import logoDark from '../assets/images/logo-dark.png'

function Header() {
    const [header, setHeader] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', handleScrollHeader)
        return () => {
            window.removeEventListener('scroll', handleScrollHeader)
        }
    }, [])
    const handleScrollHeader = () => {
        window.scrollY > 50 ? setHeader(true) : setHeader(false)
    }

    return (
        <header className={
            `${header ?
                'bg-white py-6 shadow-lg' :
                'bg-transparent py-8'} 
                fixed z-50  w-full transition-all duration-500
                `
        }>

            <div className='container mx-auto flex flex-col items-center gap-y-6 lg:flex-row lg:justify-between lg:gap-y-0'>
                <NavLink to='/'>
                    {header ? (
                        <img className='w-[160px]' src={logoDark} />
                    ) : (
                        <img className='w-[160px]' src={logoWhite} />
                    )}
                </NavLink>

                <nav className={`${header ? 'text-primary' : 'text-white'} flex gap-x-4 lg:gap-x-8 tracking-[3px] text-[15px] items-center uppercase`}>
                    <NavLink 
                        to='/' 
                        className={({ isActive }) =>
                            isActive ? "text-accent" : ""
                        }    
                    >
                        Home
                    </NavLink>
                    <NavLink 
                        to='/restaurant' 
                        className={({ isActive }) =>
                            isActive ? "text-accent" : ""
                        }    
                    >
                        Restaurant
                    </NavLink>
                    <NavLink 
                        to='/spa' 
                        className={({ isActive }) =>
                            isActive ? "text-accent" : ""
                        }    
                    >
                        Spa
                    </NavLink>
                    {/* <NavLink 
                        to='/contact' 
                        className={({ isActive }) =>
                            isActive ? "text-accent" : ""
                        }    
                    >
                        Contact
                    </NavLink> */}
                </nav>        

            </div>

        </header>
    );
}

export default Header;