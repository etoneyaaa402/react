import React from "react"
import PhoneInput from "../PhoneInput/PhoneInput";
import StudentInfoHandler from "./StudentInfoHandler";

class StudentInfo extends React.Component {
    constructor(props) {
        super(props);

        this.handleSurnameChange = this.handleSurnameChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handlePatronymicChange = this.handlePatronymicChange.bind(this);
        this.handleBirthDateChange = this.handleBirthDateChange.bind(this);
        this.handleEnterYearChange = this.handleEnterYearChange.bind(this);
        this.handleFacultyChange = this.handleFacultyChange.bind(this);
        this.handleGroupChange = this.handleGroupChange.bind(this);
        this.handleSpecializationChange = this.handleSpecializationChange.bind(this);
        this.handleNumberChange = this.handleNumberChange.bind(this);
        this.createBirthDayOptions = this.createBirthDayOptions.bind(this);
        this.createBirthMonthOptions = this.createBirthMonthOptions.bind(this);
        this.createBirthYearOptions = this.createBirthYearOptions.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            surname: "",
            name: "",
            patronymic: "",
            enterYear: "",
            faculty: "",
            group: "",
            specialization: "",
            birthDate: { birthDay: "1", birthMonth: "1", birthYear: `${new Date().getFullYear()}` },
            phoneNumber: "",
            email: "",
            enableSubmit: false,
        };
    }

    handleSurnameChange(event) {
        this.setState({ surname: event.target.value });
    }
    handleNameChange(event) {
        this.setState({ name: event.target.value });
    }
    handlePatronymicChange(event) {
        this.setState({ patronymic: event.target.value });
    }
    handleBirthDateChange(event) {
        let value = event.target.value;
        let name = event.target.name;
        let birthDate = this.state.birthDate;

        birthDate[name] = value;
        this.setState({ birthDate: birthDate });
    }
    createBirthDayOptions(days) {
        let daysOptions = [];
        for (let i = 1; i <= days; i++) {
            daysOptions.push(<option key={i} value={i}>{i}</option>)
        }
        return daysOptions;
    }
    createBirthMonthOptions(months) {
        let monthsOptions = [];
        for (let i = 1; i <= months; i++) {
            monthsOptions.push(<option key={i} value={i}>{i}</option>)
        }
        return monthsOptions;
    }
    createBirthYearOptions(years) {
        let yearsOptions = [];
        for (let i = new Date().getFullYear(); i >= years; i--) {
            yearsOptions.push(<option key={i} value={i}>{i}</option>)
        }
        return yearsOptions;
    }
    handleEnterYearChange(event) {
        this.setState({ enterYear: event.target.value, });
    }
    handleFacultyChange(event) {
        this.setState({ faculty: event.target.value, });
    }
    handleGroupChange(event) {
        this.setState({ group: event.target.value, });
    }
    handleSpecializationChange(event) {
        this.setState({ specialization: event.target.value, });
    }
    handleNumberChange(value) {
        this.setState({ phoneNumber: value, });
    }
    handleEmailChange(event) {
        let email = event.target.value;
        let emailRegExp = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;

        this.setState({
            email: email,
        });

        if (email.match(emailRegExp)) {
            this.setState({ enableSubmit: true })
        }
        else {
            this.setState({ enableSubmit: false })
        }
    }

    handleSubmit(event) {
        event.preventDefault();

        // Object for data in inputs 
        let studentInfo = this.state.studentInfo || {};

        let emailWarning = document.getElementById("emailWarning");
        if (!this.state.enableSubmit) {
            emailWarning.style.display = "inline";
        }
        if (this.state.enableSubmit) {
            emailWarning.style.display = "none";

            // Write data in studentInfo object
            for (let key in this.state) {
                if (key === "enableSubmit") continue;
                if (typeof this.state[key] === "object") {
                    let objectProperty = this.state[key];
                    for (let key in objectProperty) {
                        studentInfo[key] = objectProperty[key];
                    }
                    continue;
                }
                studentInfo[key] = this.state[key];
            }

            this.setState({ studentInfo: studentInfo, });
        }

    }

    render() {
        return (
            <>
                <h1>Данные студента</h1>
                <form onSubmit={this.handleSubmit} className="signUp-form">
                    <div className="field">
                        <label htmlFor="surname">Фамилия:</label>
                        <input type="text" required name="surname" id="surname" value={this.state.surname} onChange={this.handleSurnameChange} />
                    </div>
                    <div className="field">
                        <label htmlFor="name">Имя:</label>
                        <input type="text" name="name" id="name" value={this.state.name} onChange={this.handleNameChange} />
                    </div>
                    <div className="field">
                        <label htmlFor="patronymic">Отчество:</label>
                        <input type="text" name="patronymic" id="patronymic" value={this.state.patronymic} onChange={this.handlePatronymicChange} />
                    </div>
                    <p>Дата рождения:</p>
                    <div className="birthdayDate">
                        <div className="field">
                            <label htmlFor="birthDay">День:</label>
                            <select name="birthDay" id="birthDay" value={this.state.birthDate.day} onChange={this.handleBirthDateChange}>
                                {this.createBirthDayOptions(this.props.state.days)}
                            </select>
                        </div>
                        <div className="field">
                            <label htmlFor="birthMonth">Месяц:</label>
                            <select name="birthMonth" id="birthMonth" value={this.state.birthDate.month} onChange={this.handleBirthDateChange}>
                                {this.createBirthMonthOptions(this.props.state.months)}
                            </select>
                        </div>
                        <div className="field">
                            <label htmlFor="birthYear">Год:</label>
                            <select name="birthYear" id="birthYear" value={this.state.birthDate.year} onChange={this.handleBirthDateChange}>
                                {this.createBirthYearOptions(this.props.state.minYear)}
                            </select>
                        </div>
                    </div>
                    <div className="field">
                        <label htmlFor="enterYear">Год поступления:</label>
                        <input type="text" name="enterYear" id="enterYear" value={this.state.enterYear} onChange={this.handleEnterYearChange} />
                    </div>
                    <div className="universityInfo">
                        <div className="field">
                            <label htmlFor="faculty">Факультет:</label>
                            <input type="text" name="faculty" id="faculty" value={this.state.faculty} onChange={this.handleFacultyChange} />
                        </div>
                        <div className="field">
                            <label htmlFor="group">Группа:</label>
                            <input type="text" name="group" id="group" value={this.state.group} onChange={this.handleGroupChange} />
                        </div>
                        <div className="field">
                            <label htmlFor="specialization">Специальность:</label>
                            <input type="text" name="specialization" id="specialization" value={this.state.specialization} onChange={this.handleSpecializationChange} />
                        </div>
                    </div>
                    <div className="field">
                        <label htmlFor="phoneNumber">Номер телефона:</label>
                        <PhoneInput flags={this.props.state.flags} id="phoneNumber" onNumberChange={this.handleNumberChange} />
                    </div>
                    <div className="field">
                        <label htmlFor="email">Электронная почта:</label>
                        <input type="text" name="email" id="email" onChange={this.handleEmailChange} />
                        <span className="warning" id="emailWarning">Пожалуйста, введите электронную почту по образцу: something@something.something</span>
                    </div>


                    <input type="submit" value="Отправить" />
                </form>
                <StudentInfoHandler studentInfo={this.state.studentInfo}/>
            </>
        );
    }
}
export default StudentInfo;
