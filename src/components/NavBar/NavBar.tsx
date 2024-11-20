import "./NavBar.css";
import React from 'react';

const NavBar: React.FC = () => {
    return (
        <>
        <nav className="navBar">
            <ul>
                <li><a className="active" href="#about">О нас</a></li>
                <li><a href="#projects">Проекты</a></li>
                <li><a href="#contracts">Контакты</a></li>
            </ul>
        </nav>
        </>
    );
}

export default NavBar;