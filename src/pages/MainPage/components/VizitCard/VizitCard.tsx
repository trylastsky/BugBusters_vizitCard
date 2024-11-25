import React, { useEffect, useState } from "react";
import logo from "../../../../assets/icons/Logo.svg";
import Button from "./components/Button/Button";
import "./VizitCard.css";
import valuesData from "./VizitCard.json"; // Импортируем JSON-файл
import WithIntersectionObserver from "./components/WithInteractionObserver/WithIntersectionObserver"; // Импортируем созданный компонент

const VizitCard: React.FC = () => {
    const values = valuesData.values; // Массив ценностей
    const [currentValue, setCurrentValue] = useState(values[0]);
    const [isVisible, setIsVisible] = useState(false); // Состояние для отслеживания видимости
    const [fadeClass, setFadeClass] = useState("fade");

    useEffect(() => {
        let intervalId: number;

        if (isVisible) {
            intervalId = setInterval(() => {
                setFadeClass("fade-out"); // Начинаем анимацию исчезновения
                setTimeout(() => {
                    setCurrentValue((prevValue) => {
                        const currentIndex = values.indexOf(prevValue);
                        const nextIndex = (currentIndex + 1) % values.length;
                        return values[nextIndex];
                    });
                    setFadeClass("fade"); // После обновления текста начинаем анимацию появления
                }, 500); // Длительность анимации исчезновения
            }, 3500); // Каждые 2 секунды
        }

        return () => clearInterval(intervalId); // Очищаем интервал при размонтировании или изменении видимости
    }, [isVisible, values]);

    return (
        <WithIntersectionObserver onVisibilityChange={setIsVisible}>
            <div className="vizit-card">
                <div className="top-bar">
                    <div className="left">
                        <div className="text-block">
                            <h1>Bug Busters</h1>
                            <h2>
                                Команда{" "}
                                <span className="symbols">
                                    {"<"}
                                    <span className="pixel pink">web</span>
                                    {"/>"}
                                </span>{" "}
                                разработчиков
                            </h2>
                        </div>
                    </div>
                    <div
                        className="right"
                        style={{
                            alignItems:
                                currentValue === values[values.length - 1]
                                    ? "center"
                                    : "flex-start",
                        }}
                    >
                        <img className="logo" src={logo} alt="logo" />
                    </div>
                </div>
                <div className="bottom-bar">
                    <Button />
                    <h3>
                        Мы ценим <span className={"pink " + fadeClass}>{currentValue}</span>
                    </h3>
                </div>
            </div>
        </WithIntersectionObserver>
    );
};

export default VizitCard;
