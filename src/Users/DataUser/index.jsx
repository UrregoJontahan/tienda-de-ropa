import React, { useContext } from "react";
import { DataContext } from "../../Provider";
import "./dataUser.css"

function DataUser(){
    const {user} = useContext(DataContext)

    return(
        <div className="container-data">
            <div className="container-data-user">
                <div className="arrow"></div>
                <h2 className="user-name">{user.username}</h2>
                <p className="name"><strong>Name:</strong> {user.name?.firstname} {user.name?.lastname} </p>
                <p className="email"><strong>email:</strong>  {user.email}</p>
                <p className="phone"><strong>Phone:</strong>  {user.phone}</p>
                <p className="city"><strong> City:</strong> {user.address?.city}</p>
            </div>
        </div>
    )
}

export { DataUser }