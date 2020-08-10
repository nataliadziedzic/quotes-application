import React from 'react';
import { Route, Redirect, Link } from 'react-router-dom';
function Start(props) {
    return (
        <Route render={() => (
            props.permission ? (<div className="start">
                <h1 className="start__welcome">Welcome!</h1>
                <p className="start__question">How are you feeling today?</p>
                <div className="start__btnContainer">
                    <Link to='/quotes-application/tough'><button className="start__choice">I'm feeling great!</button></Link>
                    <Link to='/quotes-application/easy'><button className="start__choice">I'm feeling low.</button></Link>
                </div>
            </div>) : (
                    <Redirect to='/quotes-application/login' />
                )
        )} />
    );
}

export default Start;