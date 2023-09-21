import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../redux/covidSlice";
import moment from 'moment';


function Cards() {

    const { data, status } = useSelector((state) => state.reports)
    const dispatch = useDispatch()

    useEffect(() => {
        if (status === "idle") dispatch(fetchData());
    }, [dispatch, status]);

    if (status === "loading") {
        return <div className='text-center text-5xl mt-5'>Loading..</div>;
    }

    if (status === "failed") {
        return <div className='text-center text-5xl mt-5'>Error!!</div>;
    }
    // console.log(data)
    // console.log(status)

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-10 my-12">
            <div className="py-6 px-4 flex flex-col text-xl font-semibold bg-blue-600 rounded-md">
                <span className="mb-2">Infected</span>
                <span className="text-2xl font-bold">
                    {data?.data?.confirmed?.toLocaleString()}
                </span>
                <span>Last updated at:</span>
                <span className="text-[#121212] italic">
                    {moment(data?.data?.date).format("DD/MM/YYYY")}
                </span>
            </div>

            <div className="py-6 px-4 flex flex-col text-xl font-semibold bg-green-600 rounded-md">
                <span className="mb-2">Recovered</span>
                <span className="text-2xl font-bold">
                    {data?.data?.recovered?.toLocaleString()}
                </span>
                <span>Last updated at:</span>
                <span className="text-[#121212] italic">
                    {moment(data?.data?.date).format("DD/MM/YYYY")}
                </span>
            </div>

            <div className="py-6 px-4 flex flex-col text-xl font-semibold bg-red-600 rounded-md">
                <span className="mb-2">Deaths</span>
                <span className="text-2xl font-bold">
                    {data?.data?.deaths?.toLocaleString()}
                </span>
                <span>Last updated at:</span>
                <span className="text-[#121212] italic">
                    {moment(data?.data?.date).format("DD/MM/YYYY")}
                </span>
            </div>

            <div className="py-6 px-4 flex flex-col text-xl font-semibold bg-yellow-600 rounded-md">
                <span className="mb-2">Active</span>
                <span className="text-2xl font-bold">
                    {data?.data?.active?.toLocaleString()}
                </span>
                <span>Last updated at:</span>
                <span className="text-[#121212] italic">
                    {moment(data?.data?.date).format("DD/MM/YYYY")}
                </span>
            </div>
        </div>
    );
}

export default Cards