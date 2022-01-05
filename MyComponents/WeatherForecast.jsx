import React from 'react'

export const WeatherForecast = (props) => {
    let monthsList = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Aug', 'Oct', 'Nov', 'Dec'];

    var d = new Date();
    var today = d.getDate();
    var month = monthsList[d.getMonth()];
    return (
        <div>
            <div className="container d-flex">
                <div className="row">
                    <h3>Today</h3>
                    <img className="fore_icon" src={props.icon} alt="Sunny Cloud" />
                    <p>Temperature</p>
                    <h3>{Math.round(props.temp)}°</h3>
                </div>
                <div className="row">
                    <h3>{month + " "}{today + 1}</h3>
                    <img className="fore_icon" src={props.con_icon_1} alt="Sunny Cloud"/>
                    <p>Temperature</p>
                    <h3>{Math.round(props.avgtemp_c_1)}°</h3>
                </div>
                <div className="row">
                    <h3>{month + " "}{today + 2}</h3>
                    <img className="fore_icon" src={props.con_icon_2} alt="Sunny Cloud" />
                    <p>Temperature</p>
                    <h3>{Math.round(props.avgtemp_c_2)}°</h3>
                </div>
                <div className="row">
                    <h3>{month + " "}{today + 3}</h3>
                    <img className="fore_icon" src={props.con_icon_3} alt="Sunny Cloud" />
                    <p>Temperature</p>
                    <h3>{Math.round(props.avgtemp_c_3)}°</h3>
                </div>
            </div>
        </div>
    )
}