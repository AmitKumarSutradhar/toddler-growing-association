import React, { useEffect, useState } from 'react';
import Calculation from '../Calculation/Calculation';
import Activities from '../Activities/Activities';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBaby } from '@fortawesome/free-solid-svg-icons'
import './Main.css';


const Main = () => {

    const [activities, setActivities] = useState([]);
    const [excercise, setEcercise] = useState([]);


    useEffect(() => {
        fetch('activity.json')
            .then(res => res.json())
            .then(data => setActivities(data))
    }, []);



    const handleAddToExcercise = (activity) => {
        console.log(activity);
        const newExcercise = [...excercise, activity];
        setEcercise(newExcercise);
    }



    return (
        <div className='main-container'>
            <div className="activities-container">
                <div className="site-header">
                    <FontAwesomeIcon icon={faBaby} size="6x"></FontAwesomeIcon>
                    <h1>Toddler Growing Association</h1>
                </div>

                <div className="activities">
                    {
                        activities.map(activity => <Activities
                            key={activity.id}
                            activity={activity}
                            handleAddToExcercise={handleAddToExcercise}
                        ></Activities>)
                    }
                </div>
            </div>
            <div className="activity-calculation-container">
                <Calculation excercise={excercise}></Calculation>
            </div>
        </div>
    );
};

export default Main;