import { useState } from "react";

import "./PopUpInfoCase.css";
    
interface PopUpInfoCaseProps {
    text: string,
    icon_src: string; 
    description: string[];
}

const PopUpInfoCase: React.FC<PopUpInfoCaseProps> = ({text, icon_src, description}) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen); // Переключаем состояние
    };
    
    return(<>
    <div className={`pop-up-case ${isOpen ? 'active' : ''}`}>

             <div className={`pop-up-case-info ${isOpen ? 'active' : ''}`} onClick={handleClick}>
                <p>{text}</p>
                <img src={icon_src} alt="icon"/>
            </div>
                  <div className="description hidden">
                     {description.map((line, index) => (
                        <p key={index}>{line}</p> 
                    ))}
                </div>
    </div>
    </>)
}

export default PopUpInfoCase;