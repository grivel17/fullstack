import React, {useState} from "react";
import {Button} from "./Button";
import {Message} from "./Message";

export const FirstComponent = () => {

    const [counter, setCounter] = useState(0);

    const incrementCounter = (increment) => {setCounter(counter + increment)}

    return(
        <>
            <Button onClickFunction={incrementCounter}
                    name={1}
                    increment={2}
            />
            <Message messageToDisplay={counter} />
        </>
    )
};
