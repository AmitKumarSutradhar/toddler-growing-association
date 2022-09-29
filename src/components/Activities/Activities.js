import React from 'react';
import './Activities.css'

const Activities = ({ activity }) => {

    const { name, img, desc, age, time } = activity;
    console.log(name);

    return (
        <div>
            <img src={img} alt=""></img>
            <p>{name}</p>
            <p>{desc}</p>
            <p>{age}</p>
            <p>{time}</p>
        </div>
    );
};

export default Activities;