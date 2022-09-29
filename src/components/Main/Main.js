// import React, { useEffect, useState } from 'react';
// import Activities from '../Activities/Activities';
// import './Main.css';


// const Main = () => {

//     const [activities, setActivities] = useState([]);

//     useEffect(() => {
//         fetch('activity.json')
//             .then(res => res.json())
//             .then(data => setActivities(data))
//     }, []);

//     return (
//         <div className='main-container'>
//             <div className="activities-container">
//                 {
//                     activities.map(activity => <Activities
//                         key={activity.id}
//                         activity={activity}
//                     ></Activities>)
//                 }
//             </div>
//             <div className="activity-calculation-container">
//                 <h2>Hello from calculation</h2>
//             </div>
//         </div>
//     );
// };

// export default Main;