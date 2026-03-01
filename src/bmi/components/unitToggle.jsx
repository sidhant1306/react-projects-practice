import React, {useState} from 'react'
import {InputFn} from "./inputFn.jsx";

export const UnitToggle = (props) => {

    const btnHandler = () => {
        console.log("metrics changed")
        if(props.currWeightUnit === 'kg' || props.currWeightUnit === '') {
            props.setWUnit('lbs');
            props.setHUnit('inches');
        }
        else {
            props.setWUnit('kg');
            props.setHUnit('cm');
        }
    }



    return (
        <div>
            <h3>Current Weight Unit : {props.currWeightUnit}</h3>
            <button onClick={btnHandler}>Change</button>
            {/*<InputFn wUnit = {weightUnit} hUnit = {HeightUnit}/>*/}

{/*
            {changed && (
                <InputFn metrics = {metrics}/>
            )}*/}
        </div>
    )
}
