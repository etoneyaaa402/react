import React from 'react';

const defautTimezone = -new Date().getTimezoneOffset() / 60;
//создали константную переменную с текущей таймзоной
function formatTime(timezone = defautTimezone, format = "24") {
    let date = new Date().toUTCString(); //Метод преобразует дату в строку, интерпретируя ее в часовом поясе UTC
    
    let hours = +(date[17] + date[18]);
    let minutes = +(date[20] + date[21]);
    let seconds = +(date[23] + date[24]);

    let timezoneHours;
    let timezoneMinutes;

    if (timezone.length === 5) {
        timezoneHours = +(timezone[0] + timezone[1]);
        timezoneMinutes = +(timezone[3] + timezone[4]);
    } else if (timezone.length === 6) {
        timezoneHours = +(timezone[0] + timezone[1] + timezone[2]);
        timezoneMinutes = +(timezone[4] + timezone[5]);
    }

    // Adapting time with timezone 
    hours += timezoneHours;
    minutes += timezoneMinutes;

    // Formatting the date
    if (hours > 23) {
        hours -= 24;
    }
    if (minutes > 59) {
        minutes -= 60;
        hours++;
    }
    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;

    // Adapting time with the format
    if (+format === 24) {
        date = hours + ":" + minutes + ":" + seconds;
    }
    else if (+format === 12) {
        if (hours > 12) {
            hours = (hours - 12 < 10) ? "0" + (hours - 12) : hours - 12;
            date = hours + ":" + minutes + ":" + seconds + " PM";
        } else {
            date = hours + ":" + minutes + ":" + seconds + " AM";
        }
        if (hours === 12) date = hours + ":" + minutes + ":" + seconds + " PM";
    }

    return date;
}
{/*конструктор класса, который будет устанавливать значение this..state */}
{/*Компоненты-классы должны всегда вызывать основной конструктор с помощью props */}

class Clock extends React.Component {
    
    constructor(props) {
        {/*super необходимо для использования this в конструкторе */}
        {/*инициализировать this.props */}
        super(props);
        this.state = { date: new Date(), };{/*текущему состоянию присваиваем переменную с датой */}
    }

    tick() {
        {/*this.setState() для планирования обновления локального состояния компонента */}
        this.setState({
            date: new Date(),
        });
    }
    
    componentDidMount() {
        {/*методом жизненного цикла является componentDidMount (монтирование) Этот метод вызывается после рендеринга компонента. */}
        this.timerID = setInterval(
            () => this.tick(),
            1000)
    }
    
    componentWillUnmount() {
        {/*останавливает таймер, метод жизненного цикла(размонтирование) */}
        clearInterval(this.timerID);
    }

    render() {
        return (
            <div>
                <h1>Задание 1</h1>
                <div className="time">
                    <h2>Сейчас {formatTime(this.props.timezone, this.props.format)}.</h2>
                </div>
                <h3>Timezone: {this.props.timezone}</h3>
                <h3>Format: {this.props.format}</h3>
            </div>
        );
    }
}
export default Clock;