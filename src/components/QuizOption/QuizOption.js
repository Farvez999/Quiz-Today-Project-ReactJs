import React from 'react';

const QuizOption = ({ option }) => {
    // console.log('C', option.correctAnswer)
    const checkOption = (option) => {
        console.log(option);
    }
    return (
        <div>
            <div>
                {/* <div>
                    <input
                        type="radio"
                        name="answer"
                        value={option}
                        className="ml-5 dark:bg-gray-800"
                    />
                    <label onClick={() => checkOption(option)} className="text-gray-700 dark:text-gray-400 text-lg ml-4">
                        {option}
                    </label>
                </div> */}
            </div>
        </div>
    );
};

export default QuizOption;