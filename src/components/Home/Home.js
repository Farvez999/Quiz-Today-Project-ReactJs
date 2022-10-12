import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { QuizContext } from '../../layouts/Main';
import Quiz from '../Quiz/Quiz';
import SingleQuiz from '../SingleQuiz/SingleQuiz';

const Home = () => {
    const quizs = useContext(QuizContext)

    return (
        <div>
            {/* Header section start  */}
            <section>
                <div className="bg-gray-100">
                    <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 text-gray-900">
                        <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl text-gray-800">
                            Welcome to the world’s largest quiz community.
                        </h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl text-gray-900">
                            Play a quiz or create your own. Join a virtual or live event. There's a Sporcle for everyone!
                        </p>

                    </div>
                </div>
                <img
                    src="https://media.istockphoto.com/photos/quiz-picture-id933914672?k=20&m=933914672&s=612x612&w=0&h=wJmODzzL7fCYd2jw6y-r9VULPl4BLPpTPnt0R1JBCNg="
                    alt=""
                    className="w-5/6 mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 bg-gray-500"
                />
            </section>

            {/* Header section end  */}

            <div className='px-4 py-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-16'>
                <div className='grid gap-8 row-gap-5 mb-8 lg:grid-cols-4 lg:row-gap-8'>
                    {
                        quizs.data.map(quiz => <Quiz
                            key={quiz.id}
                            quiz={quiz}
                        ></Quiz>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;
