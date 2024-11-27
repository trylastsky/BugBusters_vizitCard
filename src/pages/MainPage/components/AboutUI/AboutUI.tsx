import Leftbar from "./components/Leftbar/Leftbar";
// import Main from "./components/Main/Main";
import Rightbar from "./components/Rightbar/Rightbar";

import "./AboutUI.css";


const AboutUI: React.FC = () => {
    return(<>
        <div id="about" className="about">
            <h1>О <span className="pink">нас</span></h1>
            <div className="about-ui">
            <Leftbar/>
            {/* <Main/>  demoVersion*/}
            <Rightbar/>
            </div>
        </div>
    </>)
}

export default AboutUI;