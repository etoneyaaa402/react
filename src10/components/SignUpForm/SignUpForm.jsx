import PropTypes from 'prop-types';
import React from "react";

import PhoneInput from "../PhoneInput/PhoneInput";

class SignUpForm extends React.Component {
    constructor(props) {
        super(props);
        console.log("State: ", typeof(props.state))
        console.log("Flags: ", typeof(props.flags))
        console.log("Days: ", typeof(props.days))
        console.log("Months: ", typeof(props.months))
        console.log("MinYear: ", typeof(props.minYear))

        this.handleSurnameChange = this.handleSurnameChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handlePatronymicChange = this.handlePatronymicChange.bind(this);
        this.handleGenderChange = this.handleGenderChange.bind(this);
        this.handleBirthDateChange = this.handleBirthDateChange.bind(this);
        this.handleNumberChange = this.handleNumberChange.bind(this);
        this.createBirthDayOptions = this.createBirthDayOptions.bind(this);
        this.createBirthMonthOptions = this.createBirthMonthOptions.bind(this);
        this.createBirthYearOptions = this.createBirthYearOptions.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleInitialPasswordChange = this.handleInitialPasswordChange.bind(this);
        this.handleConfirmPasswordChange = this.handleConfirmPasswordChange.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            surname: "",
            name: "",
            patronymic: "",
            male: false,
            female: false,
            gender: "",
            birthDate: { birthDay: "", birthMonth: "", birthYear: "" },
            phoneNumber: "",
            email: "",
            initialPassword: "",
            confirmPassword: "",
            finalPassword: "",
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
    handleGenderChange(event) {
        let target = event.target;
        let gender = target.name;

        if (!this.state.male && !this.state.female) {
            this.setState({
                [gender]: target.checked,
                gender: gender,
            })
        }
        else if (gender === "male") {
            this.setState({
                male: target.checked,
                female: false,
                gender: gender,
            })
        }
        else if (gender === "female") {
            this.setState({
                female: target.checked,
                male: false,
                gender: gender,
            })
        }
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
    handleInitialPasswordChange(event) {
        let initialPassword = event.target.value;
        this.setState({
            initialPassword,
        });

        let passwordWarning = document.getElementById("passwordWarning");

        if (this.state.confirmPassword === initialPassword) {
            this.setState({
                finalPassword: initialPassword,
                enableSubmit: true,
            })
            passwordWarning.style.display = "none";
        }
        else {
            this.setState({
                finalPassword: null,
                enableSubmit: false
            });
            passwordWarning.style.display = "inline";
        }
    }
    handleConfirmPasswordChange(event) {
        let confirmPassword = event.target.value;
        this.setState({
            confirmPassword,
        });

        let passwordWarning = document.getElementById("passwordWarning");

        if (this.state.initialPassword === confirmPassword) {
            this.setState({
                finalPassword: confirmPassword,
                enableSubmit: true,
            })
            passwordWarning.style.display = "none";
        }
        else {
            this.setState({
                finalPassword: null,
                enableSubmit: false
            });
            passwordWarning.style.display = "inline";
        }
    }
    getPasswordSafety() {
        let password = this.state.finalPassword;
        let totalPercentage = 0;

        if (password) {
            let hasLowerCaseSymbols = password.match(/[a-z]+/);
            let hasUpperCaseSymbols = password.match(/[A-Z]+/);
            let hasNumberSymbols = password.match(/[0-9]+/);
            let hasSpecialSymbols = password.match(/\$|\/|%|@|#|\*/);

            if (hasLowerCaseSymbols) totalPercentage += 25;
            if (hasUpperCaseSymbols) totalPercentage += 25;
            if (hasNumberSymbols) totalPercentage += 25;
            if (hasSpecialSymbols) totalPercentage += 25;
        }

        totalPercentage += "%";

        return totalPercentage;
    }

    handleSubmit(event) {
        let emailWarning = document.getElementById("emailWarning");
        if (!this.state.enableSubmit) {
            emailWarning.style.display = "inline";
        }
        if (this.state.enableSubmit) {
            emailWarning.style.display = "none";
            console.log('User:');
            for (let key in this.state) {
                if (typeof this.state[key] === "object") {
                    console.log(Object.values(this.state[key]));
                    continue;
                }
                console.log(this.state[key]);
            }
        }
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="signUp-form">
                <div className="field">
                    <label htmlFor="surname">Фамилия:</label>
                    <input type="text" required name="surname" id="surname" value={this.state.surname} onChange={this.handleSurnameChange} />
                </div>
                <div className="field">
                    <label htmlFor="name">Имя:</label>
                    <input type="text" required name="name" id="name" value={this.state.name} onChange={this.handleNameChange} />
                </div>
                <div className="field">
                    <label htmlFor="patronymic">Отчество:</label>
                    <input type="text" required name="patronymic" id="patronymic" value={this.state.patronymic} onChange={this.handlePatronymicChange} />
                </div>
                <p>Пол:</p>
                <div className="field gender-field">
                    <input type="checkbox" name="male" id="male" checked={this.state.male} onChange={this.handleGenderChange} />
                    <label htmlFor="male">Мужской</label>
                </div>
                <div className="field gender-field">
                    <input type="checkbox" name="female" id="female" checked={this.state.female} onChange={this.handleGenderChange} />
                    <label htmlFor="female">Женский</label>
                </div>
                <p>Дата рождения:</p>
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
                <div className="field">
                    <label htmlFor="phoneNumber">Номер телефона:</label>
                    <PhoneInput flags={this.props.state.flags} id="phoneNumber" onNumberChange={this.handleNumberChange} />
                </div>
                <div className="field">
                    <label htmlFor="email">Электронная почта:</label>
                    <input type="text" name="email" id="email" onChange={this.handleEmailChange} />
                    <span className="warning" id="emailWarning">Пожалуйста, введите электронную почту по образцу: something@something.something</span>
                </div>
                <div className="field">
                    <label htmlFor="initialPassword">Пароль:</label>
                    <input type="text" required name="initialPassword" id="initialPassword" value={this.state.initialPassword} onChange={this.handleInitialPasswordChange} />
                </div>
                <div className="field">
                    <label htmlFor="confirmPassword">Подтвердите пароль:</label>
                    <input type="text" required name="confirmPassword" id="confirmPassword" value={this.state.confirmPassword} onChange={this.handleConfirmPasswordChange} />
                    <span className="warning" id="passwordWarning">Пароли не совпадают</span>

                    <div className="safetyBar" style={(this.state.finalPassword) ? { display: "block" } : { display: "none" }}>
                        <p>Безопасный пароль:</p>
                        <div className="progressBar">
                            <div className="successLine" style={{ width: this.getPasswordSafety() }}></div>
                        </div>
                    </div>

                </div>


                <input type="submit" value="Отправить" />
            </form>
        );
    }
}

SignUpForm.propTypes = {
    state: PropTypes.object,
    flags: PropTypes.array,
    days: PropTypes.number,
    months: PropTypes.number,
    minYear: PropTypes.number,
};

export default SignUpForm;