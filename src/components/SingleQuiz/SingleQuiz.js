import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizDetials from '../QuizDetials/QuizDetials';

const SingleQuiz = () => {
    const quiz = useLoaderData()
    const { name, total, questions, question, correctAnswer } = quiz.data
    // console.log(quiz.data.questions[0].options[0])
    console.log(quiz.data.questions)
    return (
        <div>
            <h2>Quiz of {name}</h2>

            {
                quiz.data.questions.map(options => <QuizDetials
                    options={options}></QuizDetials>)
            }

        </div>
    );
};

export default SingleQuiz;