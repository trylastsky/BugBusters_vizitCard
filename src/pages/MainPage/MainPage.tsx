import "./MainPage.css";

import NavBar from "../../components/NavBar/NavBar";
import VizitCard from "./components/VizitCard/VizitCard";
import ShowCase from "./components/ShowCase/ShowCase";
import AboutUI from "./components/AboutUI/AboutUI";
import ProjectsUI from "./components/ProjectsUI/ProjectsUI";
import Footer from "../../components/Footer/Footer";

const MainPage: React.FC = () => {
    return (
        <>
            <div className="main container">
                <div className="block-1">
                    <NavBar />
                    <VizitCard />
                </div>
                <ShowCase />
                <AboutUI />
                <ProjectsUI />
                <Footer></Footer>
            </div>
        </>
    );
};

export default MainPage;
