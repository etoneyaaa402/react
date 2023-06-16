 import './App.css';
 import Chess from './component/Chess';{/*создала компонент Chess, в котором создала шахматную доску и добавила его в основной файл*/}


function App() {
  const actions = [{
    stock_name: "EFX",
    company_name: "Equifax Inc",
    price: 163.55,
    currency: "USD",
    change: "+9.03"
    }, {
    stock_name: "IRM",
    company_name: "Iron Mountain Inc",
    price: 33.21,
    currency: "USD",
    change: "+1.42"
    }, {
    stock_name: "NTAP",
    company_name: "NetApp Inc",
    price: 54.81,
    currency: "USD",
    change: "-6.01"
    }, {
    stock_name: "CTL",
    company_name: "Centurylink Inc",
    price: 13.79,
    currency: "USD",
    change: "-1.37"
    }];

   
  return (
    <div className="App">
      <h1>Hello, React!</h1>
      <p> Задание 2: Динамически сгенерируйте и выведите на его основании таблицу с условным форматированием: положительное изменение цены акций должно быть окрашено в зелёный цвет, а отрицательное — в красный. Используйте циклы.</p>
        <table className="table"> {/*создание таблицы в react происходит как в обычном html */}
          <tr>
          <th>Имя склада</th>
          <th>Название компании</th>
          <th>Валюта</th>
          <th>Цена</th>
          <th>Изменение</th>
          </tr> 
          {actions.map((punkt)=>{{/*создаем функцию для actions, которая будет выводить значения из структур,  map() функцию для получения массива actions*/}
          return(
          <tr>
            <td>{punkt.stock_name}</td>{/*передаём значения из структуры в таблицу*/}
            <td>{punkt.company_name}</td>

            <td>{punkt.currency}</td>
            <td>{punkt.price}</td>
            {/*проводим проверку для определения нужного класса: если punkt.change меньше 0, то className - r, иначе className - g*/}
            {/*и дальше этому классу будут применяться соответствующие стили в app css */}
          <td className={punkt.change < 0 ? "r" :"g"}>{punkt.change}</td> 
          </tr>
          )}
          )}

        </table>

      <p> Задание 3: Разработать проект шахматной доски по примеру, приведённому ниже, с использованием дочерних элементов JSX. Допускается использование стилей только для изменения цвета клеток (.black, .white) и для общего контейнера всей доски.</p>
      <Chess/> {/*прописала компонент в методе return чтобы он отобразился на странице */}
    </div>
  );
}


export default App;
