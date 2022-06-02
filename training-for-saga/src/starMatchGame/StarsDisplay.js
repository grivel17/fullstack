import React from "react";
import './Star.css';


export const StarsDisplay = (props) => {
    return(
        <>
            {props.utils.range(1, props.count).map(straId=><div key={straId} className="star" /> ) }
        </>
    );
}
