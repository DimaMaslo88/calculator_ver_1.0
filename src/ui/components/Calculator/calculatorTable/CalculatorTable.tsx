import React, {useState, MouseEvent, useEffect} from 'react';
import {ButtonNumbers} from "ui/components/Calculator/calculatorTable/buttons/buttonNumbers/ButtonNumbers";
import style from 'styles/input.module.css'

export const CalculatorTable = () => {
    const [count, setCount] = useState<string>('0')
    const [result, setResult] = useState<number>(0)
    const [isDisabled, setIsDisabled] = useState<boolean>(false)

    let a = ''
    let b = ''
    let sign = ''
    console.log(sign)
    const onButtonClickHandler = (num: string) => {
        if (num === '0') {
            setCount('0')
        } else if (count === '0' && num !== '.') {
            setCount(num)
        } else if (num === '=') {
            setResult(eval(count).toString())
        } else {
           setCount(count+num)
        }

    }
    const onSpecialSymbolsClickHandler = (symbol: string) => {

        if (symbol === 'AC' && count === '') {
            setCount('0')
            setResult(0)
            setIsDisabled(false)
        } else if (symbol === 'AC' && count.length >= 1) {

            setCount('0')
            setResult(0)
            setIsDisabled(false)
        } else if (symbol === 'OFF') {
            setCount('')
            setResult(0)
            setIsDisabled(true)
        } else if (symbol === 'MS') {
            localStorage.setItem('remember value', result.toString())
        } else if (symbol === 'MR') {
            const newRes = localStorage.getItem('remember value')
            if (newRes) {
                let res = JSON.parse(newRes)
                setCount(res)
            }
        } else if (symbol === 'MC') {
            localStorage.clear()
            setCount('0')
        } else {
            return
        }


    }
    return (
        <div>
            <div className={style.inputContainer}>
                <input type='text' value={count} readOnly={true} className={style.input} disabled={isDisabled}/>
                {result}
            </div>
            <ButtonNumbers onChange={(pushNumber) => onButtonClickHandler(pushNumber)}
                           onChangeSymbols={onSpecialSymbolsClickHandler}
                           disabledButton={isDisabled}

            />

        </div>
    );
};

