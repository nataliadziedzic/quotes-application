import React from 'react';
import { Link } from "react-router-dom"
import quotes from "../data/quotes.json"

function ToughTask() {
    const tasksNames = ["Bulgarian Split Squat", "Kang Squat", "Squat and Lunge", "Side-To-Side Squat Jump", "Assisted Reverse Side Situp", "Leg Raise and Reach Clap", "Lying Windshield Wipers", "Russian Twist", "Side-To-Side Crunch", "Plank With Hip Dip"]
    const tasksInstructions = [
        "Do the squat with the back leg elevated on a bench or a chair. Complete 10 reps on each side.",
        "Place your hands behind your head, move your torso forward as parallel to the floor as possible, bend your knees and get your torso more upright to transition into a squat position. Reverse the movement and try to complete 15 reps.",
        "Do a regular squat than take a large step forward with your left foot and lower down toward the ground allowing both legs to bend to approximately 90 degrees. Return to start. Compete 15 reps on each side",
        "Place your feet shoulder-width apart, bend your knees and jump side to side landing into a squat. Compete 14 reps ",
        "Lie down on one side, resting most of weight on it. With legs in the air at a 45-degree angle put your arms on the ground for support. Bend your knees as you bring them toward your chest, and lift your chest to meet them. Lower back to start. Repeat 15 times on each side",
        "Lie down with legs raised slightly off the ground and then lift your legs as high as you can; at the same time, bring your chin as close to your chest as possible and clap your hands behind your legs.  Repeat 15 times.",
        "Lie on your back with your arms straight out to the sides. Lift your legs and slightly touch the ground with your feets on one side, come back to the center and go to the other side. Compete 10 reps on each side",
        "Sit on your sit bones as you lift your feet from the floor. With your legs bended at 90 degree straighten your spine at a 45-degree angle from the floor, use your abdominals to twist to the right, then back to center, and then to the left. Compete 15 reps on each side",
        "Lie on your back, bend your knees so that your feet are flat on the floor, arms by sides. Move your shoulder blades and head slightly off the ground and reach your right hand to your right foot, return to start and quickly repeat on the opposite side. Compete 15 reps on each side.",
        "Start in a low plank position with your body in a straight line, your elbows bent and under your shoulders and your feet hip-width apart. Move right hip to right side, but stop before it touch the floor. Reverse the movement and repeat on the left side. Compete 10 reps on each side.",
    ]
    const quoteIndex = Math.floor(Math.random() * quotes.length)
    const taskIndex = Math.floor(Math.random() * tasksNames.length)

    const showTask = () => {
        document.querySelector('.motivationBox__main').innerHTML = tasksNames[taskIndex]
        document.querySelector('.motivationBox__description').innerHTML = tasksInstructions[taskIndex]
        document.querySelector('.motivationBox__description').style.textAlign = 'center'
    }

    return (
        <div className="motivationBox">
            <div className="motivationBox__textBox">
                <h2 className="motivationBox__main"> {quotes[quoteIndex].quote} </h2>
                <div className="motivationBox__descriptionWrapper">
                    <p className="motivationBox__description"> - {quotes[quoteIndex].author} </p>
                </div>
                <div className="motivationBox__btnContainer">
                    <Link to="/start"><button className="motivationBox__btn">Change</button></Link>
                    <button onClick={showTask} className="motivationBox__btn">Get task</button>
                </div>
            </div>
        </div>
    );
}

export default ToughTask;