import React from "react";
import "./NavBar.css";

enum ActiveBlock {
    about,
    projects,
    contacts,
}

interface NavBarProps {
    activeBlock: ActiveBlock; 
    setActiveBlock: (block: ActiveBlock) => void; 
}

const NavBar: React.FC<NavBarProps> = ({ activeBlock, setActiveBlock }) => {
    return (
        <nav className="navBar">
            <ul>
                <li>
                    <a
                        className={activeBlock === ActiveBlock.about ? "active" : ""}
                        href="#about"
                        onClick={() => setActiveBlock(ActiveBlock.about)}
                    >
                        О нас
                    </a>
                </li>
                <li>
                    <a
                        className={activeBlock === ActiveBlock.projects ? "active" : ""}
                        href="#projects"
                        onClick={() => setActiveBlock(ActiveBlock.projects)}
                    >
                        Проекты
                    </a>
                </li>
                <li>
                    <a
                        className={activeBlock === ActiveBlock.contacts ? "active" : ""}
                        href="#contacts"
                        onClick={() => setActiveBlock(ActiveBlock.contacts)}
                    >
                        Контакты
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export { ActiveBlock, NavBar };
