import { useState } from "react";
import "./Button.css";

const Button: React.FC = () => {
    const [toggleOrderForm, setToggleOrderForm] = useState<boolean>(false);

    return (
        <>
            <button
                className="vizit-card button"
                onClick={() => setToggleOrderForm(true)}
            >
                <p>Заказать сайт</p>
            </button>
            {toggleOrderForm && <></>}
        </>
    );
};

export default Button;
