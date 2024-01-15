import React from "react";
import "../components/Center.css"

const Center = () => {
    return (
        <div id="center">
            <img src="cloud-solid.svg" alt="" className="weather-img"/>
            <div className="info">
                <h1 className="temp">22°C</h1>
                <b><p className="city">New-York</p></b>
                <div className="details">
                    <div className="col">
                        <img src="water-solid.svg" alt="" className="humidity-img"/>
                        <div>
                            <p className="humidity-proc"><b>50%</b></p>
                            
                        </div>
                    </div>
                    <div className="col-2">
                        <img src="wind-solid.svg" alt="" className="wind-img"/>
                        <div>
                            <p className="speed"><b>15 km/h</b></p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Center;
