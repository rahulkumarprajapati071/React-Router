import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

export default function Github(){
    // const [data,setData] = useState([]);
    // useEffect(() => {
    //     fetch("https://api.github.com/users/rahulkumarprajapati071")
    //     .then(data => data.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
    //     })
    // },[])

    const data = useLoaderData()

    return (
        <>
            <div className="bg-gray-500 rounded-sm text-white p-4">Github Followers: {data.followers}
            <div className="flex space-x-2 justify-center items-center">
            <img src={data.avatar_url} alt="github_picture" className="w-20 rounded-full" />
            <div className="flex flex-col items-start style={{marginTop: '-4px'}}">
                <h2 className="">Name: {data.name}</h2>
                <h3>Location: {data.location}</h3>
            </div>
            </div>

            </div>
            
        </>
    );
}

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/rahulkumarprajapati071')
    return response.json()
}