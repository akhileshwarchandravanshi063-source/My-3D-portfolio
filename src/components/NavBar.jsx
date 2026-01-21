import React from "react";
import { navLinks } from "../constants/index.js";
import { useState, useEffect } from "react";
const NavBar = () => {

    const [scrolled, setScrolled] = useState(false);
    const handleScroll = () => {
        if (window.scrollY > 10) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (

        <header className={`navbar ${scrolled ? 'scrolled' : 'not-scrolled'}`}>
            <div className="inner">
                <a className="logo" href="#hero">
                    Akhileshwar
                </a>

                <nav className="desktop">
                    <ul>
                        {navLinks.map(({ link, name }) => (
                            <li key={name} className="group">
                                <a href={link}>
                                    <span>{name}</span>
                                    <span className="underline"></span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <a className="contact-btn" href="#contact" >
                    <div className="inner">
                        <span>Contact me</span>
                    </div>
                </a>
            </div>

        </header >
    );
};

export default NavBar;