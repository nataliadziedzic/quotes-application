import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import quotes from '../../data/quotes.json';
import easyTasks from '../../data/easyTasks.json';
import toughTasks from '../../data/toughTask.json';

const Tasks = () => {
  const difficultyLevel = useSelector(state => state.taskReducer)

  const [tasksSet, setTasksSet] = useState(null)
  const [selectedTask, setSelectedTask] = useState(null)
  const [quoteIndex, setQuoteIndex] = useState(null)
  const [taskIndex, setTaskIndex] = useState(null)

  useEffect(() => {
    if (difficultyLevel) {
      setTasksSet(difficultyLevel === 'tough' ? toughTasks : easyTasks)
    }
  }, [difficultyLevel])

  useEffect(() => {
    if (tasksSet) {
      setQuoteIndex(Math.floor(Math.random() * quotes.length))
      setTaskIndex(Math.floor(Math.random() * tasksSet.length))
    }
  }, [tasksSet])

    const showTask = () => {
      setSelectedTask(tasksSet[taskIndex])
    }

  return (
    quoteIndex &&
    <div className='motivationBox'>
      <div className='motivationBox__textBox'>
        <h2 className='motivationBox__main'> {selectedTask ? selectedTask.name : quotes[quoteIndex].quote} </h2>
        <div
          className={
            selectedTask
              ? 'motivationBox__descriptionWrapper motivationBox__descriptionWrapper--center'
              : 'motivationBox__descriptionWrapper'
          }
        >
          <p className='motivationBox__description'>
            {selectedTask ? selectedTask.instruction : `- ${quotes[quoteIndex].author}`}
          </p>
        </div>
        <div className='motivationBox__btnContainer'>
          <Link to='/start'>
            <button type='button' className='motivationBox__btn'>
              Change
            </button>
          </Link>
          <button
            onClick={!selectedTask && showTask}
            className={selectedTask ? 'motivationBox__btn motivationBox__btn--disable' : 'motivationBox__btn'}
            type='button'
          >
            Get task
          </button>
        </div>
      </div>
    </div>
  )
};

export default Tasks;
