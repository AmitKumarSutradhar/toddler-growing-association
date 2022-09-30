import React, { useState } from 'react';
import './Calculation.css'

const Calculation = ({ excercise }) => {

    const [breakTime, setBreak] = useState(0);

    let excerciseTime = 0;
    for (const activityTime of excercise) {
        excerciseTime = excerciseTime + (excercise[0].time);
    }


    return (
        <div className="right-bar">
            <div className="profile">
                <img src="../../../public/profile.png" alt="" />
                <div className="profile-info">
                    <h3>Bertha Hessel</h3>
                    <h5>29857 McLaughlin Union Apt. 639</h5>
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

            <p>Excercise Details</p>
            <p>Exercise time: {parseInt(excerciseTime)}</p>
            <p>Break time: {breakTime}</p>
        </div>
    );
};

export default Calculation;