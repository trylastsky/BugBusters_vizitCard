import React, { useEffect, useState } from 'react';
import './ScrollToTopButton.css'; // Импортируйте CSS для стилизации стрелки

const ScrollToTopButton: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Проверяем, достиг ли пользователь конца страницы
            if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight) {
                setIsVisible(true); // Показываем стрелку
            } else {
                setIsVisible(false); // Скрываем стрелку
            }
        };

        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll); // Чистим обработчик при размонтировании
        };
    }, []);

    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Плавная прокрутка вверх
        });
    };

    return (
        <div>
            {isVisible && (
                <button className="scroll-to-top" onClick={handleScrollToTop}>
                    &circ;
                </button>
            )}
        </div>
    );
}

export default ScrollToTopButton;
