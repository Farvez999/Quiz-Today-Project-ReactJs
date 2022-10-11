import React from 'react';
import QuizOption from '../QuizOption/QuizOption';

const QuizDetials = ({ options }) => {
    console.log(options);
    return (
        <div>
            <div className='bg-white p-6 rounded shadow-lg'>
                <p className='mb-2 text-xl font-bold leading-none sm:text-2xl'>{options.question}</p>
                {/* <p className='text-gray-700 '>Options:</p> */}
                <div className='px-4 py-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-16'>
                    <div className='grid gap-8 row-gap-5 mb-8 lg:grid-cols-2 lg:row-gap-8'>
                        {
                            options.options.map(option => <QuizOption option={option}></QuizOption>
                            )
                        }
                    </div>
                </div>

            </div>
            {/* <div className="card w-96 bg-white shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">{options.question}</h2>
                    <p>Option</p>
                    <div>
                        {
                            options.options.map(option => <QuizOption option={option}></QuizOption>
                            )
                        }
                    </div>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div> */}



        </div>
    );
};

export default QuizDetials;