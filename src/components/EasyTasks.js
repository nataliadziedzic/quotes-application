import React from 'react';
import { Link } from "react-router-dom"
import quotes from "../data/quotes.json"
function EasyTask() {
    const tasksNames = ["Walk", "Meditation", "Visualization", "Yoga", "Stream of consciousness", "Gratefulness"]
    const tasksInstructions = [
        "Just try to go out for 30 minutes and relax. It will not only lighten your mood and improve your sleep but also strengthen your heart",
        "Set your mindset for the next day, it'll boost your attention span and help you focus on the right things. Meditation improves self-awareness and self-esteem, lowers levels of stress and anxiety and helps you create a more positive outlook on life.",
        "Sit in a comfortable position, close your eyes and imagine a scene in which you feel at peace, in as vivid detail as you can.  Let go of all tension",
        "Find your favourite yoga tutorial on the internet and start today - if you didn't already. There are no excuses. The benefits of a regular yoga practice are incredible!",
        "Sit down with a piece of paper and write out whatever is in your head. Overthinking is forbidden, don't choose your words. Do this especially when you feel overwhelmed or right after you wake up. Writing regularly gives us the opportunity to get our thoughts out without any fear of judgment from others. It's a way to understand what’s going on within, listen to inner voice, and strengthen intuition.",
        "What 3 things are you grateful for? Think deeply about them and feel them. See how many things you have right here and right now."
    ]
    const quoteIndex = Math.floor(Math.random() * quotes.length)
    const taskIndex = Math.floor(Math.random() * tasksNames.length)

    const showTask = () => {
        document.querySelector('.motivationBox__textBox__main').innerHTML = tasksNames[taskIndex]
        document.querySelector('.motivationBox__textBox__description').innerHTML = tasksInstructions[taskIndex]
        document.querySelector('.motivationBox__textBox__description').style.textAlign = 'center'
    }

    return (
        <div className="motivationBox">
            <div className="motivationBox__textBox">
                <h2 className="motivationBox__textBox__main"> {quotes[quoteIndex].quote} </h2>
                <div className="motivationBox__textBox__descriptionWrapper">
                    <p className="motivationBox__textBox__description"> - {quotes[quoteIndex].author} </p>
                </div>
                <div className="motivationBox__textBox__btnContainer">
                    <Link to="/quotes-application/start"><button className="motivationBox__textBox__btnContainer__btn">Change</button></Link>
                    <button onClick={showTask} className="motivationBox__textBox__btnContainer__btn author">Get task</button>
                </div>
            </div>
        </div>
    );
}

export default EasyTask;