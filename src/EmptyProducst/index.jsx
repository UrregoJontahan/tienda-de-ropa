import React from "react";
import "./empty.css"

function Empty(){
    return(
        <div className="empty-loading">
            <div class="loader">
                <div class="wrapper">
                    <div class="circle"></div>
                    <div class="line-1"></div>
                    <div class="line-2"></div>
                    <div class="line-3"></div>
                    <div class="line-4"></div>
                </div>
            </div>
        </div>
    )
}

export { Empty }