import "./MainPage.css";

import NavBar from "../../components/NavBar/NavBar";
import VizitCard from "../../components/VizitCard/VizitCard";

const MainPage: React.FC = () => {
    return (
        <>
            <div className="main container">
                <NavBar />
                <VizitCard></VizitCard>
            </div>
        </>
    );
};

export default MainPage;
