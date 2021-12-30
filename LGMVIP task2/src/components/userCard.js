import React from 'react'
import './userCard.css'

export default function UserCard({temp}) {
    return (
        <>
       <div className="box">
           <img src={temp.avatar} alt="img" />
           <h3>{temp.first_name} {temp.last_name}</h3>
           <p>{temp.email}</p>
       </div>
        </>
    )
}