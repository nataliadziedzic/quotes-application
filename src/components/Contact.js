import React from 'react';
function Contact() {
    let emailIsCorrect = false
    // Check if each field is completed
    const handleSend = (e) => {
        e.preventDefault();
        let isAllCompleted = [];
        const userData = document.querySelectorAll(".contact__input");
        userData.forEach(input => {
            if (input.value !== "") {
                isAllCompleted.push("ok")
                return isAllCompleted
            }
        })
        if (isAllCompleted.length === 3 && emailIsCorrect) {
            const div = document.querySelector(".contact__messageSucceed")
            const opacity = document.querySelector(".opacity")
            div.style.display = "block"
            opacity.style.backgroundColor = 'rgba(0, 0, 0, .5)'
            setTimeout(() => {
                document.querySelector('form').reset()
                opacity.style.backgroundColor = 'rgba(0, 0, 0, .2)'
                div.style.display = "none"
            }, 1500)
        }
    }
    // Check if email is typed correctly - must include '@' and characters before and after it.
    const handleCheck = (e) => {
        emailIsCorrect = false
        if (e.target.value.indexOf("@") !== -1 && e.target.value.indexOf("@") !== 0 && e.target.value.indexOf("@") < (e.target.value.length - 1)) {
            emailIsCorrect = true
        }
    }
    return (
        <div className="contact">
            <form className="contact__form">
                <input className="contact__input" type="text" placeholder="Enter your name" required />
                <input className="contact__input" type="email" onChange={handleCheck} placeholder="e-mail" required />
                <textarea className="contact__input contact__message" placeholder="message..." required></textarea>
                <button type="submit" className="contact__btn" onClick={handleSend}>Send</button>
                <div className="contact__messageSucceed">Thanks for your message!</div>
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