import React from "react";
import "../components/Center.css"

const Center = () => {
    return (
        <div className="center">
            <img src="cloud-solid.svg" alt="" className="weather-img"/>
            <div className="info">
                <h1 className="temp">22°</h1>
                <h2 className="city">New-York</h2>
                <div className="details">
                    <div className="col">
                        <img src="water-solid.svg" alt="" className="humidity-img"/>
                        <div>
                            <p className="humidity"><b>50%</b></p>
                            <p><b>Humidity</b></p>
                        </div>
                    </div>
                    <div className="col-2">
                        <img src="wind-solid.svg" alt="" className="wind-img"/>
                        <div>
                            <p className="wind-speed"><b>15 km/h</b></p>
                            <p><b>Wind Speed</b></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Center;