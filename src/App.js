import { useState } from "react";
import "./styles.css";
// const { DateTime } = require("luxon");

export default function App() {
    return (
        <div className="App">
            <Counter />
        </div>
    );
}

function Counter() {
    const [step, setStep] = useState(1);

    const [count, setCount] = useState(0);
    console.log(count);
    const date = new Date("2027-6-1");
    console.log(date);
    date.setDate(date.getDate() + count);
    console.log(date);

    return (
        <div>
            <div>
                <input
                    type="range"
                    min="0"
                    max="10"
                    value={step}
                    onChange={e => setStep(Number(e.target.value))}
                ></input>
                {step}
            </div>
            <div>
                <button onClick={() => setCount(c => c - step)}>-</button>
                <input
                    type="text"
                    value={count}
                    onChange={e => setCount(Number(e.target.value))}
                ></input>
                <button onClick={() => setCount(c => c + step)}>+</button>
            </div>
            <p>
                <span>
                    {count === 0
                        ? "Today is "
                        : count > 0
                        ? `${count} days from today is`
                        : `${Math.abs(count)} days ago today was`}
                </span>
                <span> {date.toDateString()}</span>
            </p>
            {count !== 0 || step !== 1 ? (
                <button
                    onClick={() => {
                        setCount(0);
                        setStep(1);
                    }}
                >
                    reset
                </button>
            ) : null}
        </div>
    );
}

/*
function Counter() {
    const [step, setStep] = useState(1);

    const [count, setCount] = useState(0);
    const [nDate, setNDate] = useState(new Date("2027-06-01"));
 

    function handlerEvent1() {
        setCount(c => c + step);
        setNDate(d => {
            const newDate = new Date(d);
            newDate.setDate(newDate.getDate() + step);
            return newDate;
        });
    }
    function handlerEvent2() {
        setCount(c => c - step);
        setNDate(d => {
            const newDate = new Date(d);
            newDate.setDate(newDate.getDate() - step);
            return newDate;
        });
    }
    // console.log(newDate);
    return (
        <div>
            <div>
                <button onClick={() => setStep(s => s - 1)}>-</button>
                Step: {step}
                <button onClick={() => setStep(s => s + 4)}>+</button>
            </div>
            <div>
                <button onClick={handlerEvent2}>-</button>
                Count: {count}
                <button onClick={handlerEvent1}>+</button>
            </div>
            <p>
                {count} days from today is {nDate.toDateString()}
            </p>
        </div>
    );
}
*/
