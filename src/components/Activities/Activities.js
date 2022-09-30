import React from 'react';
import './Activities.css'

const Activities = ({ activity, handleAddToExcercise }) => {

    const { name, img, desc, age, time } = activity;
    // console.log(name);

    return (
        <div className="activity-card">
            <div className='card-info'>
                <img src={img} alt=""></img>
                <h2>{name}</h2>
                <p>{desc}</p>
                <p>For Age : <b>{age}</b></p>
                <p>Time Spet : <b>{time}</b></p>
            </div>
            <div className="btn">
                <button onClick={() => handleAddToExcercise(activity)} className='btn-cart'>
                    <p className='btn-text'>Add to Cart</p>
                </button>
            </div>

        </div>
    );
};

export default Activities;