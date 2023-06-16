import React from 'react';
import CounriesList from "./CountriesList";

class PhoneInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleCountryChange = this.handleCountryChange.bind(this);
        this.setPhoneCode = this.setPhoneCode.bind(this);
        this.phoneNumberFormatter = this.phoneNumberFormatter.bind(this);

        this.state = {
            countryName: this.props.flags[0].countryName,
            flag: this.props.flags[0].flag,
            mask: this.props.flags[0].mask,
            maskIndex: this.setPhoneCode(this.props.flags[0].mask),
            value: "",
        };
    }
    setPhoneCode(mask) {
        for (let i = 0; i < mask.length; i++) {
            if (mask[i] === " ") {
                if (mask[i + 1] === "(") return i + 2;
                return i + 1;
            }
        }
    }
    handleCountryChange(country) {
        this.setState({
            countryName: country.countryName,
            flag: country.flag,
            mask: country.mask,
            maskIndex: this.setPhoneCode(country.mask),
        });
    }
    componentDidMount() {
        this.setState({value: this.state.mask.slice(0, this.state.maskIndex)})
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.countryName !== this.state.countryName) {
            this.setState({value: this.state.mask.slice(0, this.state.maskIndex)})
        }
    }
    phoneNumberFormatter(e) {
        const inputField = document.getElementById(this.props.id);
        let enteredSymbol = inputField.value.slice(-1);
        let mask = this.state.mask.split("");
        let maskIndex = this.state.maskIndex;

        /* If the entered symbol is not a number and 
           entered symbol is not a "Backspace" and
           not an allowed symbol("+", " ", "(", ")", "-") 
        */
        if (isNaN(Number(enteredSymbol)) &&
            e.nativeEvent.inputType !== "deleteContentBackward" &&
            enteredSymbol !== "+" &&
            enteredSymbol !== " " &&
            enteredSymbol !== "(" &&
            enteredSymbol !== ")" &&
            enteredSymbol !== "-"
        ) {
            this.setState({value: mask.join("").slice(0, maskIndex),})
            return;
        }

        // Auto insert "+" symbol in the beginning
        if (maskIndex === 0 && enteredSymbol !== "+") {
            mask[maskIndex] = "+";
            maskIndex++;
        }

        // Erasing a number
        if (e.nativeEvent.inputType === "deleteContentBackward") {
            maskIndex--;
            this.setState({
                maskIndex: maskIndex,
                value: mask.join("").slice(0, maskIndex),
            })
            return;
        }

        // If all the numbers are intered we block the input
        if (mask.length === maskIndex) {
            this.setState({value: mask.join("").slice(0, maskIndex),})
            return;
        }

        // If the user decides to write formatted phone number by himself
        if (
            enteredSymbol === " " ||
            enteredSymbol === "(" ||
            enteredSymbol === ")" ||
            enteredSymbol === "-"
        ) {
            maskIndex++;
            return;
        }

        // Considering correct formatting
        if (mask[maskIndex] === " ") maskIndex++;
        if (mask[maskIndex] === "(") maskIndex++;
        if (mask[maskIndex] === ")") maskIndex += 2;
        if (mask[maskIndex] === "-") maskIndex++;

        // Inserting symbol in a mask
        mask[maskIndex] = enteredSymbol;

        // Symbol before closing ")"
        if (mask[maskIndex + 1] === ")") maskIndex += 3;

        // Symbol before "-"
        else if (mask[maskIndex + 1] === "-") maskIndex += 2;

        // Plain symbol input
        else maskIndex++;

        // Changing input field and state mask
        let currentMask = mask.join("");
        this.setState({
            mask: currentMask,
            maskIndex: maskIndex,
            value: currentMask.slice(0, maskIndex),
        })

        // Rise up input field value to the parent component
        this.props.onNumberChange(currentMask.slice(0, maskIndex));
    }
    render() {
        return (
            <div className='phone_input'>
                <CounriesList flags={this.props.flags} currentFlag={this.state.flag} onCountryChange={this.handleCountryChange} />
                <input type="text" id={this.props.id} value={this.state.value} onChange={this.phoneNumberFormatter} />
            </div>
        );
    }
}

export default PhoneInput;