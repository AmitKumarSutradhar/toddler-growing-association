import React, { useState } from 'react';
import './Calculation.css';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


// toast.configure()

const Calculation = ({ excercise }) => {

    const [breakTime, setBreak] = useState(0);

    let excerciseTime = 0;
    for (const activityTime of excercise) {
        excerciseTime = excerciseTime + (excercise[0].time);
    }

    const notify = () => {

        // Calling toast method by passing string
        toast('Hello Geeks')
    }


    return (
        <div className="right-bar">
            <div className="profile">
                <div className="profile-image">
                    <img src='/profile.png' alt='' />
                </div>

                <div className="profile-info">
                    <h3>Bertha Hessel</h3>
                    <h5>Stockton, California</h5>
                </div>
            </div>
            <div className="body-info">
                <div className="weight">
                    <p><b>75</b></p>
                    <p>Weight</p>
                </div>
                <div className="height">
                    <p><b>6.5</b></p>
                    <p>Height</p>
                </div>
                <div className="age">
                    <p><b>25</b>years</p>
                    <p>Age</p>
                </div>
            </div>
            <div className="break">
                <p>Add a break</p>
                <div className="select-break">
                    <button onClick={() => setBreak(10)}><span>10</span>s</button>
                    <button onClick={() => setBreak(20)}><span>20</span>s</button>
                    <button onClick={() => setBreak(30)}><span>30</span>s</button>
                    <button onClick={() => setBreak(40)}><span>40</span>s</button>
                    <button onClick={() => setBreak(50)}><span>50</span>s</button>
                </div>
            </div>

            <p>Activity Details</p>
            <div className="excercise-time">
                <div><p>Activity time: </p></div>
                <div><p>{parseInt(excerciseTime)}  seconds</p></div>
            </div>
            <div className="break-time">
                <div><p>Break time: </p></div>
                <div><p>{breakTime}  seconds</p></div>
            </div>
            <div className="">
                <button className='activity-completed' onClick={notify}>Activity Completed</button>
            </div>
        </div>
    );
};

export default Calculation;