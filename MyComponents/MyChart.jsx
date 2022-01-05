import React from 'react'
import { Line } from 'react-chartjs-2'
import { WeatherForecast } from './WeatherForecast'


export const MyChart = (props) => {

    var t1 = props.temp_1
    var t2 = props.temp_2
    var t3 = props.temp_3
    var t4 = props.temp_4
    const labels = [" ", " ", " ", " "]
    const data = {
        labels: labels,
        datasets: [{
            label: 'Temperature every 8 hrs',
            backgroundColor: 'rgba(54, 162, 235, 0.3)',
            fill: true,
            borderColor: 'rgb(54, 162, 235)',
            borderWidth: 2,
            data: [t1, t2, t3, t4 ],

        }]
    };
    // console.log(t1+ " tt")
    const options = {
        type: 'line',
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            }
        },
        tooltips: {
            callbacks: {
                label: function (tooltipItem) {
                    return tooltipItem.yLabel;
                }
            }
        },
        elements: {
            line: {
                tension: 0.3
            }
        },
        scales: {
            x: {
                drawBorder: false,
                grid: {
                    display: false,
                },
                title: {
                    display: false,
                },
            },
            y: {
                beginAtZero: true,
                ticks: {
                    callback: function (value, index) {
                        return ' '
                    }
                },
                grid: {
                    display: false,
                    drawOnChartArea: false,
                    drawBorder: false,
                },
            },
            yAxes: {
                display: false,
            }
        },
    };
    return (
        <div>
            <h1 className="temp">Temperature in {props.name}</h1>
            <div className="chart">
                <Line data={data} options={options} />
            </div>
            <WeatherForecast
                con_icon_1={props.con_icon_1}
                con_icon_2={props.con_icon_2}
                con_icon_3={props.con_icon_3}
                avgtemp_c_1={props.avgtemp_c_1}
                avgtemp_c_2={props.avgtemp_c_2}
                avgtemp_c_3={props.avgtemp_c_3}
                w_name={props.w_name}
                temp={props.temp}
                icon={props.icon}
            />
        </div>
    )
}