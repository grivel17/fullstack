import React from "react";

export const Button = (props) => {
    const handleClick = () => props.onClickFunction(props.increment)
    return(
      <button onClick={handleClick}> ++ {props.name}</button>
    );
}

//zapamiętaj ten syntax

// const fetcData = async () => {
//     const res = await fetch("somelink");
//     const data = await res.json()
//     console.log(data)
// }
