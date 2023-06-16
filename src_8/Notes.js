import React, { useState } from 'react';
import Cat from "./Avatars/kot_yajca_nyasha_31322.jpg"
import Venom from "./Avatars/Venom_27072.jpg"
import FireBall from "./Avatars/ogon_shar_12674.jpg"
import ComputerErrored from "./Avatars/muzhchina_computer_26317.jpg"
import RabbitRobot from "./Avatars/multfilm_robot_zajac_23657.jpg"

let a = [];
let aa = [];
let i = 0;
let counter = 0;
let secretWord;
let content;
let isEdited = false;
let isShowInfo = false;
function Notes() {
  const [note, setNote] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [id, setId] = useState("");
  const [image, setImage] = useState(Venom);

  function AddElem() {
    let d = document.getElementsByTagName('input');
    let s = document.getElementsByTagName('textarea');

    if (d[0] !== undefined && d[0].value === "") d[0].value = "user " + (i + 1);

    i++;
    content = s[0].value
    if (!isEditing) {
      aa.push([
        d[0].value,
        d[1].value,
        content,
        d[2].value,
        isEdited = false,
        isShowInfo = false
      ])
    }
    a.push([
      <div key={i}>
        <button name={i} onClick={(e) => СommentsDel(e.target.name, d, s)}> Удалить комментарий </button>
        <button name={i} onClick={(e) => СommentsEdit(e.target.name - 1, s[0], d[0], d[1], d[2])}> Отредактировать комментарий </button>
        <button name={i} onClick={(e) => ShowInfo(e.target.name - 1)}> Вывести информацию </button>
        {aa[i - 1][4] && <p> Дата изменения: {aa[i - 1][6]} </p>}
        <p>
          <img id="avatar" src={image} />  {aa[i - 1][0]}
        </p>
        <pre>
          {aa[i - 1][2]}
        </pre>
        {aa[i - 1][5] &&
          <div>
            <p>
              Имя пользователя: {aa[i - 1][0]}
            </p>
            <p>
              Дата изменения: {aa[i - 1][6] == undefined ? "none" : aa[i - 1][6]}
            </p>
            <p>
              Эл почта: {aa[i - 1][1]}
            </p>
          </div>}
      </div>,
      secretWord = aa[i - 1][3],
      aa[i - 1][4],
      aa[i - 1][5]
    ])
    if (d[0] !== undefined) d[0].value = "";
    if (d[1] !== undefined) d[1].value = "";
    if (s[0] !== undefined) s[0].value = "";
    if (d[2] !== undefined) d[2].value = "";
  }

  function Add() {
    AddElem();
    setNote(a.slice(0))
  }

  function СommentsEdit(id, s, name, email, secretWord) {
    setId(id);
    aa[id][4] = true
    if (aa[id][6] == undefined) aa[id].push(new Date().toLocaleString())
    else aa[id][6] = new Date().toLocaleString()
    setIsEditing(true);
    name.value = aa[id][0]
    email.value = aa[id][1]
    secretWord.value = a[id][1]
    s.value = aa[id][2]
  }

  function SaveChanges() {
    aa[id][2] = document.getElementsByTagName('textarea')[0].value;
    counter = i
    i = 0;
    setNote([])
    a = [];
    for (; counter != 0; counter--) {
      Add()
    }
    setIsEditing(false)
  }

  function ShowInfo(Id) {
    aa[Id][5] = true
    counter = i
    i = 0;
    setNote([])
    a = [];
    for (; counter != 0; counter--) {
      Add()
    }
    console.log(aa[Id][5])
  }

  function СommentsDel(id, d, s) {
    for (let key in a) {
      if (a[key][0].key == id) {
        let e = prompt('sadfjk')
        if (e == a[key][1])
          a.splice(key, 1)
      }
    }
    setNote(a.slice(0))
    if (d[0] !== undefined) d[0].value = "";
    if (d[1] !== undefined) d[1].value = "";
    if (s[0] !== undefined) s[0].value = "";
    if (d[2] !== undefined) d[2].value = "";
  }
  return <>
    <select onChange={(event) => { setImage(event.target.value) }}>
      <option value={Venom}> Веном </option>
      <option value={Cat}> Кот </option>
      <option value={RabbitRobot}> Робозаяц </option>
      <option value={FireBall}> Огненный шар </option>
      <option value={ComputerErrored}> Сломанный ПК </option>
    </select>
    <p>
      Имя пользователя: <input placeholder="Введите имя пользователя" readOnly={isEditing ? true : false} />
    </p>
    <p>
      Эл почта: <input placeholder="email" readOnly={isEditing ? true : false} />
    </p>
    <p>
      Комментарий: <textarea /><br />
    </p>
    <p>
      Секретное слово: <input placeholder="Секретное слово" readOnly={isEditing ? true : false} />
    </p>
    <button onClick={isEditing ? SaveChanges : Add}> {isEditing ? "Сохранить изменения" : "Добавить комментарий"} </button>
    <div>
      {note.map(n => n[0])}
    </div>
  </>
}

export default Notes;