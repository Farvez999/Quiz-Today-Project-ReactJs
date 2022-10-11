import React from 'react';

const QuizOption = ({ option }) => {
    console.log(option)
    return (
        <div>
            <div>
                <div>
                    <input
                        type="radio"
                        name="answer"
                        value={option}
                        className="ml-5 dark:bg-gray-800"
                    />
                    <label className="text-gray-700 dark:text-gray-400 text-lg ml-4">
                        {option}
                    </label>
                </div>
            </div>
        </div>
    );
};

export default QuizOption;