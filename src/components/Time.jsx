import React, {useState, useEffect} from 'react';

const Time = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000)

        return () => clearInterval(intervalId);
    }, []);


    const showTime = currentTime.getHours()
        + ':' + currentTime.getMinutes()
        + ':' + currentTime.getSeconds()
    return (
        <div>
            <h2 style={{textAlign: "center"}}>Current time</h2>
            <h2 style={{textAlign: "center"}}>{showTime}</h2>
        </div>
    );
};

export default Time;