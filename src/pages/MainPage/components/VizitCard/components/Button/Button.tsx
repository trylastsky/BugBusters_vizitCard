// import { useState } from "react";
import "./Button.css";

const Button: React.FC = () => {
    // const [toggleOrderForm, setToggleOrderForm] = useState<boolean>(false);

    return (<>
            <button className="vizit-card button" onClick={() => alert("Эта функция пока не доступна - Если вы хотите связаться с нами, советуем перейти во вкладку ''Контакты''")}><p>Заказать сайт</p></button>   
        </>);
};

export default Button;
