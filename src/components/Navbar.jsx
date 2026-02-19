import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { menu, close } from "../assets";

const Navbar = () => {
    const [active, setActive] = useState("");
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            if (scrollTop > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`${styles.paddingX
                } w-full flex items-center py-4 fixed top-0 z-20 transition-all duration-300 ${scrolled ? "bg-black/20 backdrop-blur-md border-b border-white/5" : "bg-transparent"
                }`}
        >
            <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
                <Link
                    to='/'
                    className='flex items-center gap-2'
                    onClick={() => {
                        setActive("");
                        window.scrollTo(0, 0);
                    }}
                >
                    {/* Updated Text as per request */}
                    <p className='text-cyan-400 text-[16px] font-bold cursor-pointer font-sans tracking-wide'>
                        PORTFOLIO
                    </p>
                </Link>

                {/* Desktop Links */}
                <ul className='list-none hidden sm:flex flex-row gap-8'>
                    {navLinks.map((nav) => (
                        <li
                            key={nav.id}
                            className={`${active === nav.title ? "text-cyan-400" : "text-gray-300"
                                } hover:text-white text-[15px] font-medium cursor-pointer transition-colors font-sans`}
                            onClick={() => setActive(nav.title)}
                        >
                            <a href={`#${nav.id}`}>{nav.title}</a>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu */}
                <div className='sm:hidden flex flex-1 justify-end items-center'>
                    <img
                        src={scrolled ? menu : menu}
                        alt='menu'
                        className='w-[24px] h-[24px] object-contain cursor-pointer opacity-80'
                        onClick={() => setActive(!active)}
                    />

                    <div
                        className={`${!active ? "hidden" : "flex"
                            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl sidebar border border-white/10 bg-slate-900/90 backdrop-blur-xl`}
                    >
                        <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
                            {navLinks.map((nav) => (
                                <li
                                    key={nav.id}
                                    className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-cyan-400" : "text-secondary"
                                        }`}
                                    onClick={() => {
                                        setActive(!active);
                                        setActive(nav.title);
                                    }}
                                >
                                    <a href={`#${nav.id}`}>{nav.title}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
