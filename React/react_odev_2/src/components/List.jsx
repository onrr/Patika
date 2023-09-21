import React from 'react'
import { useWeather } from '../context/WeatherContext'

const List = () => {

    const { city, weather } = useWeather()

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    return (
        <>
            {
                weather &&
                <div className="cityInfo">
                    <img src={`https://flagsapi.com/${weather.city.country}/flat/64.png`} alt={weather.city.country} />
                    <h2>{city.toUpperCase()}</h2>
                </div>
            }
            <div className='cards'>
                {
                    weather.list?.map((data, index) => {
                        if (index % 8 === 0 || index === 39) {
                            return (
                                <div key={index} className={`card ${index === 0 && "current"}`}>
                                    <h3>{days[new Date(data.dt_txt).getDay()]}</h3>
                                    <img src={`icons/${data.weather[0].main}.svg`} alt={data.weather[0].main} />
                                    <div className="temp">
                                        <b>{data.main.temp} °C</b>
                                        <span>{data.main.temp_min} °C / {data.main.temp_max}°C</span>
                                    </div>
                                </div>
                            )
                        }
                        return ""
                    })
                }
            </div>
        </>
    )
}

export default List