import React, {useState} from 'react'
import {Calculator} from "./Calculator.jsx";
import {UnitToggle} from "./unitToggle.jsx";

export const InputFn = (props) => {
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');

    const [sendValues, setSendValues] = useState(false);
    const [unitChange, setUnitChange] = useState(false);

    const [wUnit, setWUnit] = useState('kg');
    const [hUnit, setHUnit] = useState('cm');

    const btnHandler = () => {
        setSendValues(true);
    }

    return (
        <div>
            <input onChange={(e) => {
                setHeight(e.target.value);
            }}
                   type = 'number'
                   placeholder = {`Enter your height in : ${hUnit}`}
                   value={height}
            />
            <input onChange={(e) => {
                setWeight(e.target.value);
            }}
                   type = 'number'
                   placeholder = {`Enter your weight in ${wUnit}`}
                   value={weight}
            />
            <button onClick={btnHandler}>Calculate BMI</button>

            {sendValues && (
                <Calculator h = {parseFloat(height)} w = {parseFloat(weight)} weightUnit = {wUnit} HeightUnit = {hUnit}/>
            )}
            <button onClick={() => {
                setUnitChange(true)
            }}>Change unit</button>

            {unitChange && (
                <UnitToggle currWeightUnit = {wUnit} heightUnit = {hUnit} setWUnit = {setWUnit} setHUnit = {setHUnit}/>
            )}
        </div>
    )
}
