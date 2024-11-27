import { useState } from "react";
import { NavBar, ActiveBlock } from "../../components/NavBar/NavBar"; // Импортируем ActiveBlock

import VizitCard from "./components/VizitCard/VizitCard";
import ShowCase from "./components/ShowCase/ShowCase";
import AboutUI from "./components/AboutUI/AboutUI";
import ProjectsUI from "./components/ProjectsUI/ProjectsUI";
import Contacts from "./components/Contacts/Contacts";
import Footer from "../../components/Footer/Footer";
import ScrollToTopButton from "../../components/ScrollToTopButton/ScrollToTopButton";
import "./MainPage.css";

const MainPage: React.FC = () => {
    const [activeBlock, setActiveBlock] = useState(ActiveBlock.about); //часть логики вынесена в Footer

    return (<>
    <div className="main container">
        <div className="block-1">
            <NavBar 
                activeBlock={activeBlock} 
                setActiveBlock={setActiveBlock}/> 
            <VizitCard />
        </div>
            <ShowCase />
            <AboutUI />
            <ProjectsUI />
        <div className="block-5">
            <Contacts />
            <Footer
                activeBlock={activeBlock}
                setActiveBlock={setActiveBlock}
          />
        </div>
      </div>
<ScrollToTopButton></ScrollToTopButton>
    </>);
};

export default MainPage;
