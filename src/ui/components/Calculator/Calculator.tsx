import React from 'react';
import {CalculatorTable} from "ui/components/Calculator/calculatorTable/CalculatorTable";
import style from 'styles/calculator.module.css'
export const Calculator = () => {
    return (
        <div className={style.CalculatorContainer}>
            <CalculatorTable/>
        </div>
    );
};

