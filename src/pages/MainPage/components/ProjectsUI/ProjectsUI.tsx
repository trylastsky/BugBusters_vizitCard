import React, { useState, useEffect } from "react";
import Modal from "./Modal/Modal"; //компонент Модалки
import stulus from "../../../../assets/icons/Stylus.svg"; 

// Импорт изображений проектов
import web_store_img from "../../../../assets/projects/web_store.png"; 
import web_snake_img from "../../../../assets/projects/snake_game.png";
import vr_game_img from "../../../../assets/projects/vr_game.png";
import web3_vote_img from "../../../../assets/projects/web3_vote.png";

import not_found_img from "../../../../assets/projects/404.png";

import "./ProjectsUI.css";

const projects = [
    { id: "web_store", name: "Магазин", image: web_store_img },
    { id: "web3_vote", name: "Платформа для голосований", image: web3_vote_img },
    { id: "vizitcard_site", name: "Сайт визитка", image: ""},
    { id: "snake_game", name: "Игра Змейка", image: web_snake_img },
    { id: "vr_game", name: "VR-игра", image: vr_game_img },
];

const ProjectsUI: React.FC = () => {
    const [currentImage, setCurrentImage] = useState(projects[0].image);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [activeProjectId, setActiveProjectId] = useState<string>(projects[0].id); // id активного проекта

    const handleProjectChange = (image: string, id: string) => {
        if (image) setCurrentImage(image);
        else setCurrentImage(not_found_img); //если изображение не найдено
        setActiveProjectId(id); // Установка активного проекта
    };

    const openModal = (image: string) => {
        setCurrentImage(image);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    // Эффект для управления overflow на body
    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = "hidden"; // Отключить прокрутку
        } else {
            document.body.style.overflow = "auto"; // Включить прокрутку
        }

        // Очистка эффекта при размонтировании компонента
        return () => {
            document.body.style.overflow = "auto"; // Убедитесь, что прокрутка всегда включена по умолчанию
        };
    }, [isModalOpen]);

    return (
        <div id="projects" className="projects">
            <h1 className="pink">Проекты</h1>
            <div className="projects-ui">
                <div className="project-list">
                    <h2>Список проектов</h2>
                    <div className="vertical-line"/>
                    <ul>
                        {projects.map(project => (
                            <li 
                                key={project.id} 
                                className={activeProjectId === project.id ? 'active' : ''}
                                onClick={() => handleProjectChange(project.image, project.id)}
                            >
                                {project.name}
                            </li>
                        ))}
                    </ul>
                </div>
                <img
                    src={stulus}
                    alt="Stylus"
                />
                <img 
                    src={currentImage} 
                    alt="Текущий проект" 
                    onClick={() => openModal(currentImage)} 
                    className="project-image"
                />
            </div>
            <Modal isOpen={isModalOpen} image={currentImage} onClose={closeModal} />
        </div>
    );
}

export default ProjectsUI;