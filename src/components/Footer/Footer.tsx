import { useEffect } from "react";
import {NavBar, ActiveBlock } from "../NavBar/NavBar";
import "./Footer.css";

interface FooterProps {
    activeBlock: ActiveBlock; // Пропс для передачи текущего активного блока
    setActiveBlock: (block: ActiveBlock) => void; // Функция для изменения активного блока
}



const Footer: React.FC<FooterProps> = ({activeBlock, setActiveBlock}) => {

    useEffect(() => {
        const handleScroll = () => {
            if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight) setActiveBlock(ActiveBlock.contacts); // Меняем активный блок на контакты
            else if (window.scrollY === 0) setActiveBlock(ActiveBlock.about); // при поднятии вверх страницы активным станет раздел о нас
        };
    
        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll); //Чистим обработчик при размонтировании
        };
    }, [setActiveBlock]);

    return(<footer>
        <NavBar activeBlock={activeBlock} setActiveBlock={setActiveBlock}/>
        <p>&copy;Bug Busters {new Date().getFullYear()}</p>
    </footer>)
}

export default Footer;