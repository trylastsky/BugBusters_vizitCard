import "./NavBar.css";
import {useState} from 'react';

enum ActiveBlock {
    about,
    projects,
    contacts
}

const NavBar: React.FC = () => {

    const [activeBlock, setActiveBlock] = useState(ActiveBlock.about);

    return (
        <>
        <nav className="navBar">
            <ul>
                <li><a className={activeBlock === ActiveBlock.about ? "active" : "" } href="#about" onClick={() => setActiveBlock(ActiveBlock.about)}>О нас</a></li>
                <li><a className={activeBlock === ActiveBlock.projects ? "active" : ""} href="#projects" onClick={() => setActiveBlock(ActiveBlock.projects)}>Проекты</a></li>
                <li><a className={activeBlock === ActiveBlock.contacts ? "active" : ""} href="#contracts" onClick={() => setActiveBlock(ActiveBlock.contacts)}>Контакты</a></li>
            </ul>
        </nav>
        </>
    );
}

export default NavBar;