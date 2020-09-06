import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
function Regiatration(props) {
    const [username, setUsername] = useState('');
    const [pass, setPass] = useState('');
    const [email, setEmail] = useState('');
    const [isUserCorrect, setIsUserCorrect] = useState(false)
    const [isPassCorrect, setIsPassCorrect] = useState(false)
    const [isEmailCorrect, setIsEmailCorrect] = useState(false)
    const [isAllCorrect, setIsAllCorrect] = useState(false)

    const handleSetUsername = e => {
        const userInput = e.target.value
        setUsername(userInput)
        userInput.length < 2 ? setIsUserCorrect(false) : setIsUserCorrect(true)
    }

    const handleSetEmail = e => {
        const emailInput = e.target.value
        setEmail(emailInput)
        if (emailInput.indexOf('@') !== -1 && e.target.value.indexOf("@") !== 0 && e.target.value.indexOf("@") < (e.target.value.length - 1)) setIsEmailCorrect(true)
        else setIsEmailCorrect(false)
    }

    const handleSetPass = e => {
        const passInput = e.target.value
        setPass(passInput)
        passInput.length < 6 ? setIsPassCorrect(false) : setIsPassCorrect(true)
    }
    const handleValidation = () => {
        if (isUserCorrect && isPassCorrect && isEmailCorrect) {
            setIsAllCorrect(true)
            props.loginData.user = username
            props.loginData.password = pass
        }
        else {
            setIsAllCorrect(false)
            document.querySelector('.registerBox__errorBox').classList.add('registerBox__errorBox--show')
        }
    }
    useEffect(handleValidation, [isUserCorrect, isEmailCorrect, isPassCorrect])

    const errors = {
        usernameErr: 'Username should be at least 2 signs long',
        emailErr: 'E-mail is not correct',
        passErr: 'Password cannot be shorter than 6 signs'
    }

    return (
        <div className="registerBox">
            <h2 className='registerBox__description'>Sign up</h2>
            <div className="registerBox__inputs">
                <label className="registerBox__label" htmlFor="username">Username:</label>
                <input className="registerBox__input" type="text" name='username' value={username} onChange={handleSetUsername} /><br />
                <label className="registerBox__label" htmlFor="email" id="email">E-mail:</label>
                <input className="registerBox__input" type="text" name='email' value={email} onChange={handleSetEmail} /><br />
                <label className="registerBox__label" htmlFor="password">Password:</label>
                <input className="registerBox__input" type="password" name='password' value={pass} onChange={handleSetPass} />
            </div>
            <div className="registerBox__btnContainer">
                <Link to={isAllCorrect ? '/start' : '/registration'}> <button onClick={handleValidation} className="loginBox__register">Sign up</button></Link>
                <Link to='/login'><button className="registerBox__register"> Back to login</button></Link>
            </div>
            <div className="registerBox__errorBox">
                {!isUserCorrect && <span className='registerBox__errMessage'>{errors.usernameErr}</span>}
                {!isPassCorrect && <span className='registerBox__errMessage'>{errors.passErr}</span>}
                {!isEmailCorrect && <span className='registerBox__errMessage'>{errors.emailErr}</span>}
            </div>
        </div>
    );
}

export default Regiatration;