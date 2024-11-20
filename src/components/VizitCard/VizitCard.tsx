import logo from "../../assets/icons/Logo.svg"; //логотип
import Button from "./Button/Button";
import "./VizitCard.css";

const VizitCard: React.FC = () => {
    return (
        <>
            <div className="vizit-card">
                <div className="left">
                    <div className="text-block">
                    <h1>Bug Busters</h1>
                    <h2>
                        Команда <span className="symbols">{"<"}<span className="pixel pink">web</span>{"/>"}</span>  разработчиков
                    </h2>  
                    </div>
                    <Button/>
                </div>
                <div className="right">
                    <img className="logo" src={logo} alt="logo" />
                    <h3>
                        Мы ценим <span className="pink">качество</span>
                    </h3>
                </div>
            </div>
        </>
    );
};

export default VizitCard;
