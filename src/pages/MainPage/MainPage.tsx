import "./MainPage.css";

import NavBar from "../../components/NavBar/NavBar";
import VizitCard from "../../components/VizitCard/VizitCard";

const MainPage: React.FC = () => {
    return (
        <>
            <div className="main container">
                <div className="block-1">
                <NavBar />
                <VizitCard></VizitCard>
                </div>
            </div>
        </>
    );
};

export default MainPage;
