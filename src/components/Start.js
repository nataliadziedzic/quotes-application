import React from 'react';
import { Route, Redirect, Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { selectToughTask, selectEasyTask } from "./redux/actions/index";

function Start(props) {

    const dispatch = useDispatch()


    return (
        <Route render={() => (
            props.permission ? (<div className="start">
                <h1 className="start__welcome">Welcome!</h1>
                <p className="start__question">How are you feeling today?</p>
                <div className="start__btnContainer">
                    <Link to='/tasks'><button onClick={() => dispatch(selectToughTask())} className="start__choice">I'm feeling great!</button></Link>
                    <Link to='/tasks'><button onClick={() => dispatch(selectEasyTask())} className="start__choice">I'm feeling low.</button></Link>
                </div>
            </div>) : (
                    <Redirect to='/login' />
                )
        )} />
    );
}

export default Start;