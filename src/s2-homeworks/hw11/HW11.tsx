import React, {useState} from 'react'
import s from './HW11.module.css'
import s2 from '../../s1-main/App.module.css'
import {restoreState} from '../hw06/localStorage/localStorage'
import SuperRange from './common/c7-SuperRange/SuperRange'

/*
* 1 - передать значения в оба слайдера
* 2 - дописать типы и логику функции change
* 3 - сделать стили в соответствии с дизайном
* */
// if (Array.isArray(value)) {
//     setValue1(value[])
//     setValue2(value1)
// } else {
//     setValue1(value)
// }
function HW11() {
    // for autotests // не менять // можно подсунуть в локалСторэдж нужные числа, чтоб увидеть как они отображаются
    const [value1, setValue1] = useState(restoreState<number>('hw11-value1', 0))
    const [value2, setValue2] = useState(restoreState<number>('hw11-value2', 100))

    // const change = (event: any, value: number[]) => {
    const change = (event: any, value: any) => {
        // пишет студент // если пришёл массив - сохранить значения в оба useState, иначе в первый
        // setValue1(value)
        // setValue2(value1)
        if (Array.isArray(value)) {
            setValue1(value[0]);
            setValue2(value[1])
        } else {
            console.log(value)
        }

    }

    return (
        <div id={'hw11'}>
            <div className={s2.hwTitle}>Homework #11</div>

            <div className={s2.hw}>
                <div className={s.container}>
                    <div className={s.wrapper}>
                        <span id={'hw11-value'} className={s.number}>{value1}</span>
                        <SuperRange
                            id={'hw11-single-slider'}
                            // сделать так чтоб value1 изменялось // пишет студент
                            onChange={change}
                            value={value1}
                            min={0}
                            max={100}
                        />
                    </div>
                    <div className={s.wrapper}>
                        <span id={'hw11-value-1'} className={s.number}>{value1}</span>
                        <SuperRange
                            id={'hw11-double-slider'}
                            // сделать так чтоб value1/2 изменялось // пишет студент
                            onChange={change}
                            value={[value1, value2]}
                            min={0}
                            max={100}
                        />
                        <span id={'hw11-value-2'} className={s.number}>{value2}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

// onChange={(event: any, value: number | number[]) => {
//     if (Array.isArray(value)) {
//         change(event, value);
//     } else {
//         change(event, [value]);
//     }
// }}
export default HW11
