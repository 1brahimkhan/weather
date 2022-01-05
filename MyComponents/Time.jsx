import React, { useEffect, useState } from 'react'

export const Time = () => {
    let daysList = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'];
    let monthsList = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Aug', 'Oct', 'Nov', 'Dec'];


    var [date,setDate] = useState(new Date());
    useEffect(() => {
        var timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    });
    return (
        <div>
            <p>{date.getHours() + ":" + date.getMinutes() +" PM," + daysList[date.getDay()]+", " + monthsList[date.getMonth()]+" "+ date.getDate()+", "+date.getFullYear()}</p>
        </div>
    )
}