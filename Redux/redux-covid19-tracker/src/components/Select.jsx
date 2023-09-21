import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { fetchRegion, select } from "../redux/regionSlice";
import { fetchData } from '../redux/covidSlice';


function Select() {

    const { country, status, selected } = useSelector((state) => state.region)
    const dispatch = useDispatch()

    useEffect(() => {
        if (status === "idle") dispatch(fetchRegion())
        else dispatch(fetchData(selected));
    }, [selected, status]);

    if (status === "loading") {
        return <div className='text-center text-5xl mt-5'>Loading..</div>;
    }

    if (status === "failed") {
        return <div className='text-center text-5xl mt-5'>Error!!</div>;
    }
    console.log(selected)

    return (
        <select
            className="py-2 px-4 w-64 mt-12 flex mx-auto bg-[#333] text-neutral-50"
            value={selected}
            onChange={(e) => dispatch(select(e.target.value))}
        >
            <option value="global">
                Worldwide
            </option>
            {country?.data?.map((item, index) => (
                <option value={item?.iso} key={index}>
                    {item?.name}
                </option>
            ))}
        </select>
    )
}

export default Select