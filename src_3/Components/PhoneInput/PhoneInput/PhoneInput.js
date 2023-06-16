import React, {useEffect, useState} from 'react';
import SwitchFlag from "../SwitchFlag";
import {OperatorsButtonList} from "../OperatorsButtonList";
import InputNumber from "../InputNumber/InputNumber";
import {NumberFormats} from "../NumberFormats";
import "./PhoneInput.css";
//Хуки — это функции, с помощью которых вы можете «подцепиться» к состоянию и методам жизненного цикла React из функциональных компонентов. 

//useState объявляет «переменную состояния». Таким образом мы можем «сохранить» некоторые значения между вызовами функции. 
//useState — это новый способ использовать те же возможности, что даёт this.state в классах
//useState вернёт пару значений: текущее состояние и функцию, обновляющую состояние. Поэтому мы пишем const 
//[count, setCount] = useState() деструктуризациия массивов => В count будет записано первое значение, вернувшееся из useState, а в setCount следующее за ним

export const PhoneInput = () => {

    const [id, setId] = useState(1);

    //<InputNumber numbers={NumberFormats} id={id} setId={setId} /> выводит выбранный номер из массива номеров опираясь на переданный ему id и setId
    //item это временные ассоциативный массив для выбора и вывода необходимой страны

    //onChange выбирает то значение, которое было выбрано

    //key «Ключ» — особый строковый атрибут, который необходимо добавить для создания списка элементов
    //Ключи помогают React идентифицировать элементы, которые подверглись изменению, добавились или удалились. 
    //Ключи должны быть присвоены элементам, заключенным в массивы, чтобы у них была стабильная идентифицируемость
    //Ключ должен быть объявлен внутри массива
    return (
        <div className="container">
            <div className="phoneInput">

                <div className="content">
                    <InputNumber numbers={NumberFormats} id={id} setId={setId} />  
                    <SwitchFlag id={id}/>
                </div>
            </div>

            <div className="countrySelect">
                <label>Select country</label>
                <select id="select" onChange={e => setId(+e.target.value)} style={{borderRadius: "5px"}}>
                    {NumberFormats.map(item =>
                        <option key={item.id} value={item.id} selected={id === item.id}>
                            {item.name}
                        </option>
                    )}
                </select>
            </div>

            <OperatorsButtonList numberFormats={NumberFormats} id={id}/>
        </div>
    );
};


