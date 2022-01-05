import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import { MyChart } from './MyChart'
import { Time } from './Time'

export const Body = (props) => {
    const [title, setTitle] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if (!title) {
            alert("Title or Description cannot be empty")
        }
        props.search(title);
    }
    return (
        <div>
            <div className="bg_card">
                <div className="container">
                    <div className="col d-flex">
                        <div className="left">
                            <form className="d-flex" onSubmit={submit}>
                                <h4>Your City</h4>
                                <input className="form-control me-2 w-50 h-70" type="search" placeholder="Search" aria-label="Search" value={title} onChange={(e) => { setTitle(e.target.value) }} id="title" />
                                <button className="btn btn-outline-primary btn-sm" type="submit">Search</button>
                            </form>
                            <div className="time">
                                <Time />
                                {/* {props.date} */}
                            </div>
                            <div className="weather d-flex">
                                {/* <img src={sunny} alt="Sunny Cloud" className="img-fluid" /> */}
                                <img src={props.icon} alt="Sunny Cloud" className="img-fluid" />
                                <p className="degree">{Math.round(props.temp)}°</p>
                            </div>
                            <p className="weather_name">{props.w_name}</p>
                            <div className="weather_description d-flex">
                                <div className="col">
                                    <h4>Humidity</h4>
                                    <p><b>{props.humidity}%</b></p>
                                </div>
                                <div className="col">
                                    <h4>Wind Speed</h4>
                                    <p><b>{props.w_speed} km/h</b></p>
                                </div></div>
                        </div>
                        <div className="right">
                            <MyChart
                                temp={props.temp}
                                name={props.name}
                                con_icon_1={props.con_icon_1}
                                con_icon_2={props.con_icon_2}
                                con_icon_3={props.con_icon_3}
                                avgtemp_c_1={props.avgtemp_c_1}
                                avgtemp_c_2={props.avgtemp_c_2}
                                avgtemp_c_3={props.avgtemp_c_3}
                                w_name={props.w_name}
                                icon={props.icon}
                                temp_1={props.temp_1}
                                temp_2={props.temp_2}
                                temp_3={props.temp_3}
                                temp_4={props.temp_4}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}