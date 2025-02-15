import React from 'react';
import style from 'styles/calculator.module.css'
import {CalculatorTable} from 'ui/components/Calculator/calculatorTable/CalculatorTable';


export const Calculator = () => {
    return (
        <div className={style.CalculatorContainer}>
            <CalculatorTable/>
        </div>
    );
};

