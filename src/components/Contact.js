import React from 'react';
function Contact() {
    function clear(e) {
        e.preventDefault()
        document.querySelector('form').reset()

    }

    return (
        <div className="contact">
            <form className="contact__form">
                <input className="contact__input" type="text" placeholder="Enter your name" />
                <input className="contact__input" type="text" placeholder="e-mail" />
                <textarea className="contact__message" placeholder="message..."></textarea>
                <button className="contact__btn" onClick={clear}>Send</button>
            </form>
            <div className="contact__informations">
                <h2 className="contact__info"><i className="far fa-envelope"> </i> mymotivation@.com</h2>
                <h2 className="contact__info"><i className="fas fa-phone"></i> +48 000 000 000</h2>
                <h2 className="contact__info"><i className="fab fa-facebook-f"></i> /mymotivation</h2>
            </div>
        </div>
    );
}

export default Contact;