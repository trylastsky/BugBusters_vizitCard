import PopUpInfoCase from "../../../../components/PopUpInfoCase/PopUpInfoCase";

import Clock from "../../../../assets/icons/Clock.svg";
import Lock from "../../../../assets/icons/Lock.svg";
import Sofa from "../../../../assets/icons/Sofa.svg";

const data_icons: string[] = [Clock, Lock, Sofa];

import data from "./data.json";

import "./ShowCase.css";

const ShowCase: React.FC = () => {

    return(<>
    <div className="show-case">
        <h1>Почему <span className="pink">Мы</span>?</h1>
        <div className="flexbox">
        {data.map((item, index) => (
            <PopUpInfoCase  key={index} text={item.text} icon_src={data_icons[index]} description={item.description}/>
        ))}
        </div>
        
    </div>
    </>)
}

export default ShowCase;