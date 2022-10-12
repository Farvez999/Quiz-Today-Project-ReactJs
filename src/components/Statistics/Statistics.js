import React, { useContext } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { QuizContext } from '../../layouts/Main';


const Statistics = () => {
    const quizs = useContext(QuizContext)

    const quizData = quizs.data.map(data => {
        const singleData = {
            name: data.name,
            total: data.total
        }
        return singleData;
    })
    console.log(quizData);


    return (
        <div className='mx-auto w-96 h-80 my-24'>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart width={500} height={400} data={quizData}>
                    <Bar dataKey="total" fill="#8884d8" />
                    <XAxis dataKey="name"></XAxis>
                    <YAxis></YAxis>
                    <Tooltip></Tooltip>
                </BarChart>

            </ResponsiveContainer>


        </div>
    );
};

export default Statistics;