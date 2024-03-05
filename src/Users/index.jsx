import React, { useContext } from "react";
import "./user.css"
import { DataContext } from "../Provider";

function User( {children,ontoggleUser} ){
    const {user} = useContext(DataContext)

    return(
        <div className="counter-user">
            <img 
                className="image-user" 
                src="https://unavatar.io/UrregoJontahan"
                onClick={ontoggleUser}
            />
            <p className="username">
                {user.name?.firstname} {user.name?.lastname}
            </p>
            {children}
        </div>
    )
}

export { User }

//tooltip