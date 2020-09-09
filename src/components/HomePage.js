import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'
function HomePage() {
    const permission = useSelector(state => state.permissionReducer)
    const text = []
    const text1 = 'Does lack of motivation prevent you from doing what you want in life?'
    const text2 = 'We know that feeling and it can happen to everyone. The key is to look for solutions and this is when your new app comes to the rescue!'
    const text3 = 'We will make sure to maintain the right level of motivation and physical activity in your life.'
    const [page, setPage] = useState(1)
    const handleNext = () => {
        setPage(page + 1)
    }
    if (page === 1) { text.push(text1) }
    else if (page === 2) {
        text.splice(0, 1);
        text.push(text2)
    }
    else {
        text.splice(0, 1);
        text.push(text3)
    }
    return (
        <div className="home">
            <h1 className="home__title">Fight for yourself!</h1>
            <p className='home__intro' > {text} </p>
            {page !== 3 ? <button className="home__next" onClick={handleNext}>Next</button> : undefined}
            {page === 3 ? <Link to={permission ? '/start' : '/login'}><button className="home__start">Start</button></Link> : undefined}
        </div>
    );
}

export default HomePage;