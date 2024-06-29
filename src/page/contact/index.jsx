import React, { useState } from "react";
import "./contact.scss";

const BOT_TOKEN = "7133064436:AAE11MDDY8hmQ2E7ivSYPqHku7k4Zpj-yUg";
const CHAT_ID = "-1001658369787";
const USER_ID = "5009656627";

// https://api.telegram.org/bot7133064436:AAE11MDDY8hmQ2E7ivSYPqHku7k4Zpj-yUg/getUpdates

const Contact = () => {
    const [fName, setFName] = useState("John");
    const [email, setEmail] = useState("jogn@gmail.com");
    const [message, setMessage] = useState("lorem ipsum dolor");

    const handleSendMessage = (e) => {
        e.preventDefault();
        let text = "User: %0A";
        text += `Name: <b>${fName}</b> %0A`;
        text += `Email: <b>${email}</b> %0A`;
        text += `Message: <b>${message}</b> %0A`;

        let url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${USER_ID}&text=${text}&parse_mode=html`;
        let api = new XMLHttpRequest();
        api.open("GET", url, true);
        api.send();
    };

    return (
        <section id="contact">
            <div className="contact container">
                <div className="contact__left">
                    <h2>Get in touch</h2>

                    <p>contact@e-comm.ng</p>
                    <p>+234 4556 6665 34</p>
                    <p>20 Prince Hakerem Lekki Phase 1, Lagos.</p>
                </div>
                <form
                    onSubmit={handleSendMessage}
                    className="contact__form"
                    action=""
                >
                    <div className="contact__form__input">
                        <label htmlFor="fullName">FullName</label>
                        <input
                            value={fName}
                            onChange={(e) => setFName(e.target.value)}
                            type="text"
                            placeholder="James Doe"
                            id="fullName"
                        />
                    </div>
                    <div className="contact__form__input">
                        <label htmlFor="email">Email</label>
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            placeholder="jamesdoe@gmail.com"
                            id="email"
                        />
                    </div>
                    <div className="contact__form__input">
                        <label htmlFor="message">Message</label>
                        <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            type="text"
                            placeholder="Type your message"
                            id="message"
                            rows={5}
                        />
                    </div>
                    <button>submit</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
