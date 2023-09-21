import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";


const WeatherContext = createContext()

function WeatherProvider({ children }) {

    const [weather, setWeather] = useState('')
    const [city, setCity] = useState('istanbul')

    const values = {
        weather,
        setWeather,
        city,
        setCity,
    }

    useEffect(() => {
        const getData = async (city) => {
            const key = "";

            try {
                const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&units=metric`);
                // console.log(data);
                setWeather(data)
            } catch {
                console.log("Error") 
            }
        }
        getData(city);       
    }, [city])


    return (
        <WeatherContext.Provider value={values}>
            {children}
        </WeatherContext.Provider>
    )
}

const useWeather = () => useContext(WeatherContext)

export { WeatherProvider, useWeather }