import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { allowPermission, denyPermission } from "./redux/actions/index"

function Login() {
    const dispatch = useDispatch()
    const user = useSelector(state => state.userReducer.username)
    const password = useSelector(state => state.userReducer.password)
    const permission = useSelector(state => state.permissionReducer)
    const [username, setUsername] = useState('');
    const [pass, setPass] = useState('');

    const [isUserCorrect, setIsUserCorrect] = useState(false)
    const [isPassCorrect, setIsPassCorrect] = useState(false)

    const handleSetUsername = e => {
        const userInput = e.target.value
        setUsername(userInput)
        userInput === user ? setIsUserCorrect(true) : setIsUserCorrect(false)
    }

    const handleSetPass = e => {
        const passInput = e.target.value
        setPass(passInput);
        passInput === password ? setIsPassCorrect(true) : setIsPassCorrect(false)
    }

    const handleValidation = () => {
        console.log(permission, user, password)
        if (username === '') { setIsUserCorrect(false) }
        if (pass === '') { setIsPassCorrect(false) }
        if (isUserCorrect && isPassCorrect) {
            dispatch(allowPermission())
        }
        else {
            dispatch(denyPermission())
        }
        document.querySelector('.loginBox__errorBox').classList.add('loginBox__errorBox--show')
    }
    useEffect(handleValidation, [pass, username])

    const errors = {
        usernameErr: 'Incorrect username',
        passErr: 'Incorrect password'
    }

    return (
        <div className="loginBox">
            <h2 className='loginBox__description'>You must login to see more</h2>
            <div className="loginBox__inputs">
                <label htmlFor="username">Username:</label>
                <input className="loginBox__input" type="text" name='username' value={username} onChange={handleSetUsername} /><br />
                <label htmlFor="password">Password:</label>
                <input className="loginBox__input" type="password" name='password' value={pass} onChange={handleSetPass} />
            </div>
            <div className="loginBox__btnContainer">
                <Link to={permission ? '/start' : '/login'}><button onClick={handleValidation} className="loginBox__login">Log in</button></Link>
                <Link to='/registration'><button className="loginBox__login">Not regitered yet?</button></Link>
            </div>
            <div className="loginBox__errorBox">
                {!isUserCorrect && <span className='loginBox__errMessage'>{errors.usernameErr}</span>}
                {!isPassCorrect && <span className='loginBox__errMessage'>{errors.passErr}</span>}
            </div>
        </div>
    );
}
export default Login;