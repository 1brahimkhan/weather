import './App.css';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Body } from './MyComponents/Body';


function App(props) {

  const [val, setItems] = useState([]);
  let search = "lonavala";
  // let key=`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=a420620650216a39798c524c74e6b17c`

  //   useEffect(() => {
  //     axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=a420620650216a39798c524c74e6b17c`)
  //         .then(res => {
  //             console.log(res.data)
  //             const { temp,humidity } = res.data.main;
  //             const { main } = res.data.weather[0];
  //             const { speed } = res.data.wind;
  //             const val ={
  //               temp,
  //               humidity,
  //               main,
  //               speed
  //             }
  //             setItems(val);
  //         }).catch(err => {
  //             console.log(err)
  //         })
  // }, [])
  const [se, setSearch] = useState('mumbai');

  useEffect(() => {
    axios.get(`http://api.weatherapi.com/v1/forecast.json?key=e57c938000904073999113539211309 &q=${se}&days=5&aqi=no&alerts=no`)
      .then(res => {
        // console.log(res.data)
        const { name } = res.data.location;
        const { temp_c, humidity, wind_kph } = res.data.current;
        const { text, icon } = res.data.current.condition;
        const { temp_f } = res.data.forecast.forecastday[0].hour[0];
        const con_icon_1 = res.data.forecast.forecastday[0].day.condition.icon;
        const con_icon_2 = res.data.forecast.forecastday[1].day.condition.icon;
        const con_icon_3 = res.data.forecast.forecastday[2].day.condition.icon;
        const avgtemp_c_1 = res.data.forecast.forecastday[0].day.avgtemp_c;
        const avgtemp_c_2 = res.data.forecast.forecastday[1].day.avgtemp_c;
        const avgtemp_c_3 = res.data.forecast.forecastday[2].day.avgtemp_c;
        const temp_1 = res.data.forecast.forecastday[0].hour[5].temp_c;
        const temp_2 = res.data.forecast.forecastday[0].hour[11].temp_c;
        const temp_3 = res.data.forecast.forecastday[0].hour[17].temp_c;
        const temp_4 = res.data.forecast.forecastday[0].hour[23].temp_c;

        const val = {
          name,
          temp_c,
          humidity,
          text,
          icon,
          wind_kph,
          temp_f,
          con_icon_1,
          con_icon_2,
          con_icon_3,
          avgtemp_c_1,
          avgtemp_c_2,
          avgtemp_c_3,
          temp_1,
          temp_2,
          temp_3,
          temp_4
        }
        setItems(val);
      }).catch(err => {
        console.log(err)
      })
  }, [se])
  // console.log(val.temp_f+" CC")
  console.log(val.temp_1)
  console.log(val.temp_2)
  console.log(val.temp_3)
  console.log(val.temp_4)

  const searchB = (title) => {
    setSearch(title);
  }
  console.log(se)

  return (
    <div>
      <Body
        w_speed={val.wind_kph}
        temp={val.temp_c}
        humidity={val.humidity}
        w_name={val.text}
        icon={val.icon}
        search={searchB}
        name={val.name}
        con_icon_1={val.con_icon_1}
        con_icon_2={val.con_icon_2}
        con_icon_3={val.con_icon_3}
        avgtemp_c_1={val.avgtemp_c_1}
        avgtemp_c_2={val.avgtemp_c_2}
        avgtemp_c_3={val.avgtemp_c_3}
        temp_1={val.temp_1}
        temp_2={val.temp_2}
        temp_3={val.temp_3}
        temp_4={val.temp_4} />
    </div>
  );
}


export default App;