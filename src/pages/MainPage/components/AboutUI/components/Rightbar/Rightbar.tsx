import option_img from "../../../../../../assets/icons/Option.svg";

import "./Rightbar.css";

const Rightbar: React.FC = () => {
    return(<div className="about-ui right-bar">
        <div className="logo-container">
            <div className="case">
                <h2>Технологии</h2>
                <img src={option_img} alt="logo_dark" />
            </div>
            <div className="vertical-line" />
        </div>
        <div className="text-block">
            <p>Мы используем самые современные технологии, но также не забываем про старые надежные решения.</p>
            
            <div>
                <h3>Языки</h3>
                <ul>
                    <li>C#</li>
                    <li>Javascript</li>
                    <li>Typescript</li>
                    <li>PHP</li>
                </ul>
            </div>
            
            <div>
                <h3>Библиотеки и Фреймворки</h3>
                <div style={{display:"flex", gap:110}}>
                <ul>
                    <li><a href="https://ru.legacy.reactjs.org/" target="_blank">React</a></li>
                    <li><a href="https://redux.js.org/" target="_blank">Redux</a></li>
                </ul>
                <ul>
                    <li><a href="https://vite.dev/" target="_blank">Vite</a></li>
                    <li><a href="https://nextjs.org/" target="_blank">Next.js</a></li>
                </ul>
                </div>
            </div>
            
        </div>
    </div>
    )
}

export default Rightbar;