import React from "react";
import "./empty.css"

function Empty(){
    return(
        <div className="empty-loading">
            <div className="loader">
                <div className="wrapper">
                    <div className="circle"></div>
                    <div className="line-1"></div>
                    <div className="line-2"></div>
                    <div className="line-3"></div>
                    <div className="line-4"></div>
                </div>
            </div>
        </div>
    )
}

export { Empty }