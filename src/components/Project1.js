import React from 'react'
import {useParams} from 'react-router-dom'
export default function Project1() {
    const params=useParams();
    console.log(params.projectId);
    return (
        <div>
            <h1>Project 1</h1>
        </div>
    )
}
