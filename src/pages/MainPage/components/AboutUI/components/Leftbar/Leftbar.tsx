import logo_dark from "../../../../../../assets/icons/Logo_dark.svg";

import "./Leftbar.css";

const Leftbar: React.FC = () => {
    return (
        <div className="about-ui left-bar">
            <div className="logo-container">
                <div className="case">
                <h2>О нас</h2>
                <div className="vertical-line" />
                </div>
                <img src={logo_dark} alt="logo_dark" />
            </div>
            <div className="text-block">
             
                <p><span className="h3">Bug Busters  </span>— это <br /> сплоченная команда, <br /> состоящая из опытных <br /> специалистов своего дела</p>
                <p>Мы считаем, что в первую очередь <br /> наше решение должно быть <br /> безошибочным для вас.  Об этом <br /> говорит наше название.</p>
                <p><h3>Расшифровка:</h3>Bug Busters — истребители ошибок</p>
            </div>
        </div>
    );
};

export default Leftbar;
