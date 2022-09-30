import React, { useState } from 'react';

const Calculation = ({ excercise }) => {

    const [breakTime, setBreak] = useState(0);

    let excerciseTime = 0;
    for (const activityTime of excercise) {
        excerciseTime = excerciseTime + (excercise[0].time);
    }


    return (
        <div>
            <h4>Profile</h4>
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