import React from 'react'

export const Display = (props) => {
    return (
        <div>
            <h2>Your Bmi is : {props.answer} and you lie under {props.bodyType} category</h2>
            <h3>Bmi &lt; 18.5 : Underweight</h3>
            <h3>Bmi 18.5 - 24.9 : Normal weight</h3>
            <h3>Bmi 25 - 29.9 : Overweight</h3>
            <h3>Bmi 30+ : Obese</h3>

        </div>
    )
}
