import React,{MouseEvent} from 'react';
import style from 'styles/buttons.module.css'
import {buttonsArray, signs, specialButtons} from "state/store";
import {universalSymbolsType} from "types/types";

type ButtonNumbersType = {
    onChange: (num: string) => void
    onChangeSymbols: (sym: string) => void
    disabledButton:boolean


}
export const ButtonNumbers = ({onChange, onChangeSymbols,disabledButton}: ButtonNumbersType) => {

    // const numbers =[]
    // for(let i=0;i<=9;i+=1){
    //     numbers.unshift(i)
    // }
// const onClickHandler=(e:MouseEvent<HTMLButtonElement>)=>{
//     console.log(e.currentTarget.title)
// }
    return (
        <div className={style.buttonsContainer} >
            {specialButtons.map(({id, title}: universalSymbolsType) => (

                <button className={style.symbolButtons}
                    onClick={() => onChangeSymbols(title)}
                        key={id}
                        disabled={title!=="AC"?disabledButton:false}
                >{title}</button>
            ))}

                {buttonsArray.map(({id, title}: universalSymbolsType) => (

                    <button className={style.numberButtons}
                        key={id} onClick={()=>onChange(title)}
                    disabled={disabledButton}
                    >
                        {title}
                    </button>
                ))}
                {signs.map(({id, title}: universalSymbolsType) => (
                    <button className={style.buttonsSign}
                        key={id} onClick={() => onChange(title)}
                    disabled={disabledButton}
                    >
                        {title}
                    </button>
                ))}

        </div>
    );
};

