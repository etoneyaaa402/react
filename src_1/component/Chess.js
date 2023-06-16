import React from "react";

import "./Chess.css";{/*добавила на страницу файл со стилями */}

const verticalAxis = ["1", "2", "3", "4", "5", "6", "7", "8"];{/*создала переменные для разметки поля для шахмат*/}
const horizontalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];

export default function Chessboard() {
  let board = [];{/*создала пустой массив, в который потом будет выводится разметка*/}

  for (let j = verticalAxis.length - 1; j >= 0; j--) {{/*открываю цикл для разметки, в котором начала перебирать "ячейки"*/}
    for (let i = 0; i < horizontalAxis.length; i++) {
        const number = j + i + 2;{/*создаю переменную для заполнения четных клеток цветом */}
        {/*push() добавляет один или несколько элементов в конец массива и возвращает новую длину массива */}
        if(number % 2 === 0) {
            board.push(
                <div className="tile black-tile"></div>
              );
        } else {
            board.push(
                <div className="tile white-tile"></div>
              );
        }
    }
  }

  return <div id="chessboard">{board}</div>;
} 