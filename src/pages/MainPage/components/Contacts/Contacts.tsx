//icons
import messanger_icon from "../../../../assets/icons/Messanger.svg";
import phone_icon from "../../../../assets/icons/Phone.svg";
import mail_icon from "../../../../assets/icons/Mail.svg";

import "./Contacts.css";

const Contacts: React.FC = () => {
    return (
        <div id="contacts" className="contacts">
            <h1 className="pink">Контакты</h1>
            <div className="contacts-list">
                <div className="contact-case">
                    <div className="top-bar">
                        <h2>Telegram</h2>
                        <img src={messanger_icon} alt="_icon" />
                    </div>
                    <div className="contact">
                        <a href="https://t.me/BugBusterss" target="_blanket">
                            <p>@BugBusterss</p>
                        </a>
                    </div>
                </div>
                <div className="contact-case">
                    <div className="top-bar">
                        <h2>Телефон</h2>
                        <img src={phone_icon} alt="phone_icon" />
                    </div>
                    <div className="contact">
                        <a href="tel:+7 937 992-77-18">
                            <p>+7 937 992-77-18</p>
                        </a>
                    </div>
                </div>
                <div className="contact-case">
                    <div className="top-bar">
                        <h2>Эл.Почта</h2>
                        <img src={mail_icon} alt="messenger_icon" />
                    </div>
                    <div className="contact">
                        <a href="mailto:Deleron972@gmail.com">
                            <p>Deleron972@gmail.com</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contacts;
