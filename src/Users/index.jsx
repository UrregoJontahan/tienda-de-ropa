import React, { useContext } from "react";
import "./user.css"
import { DataContext } from "../Provider";

function User(){
    const {user} = useContext(DataContext)

    return(
        <div className="counter-user">
            <img 
                className="image-user" 
                src="https://avatars.githubusercontent.com/u/156011003?v=4"
            />
            <p className="username">
                {user.username}
            </p>
        </div>
    )
}

export { User }

//tooltip