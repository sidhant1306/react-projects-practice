import React, {useState} from 'react'
import {Display} from "./display.jsx";

export const Calculator = (props) => {
   // we cannot use useState here because when we will try to setBmi, it will re-render the page(this function) so it will call setBmi again and thus forming an infinite loop
    let calculatedBmi = 0;
    if(props.weightUnit === 'lbs') calculatedBmi = (props.w * 703) / (props.h * props.h);
    else calculatedBmi = props.w / ((props.h / 100) * (props.h / 100));

    let type = '';
    if(calculatedBmi < 18.5) type = 'Underweight';
    else if(calculatedBmi > 18.5 && calculatedBmi <= 24.9) type = 'Normal'
    else if(calculatedBmi > 25 && calculatedBmi <= 29.9) type = 'Overweight'
    else type = 'Obese'

        console.log(calculatedBmi);
    return (
        <div>

            <Display answer ={calculatedBmi.toFixed(2)} bodyType = {type}/>
        </div>
    )
}
