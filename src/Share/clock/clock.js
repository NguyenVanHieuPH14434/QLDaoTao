import React from "react";
import './clock.scss';

const Clock = () => {
    let time = new Date().toLocaleTimeString('en-US', { hour12: false });
    let today = new Date().toLocaleDateString("en-GB");
    const [Ctime, setCtime] = React.useState(time);
    const [date, setDate] = React.useState(today);
    const updateTime = () => {
        time = new Date().toLocaleTimeString('en-US', { hour12: false });
        setCtime(time);
    }
    setInterval(updateTime, 1000);
    return( 
        <>
            <span className="clock">
                {Ctime} Ngày {date}
            </span>
        </>
    )
}
export default Clock;