import NavBar from "../NavBar/NavBar";

import "./Footer.css";

const Footer: React.FC = () => {
    return(<footer>
        <NavBar/>
        <p>&copy; Bug Busters {new Date().getFullYear()}</p>
    </footer>)
}

export default Footer;