import React from 'react';
import classnames from 'classnames';

import * as Calendar from './Calendar';

import './Index.css';
//Хуки — это функции, с помощью которых вы можете «подцепиться» к состоянию и методам жизненного цикла React из функциональных компонентов. 
//Хуки не работают внутри классов — они дают вам возможность использовать React без классов.
export default class Calendarr extends React.Component {
    //статическое св-во для передачи названия месяцев по умолчанию(определяется на основе класса)
    static defaultProps = {
        date: new Date(),
        years: [2017, 2018, 2019, 2020, 2021, 2022,2023, 2024, 2025, 2026, 2027],
        monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
        weekDayNames: ['Пн', 'Вт', 'Ср', 'Чт' , 'Пт', 'Сб', 'Вс'],
        onChange: Function.prototype //пустая функция
    };
    //состояние для указания нужной даты и места для неё в календаре
    state = {
        date: this.props.date,
        currentDate: new Date(),
        selectedDate: null
    };
    //создаём переменные-функции которые будут всегда возвращать текущую дату
    get year() {
        return this.state.date.getFullYear();
    }

    get month() {
        return this.state.date.getMonth();
    }

    get day() {
        return this.state.date.getDate();
    }

    handlePrevMonthButtonClick = () => {
        const date = new Date(this.year, this.month - 1);
        
        this.setState({ date });//функция изменения состояния на дату предыдущего месяца
    };

    handleNextMonthButtonClick = () => {
        const date = new Date(this.year, this.month + 1);
        
        this.setState({ date });
    };
    //функция для смены выбранного месяца/года 
    handleSelectChange = () => {
        const year = this.yearSelect.value;
        const month = this.monthSelect.value;

        const date = new Date(year, month);

        this.setState({ date });
    };
    //функция для клика на дату  
    handleDayClick = date => {
        this.setState({ selectedDate: date }); //выбираем дату
        
        this.props.onChange(date);
    };

    render() {
        const { years, monthNames, weekDayNames } = this.props;
        const { currentDate, selectedDate } = this.state;

        const monthData = Calendar.getMonthData(this.year, this.month);
        //стрелка определяется jsx иыражением
        //thead для верха таблицы
        return (
            <div className="calendar">
                <header>
                    

                    <select
                        ref={element => this.monthSelect = element} //ссылка на выбранный месяц(запоминает некоторую информацию и не запускает новые рендеры)
                        value={this.month}
                        onChange={this.handleSelectChange}
                    >
                        {monthNames.map((name, index) =>
                            <option key={name} value={index}>{name}</option>
                        )}
                    </select>

                    <select
                        ref={element => this.yearSelect = element}
                        value={this.year}
                        onChange={this.handleSelectChange}
                    >
                        {years.map(year =>
                            <option key={year} value={year}>{year}</option> 
                        )}
                    </select>
                    <button onClick={this.handlePrevMonthButtonClick}>{'<'}</button> 
                    <button onClick={this.handleNextMonthButtonClick}>{'>'}</button>
                </header>

                <table>
                    <thead>
                        <tr>
                            {weekDayNames.map(name =>
                                <th key={name}>{name}</th>    
                            )}
                        </tr>
                    </thead>

                    <tbody>
                        {monthData.map((week, index) =>
                            <tr key={index} className="week">
                                {week.map((date, index) => date ?
                                    <td
                                        key={index}
                                        className={classnames('day', {
                                            'today': Calendar.areEqual(date, currentDate),
                                            'selected': Calendar.areEqual(date, selectedDate)
                                        })}
                                        onClick={() => this.handleDayClick(date)}
                                    >{date.getDate()}</td>
                                    :
                                    <td key={index} />
                                )}
                            </tr> 
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
}