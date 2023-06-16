import React, {useEffect, useState} from 'react'; //Хуки - это новое дополнение в React 16.8. Они позволяют использовать с
//остояние и другие функции React без написания класса.
//это функции, с помощью которых вы можете «подцепиться» к состоянию и методам жизненного цикла React из функциональных компонентов
//useEffect
//предназначен для перехвата различного рода изменений в компонентах, которые нельзя обработать внутри компонентов

const  InputNumber = ({numbers,id,setId}) => {


    const [number,setNumber] = useState(numbers[0])
    const [value, setValue] = useState("") //строковая переменная value

    useEffect(() => {
        setNumber(numbers[id - 1])
    }, [id, numbers])//каждый раз, когда изменяются id или numbers

    const inputNumber = (e) => { //функция для выбора номера и его id
        numbers.forEach(el => {
                if (el.code.length <=value.length && el.count >= value.length)
                if (value.slice(0,el.code.length) === el.code) { //Метод str.split(delim) разбивает строку на массив по заданному разделителю delim.
                    setNumber(el) //после вызова функции setNumber(el), состояние number будет содержать информацию о текущем выбранном номере телефона
                    setId(el.id) //устанавливает новое значение для состояния id, которое используется для хранения идентификатора текущего выбранного номера телефона
                }
            }
        )
        setValue(e.target.value.split(/[ \-()]/).join(""))//регулярное выражение для удаления скобок, пробелов,тире в номере

        if (+value.length === number.count) {
            let inputStr = value.split("");
            let maskArr = number.mask.split("");
            console.log(inputStr, maskArr)
            for (let i = 0, j = 0; i < maskArr.length; i++)
                if (maskArr[i] === "X") {
                    maskArr[i] = inputStr[j];
                    j++;
                }
            let num = maskArr.join(""); //arr.join(glue) создаёт строку из элементов arr, вставляя glue между ними.
            setValue(num);
        }
    }


    return (
        <div className="inputWrapper">
            <input className="input" type="tel" id="phone" name="phone"
                   placeholder={number.code + number.mask.slice(4)} //slice(4) копирует все элементы начиная с 4
                   required onInput={inputNumber} maxLength={number.count + 3} //1. для вызова компонента заполнения номера 2. задаем макс длину вводимого значения 
                   value={value}/>

        </div>
    );
};

export default InputNumber;