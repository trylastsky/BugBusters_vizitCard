import "./MainPage.css";

import NavBar from "../../components/NavBar/NavBar";
import VizitCard from "./components/VizitCard/VizitCard";
import ShowCase from "./components/ShowCase/ShowCase";

const MainPage: React.FC = () => {
    return (
        <>
            <div className="main container">
                <div className="block-1">
                    <NavBar />
                    <VizitCard />
                </div>
                <ShowCase />
            </div>
        </>
    );
};

export default MainPage;
