import React, {useState} from "react";
import './Star.css';
import {PlayNumber} from "./PlayNumber";
import {StarsDisplay} from "./StarsDisplay";

export const StarMatch = () => {



    const utils = {
        range: (min, max) => Array.from({ length: max - min + 1 }, (_, i) => min + i),
        random: (min, max) => min + Math.floor(Math.random() * (max - min + 1)),
        sum: arr => arr.reduce((acc, curr) => acc + curr, 0),
    }

    const colors = {
        available: 'lightgray',
        used: 'lightgreen',
        wrong: 'lightcoral',
        candidate: 'deepskyblue',
    };

    const [stars, setStars] = useState(utils.random(1,9));
    const [availableNums, setAvailableNums] = useState([utils.range(1,9)]);
    const [candidateNums, setCandidateNums] = useState([]);


    const candidatesAreWrong = utils.sum(candidateNums) > stars;

    const numberStatus = (number) => {
        if(!availableNums.includes(number)) {
            return 'used';
        }
        if(candidateNums.includes(number)) {
            return candidatesAreWrong ? 'wrong' : 'candidate';
        }
        return 'available';

    }

    const onClickNumber = (number, currentStatus ) => {
        if(currentStatus === 'used') {
            return;
        }
        const newCandidateNums = candidateNums.concat(number);
        if(utils.sum(newCandidateNums) !==stars) {
            setCandidateNums(newCandidateNums);
        } else {
            const newAvailableNums = availableNums.filter(
                n => !newCandidateNums.includes(n)
            );
            setAvailableNums(newAvailableNums);
            setCandidateNums([]);
        }
    }

    return (
        <div className="game">
            <div className="help">
                Pick 1 or more numbers that sum to the number of stars
            </div>
            <div className="body">
                <div className="left">
                    <StarsDisplay count={stars} utils={utils} />
                </div>
                <div className="right">
                    {utils.range(1,9).map(numBtn =>
                        <PlayNumber key={numBtn}
                                    status={numberStatus(numBtn)}
                                    number={numBtn}
                                    onClick={onClickNumber}
                        />)}
                </div>
            </div>
            <div className="timer">Time Remaining: 10</div>
        </div>
    );
};
