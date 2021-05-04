import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { introductionText } from '../../variables';

const HomePage = () => {
  const permission = useSelector((state) => state.permissionReducer);
  const [page, setPage] = useState(1);

  const handleNext = () => {
    setPage(page + 1);
  };

  return (
    <div className="home">
      <h1 className="home__title">Fight for yourself!</h1>
      <p className="home__intro"> {introductionText[page - 1]} </p>
      {page !== 3 ? (
        <button type="button" className="home__next" onClick={handleNext}>
          Next
        </button>
      ) : undefined}
      {page === 3 ? (
        <Link to={permission ? '/start' : '/login'}>
          <button type="button" className="home__start">
            Start
          </button>
        </Link>
      ) : undefined}
    </div>
  );
};

export default HomePage;
