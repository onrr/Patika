import React from 'react'
import { useWeather } from '../context/WeatherContext'

const Form = () => {

    const { setCity } = useWeather()

    return (
        <form>
            <input
                onChange={e => setCity(e.target.value)}
                type="text"
                placeholder="Select city.." />
        </form>
    )
}

export default Form