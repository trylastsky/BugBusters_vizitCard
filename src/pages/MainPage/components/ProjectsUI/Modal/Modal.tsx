import React from "react";
import "./Modal.css"; // Создайте файл CSS для стилей модального окна

interface ModalProps {
    isOpen: boolean;
    image: string;
    onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, image, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <span className="close" onClick={onClose}>&times;</span>
                <img src={image} alt="Project" className="modal-image" />
            </div>
        </div>
    );
};

export default Modal;
