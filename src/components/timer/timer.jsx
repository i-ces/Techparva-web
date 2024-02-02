import React, { useState, useEffect } from 'react'

const Timer = (props) => {

    // let eventdate = '12/23/2022'
    let eventdate = props.countdown_time
    const [timeLeft, setTimeLeft] = useState({})
    let year = new Date().getFullYear()
    const difference = +new Date(`${eventdate}`) - +new Date()
    let timeleft = {}
    if (difference > 0) {
        timeleft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            min: Math.floor((difference / 1000 / 60) % 60),
        }
    }
    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(timeleft);
        }, 1000);
        return () => clearTimeout(timer)
    });
    const timerComponents = [];
    Object.keys(timeLeft).forEach((interval) => {
        if (!timeLeft[interval]) {
            return;
        }

        timerComponents.push(
            <span>
                {timeLeft[interval]} {interval}{" "}
            </span>
        );
    });
    return (
        <div className="countdowncontainer" style={{ 'zIndex': 2 }}>
            {timerComponents.length ?
                <div className="countdown">
                    <h3>{timeleft.days} days</h3>
                    <h3>{timeleft.hours} hours</h3>
                    <h3>{timeleft.min} min</h3>
                </div> : <div className="countdown"><h3>Registration Closed</h3></div>
            }
        </div>
    )
}

export default Timer;