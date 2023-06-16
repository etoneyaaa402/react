import React from "react"
import NotesList from "./NotesList";

class Notes extends React.Component {
    constructor(props) {
        super(props);

        this.handleNoteNameChange = this.handleNoteNameChange.bind(this);
        this.handleNoteContentChange = this.handleNoteContentChange.bind(this);
        this.handleNoteDateChange = this.handleNoteDateChange.bind(this);
        this.handleCreateButtonClick = this.handleCreateButtonClick.bind(this);
        this.changeNotesLength = this.changeNotesLength.bind(this);


        this.state = {
            noteName: "",
            noteContent: "",
            noteDate: {
                noteDay: `${new Date().getDay()}`,
                noteMonth: `${new Date().getMonth() + 1}`,
                noteYear: `${new Date().getFullYear()}`,
            },
            notes: [],
        };
    }

    handleNoteNameChange(event) {
        this.setState({ noteName: event.target.value });
    }
    handleNoteContentChange(event) {
        this.setState({ noteContent: event.target.value });
    }

    handleNoteDateChange(event) {
        let value = event.target.value;
        let name = event.target.name;
        let noteDate = this.state.noteDate;

        noteDate[name] = value;
        this.setState({ noteDate: noteDate });
    }
    createBirthDayOptions(days) {
        let daysOptions = [];
        for (let i = 1; i <= days; i++) {
            if (i < 10) i = "0" + i;
            daysOptions.push(<option key={i} value={i}>{i}</option>)
        }
        return daysOptions;
    }
    createBirthMonthOptions(months) {
        let monthsOptions = [];
        for (let i = 1; i <= months; i++) {
            if (i < 10) i = "0" + i;
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

    handleCreateButtonClick(event) {
        let note = {
            noteName: this.state.noteName,
            noteContent: this.state.noteContent,
            noteDate: this.state.noteDate,
        }
        let notes = this.state.notes;
        notes.push(note);
        this.setState({
            noteName: "",
            noteContent: "",
            noteDate: {
                noteDay: "",
                noteMonth: "",
                noteYear: "",
            },
            notes: notes,
        });
    }

    changeNotesLength(critery) {
        let notes = this.state.notes;
        
        if (critery === "shift") notes.shift();
        if (critery === "pop") notes.pop();

        this.setState({notes: notes,});
    }

    render() {
        return (
            <>
                <h1>Заметки</h1>
                <div className="notes">

                    {/* Note name */}
                    <div className="noteName">
                        <div className="field">
                            <label htmlFor="noteName">Название заметки:</label>
                            <input type="text" required name="noteName" id="noteName" value={this.state.noteName} onChange={this.handleNoteNameChange} />
                        </div>
                    </div>

                    {/* Note content */}
                    <div className="noteContent">
                        <div className="field">
                            <label htmlFor="noteContent">Содержание заметки:</label>
                            <textarea rows="7" cols="35" id="noteContent" value={this.state.noteContent} onChange={this.handleNoteContentChange} />
                        </div>
                    </div>

                    {/* Date pick */}
                    <div className="noteDate">
                        <div className="field">
                            <label htmlFor="noteDay">День:</label>
                            <select name="noteDay" id="noteDay" value={this.state.noteDate.noteDay} onChange={this.handleNoteDateChange}>
                                {this.createBirthDayOptions(this.props.state.days)}
                            </select>
                        </div>
                        <div className="field">
                            <label htmlFor="noteMonth">Месяц:</label>
                            <select name="noteMonth" id="noteMonth" value={this.state.noteDate.noteMonth} onChange={this.handleNoteDateChange}>
                                {this.createBirthMonthOptions(this.props.state.months)}
                            </select>
                        </div>
                        <div className="field">
                            <label htmlFor="birthYear">Год:</label>
                            <select name="noteYear" id="noteYear" value={this.state.noteDate.noteYear} onChange={this.handleNoteDateChange}>
                                {this.createBirthYearOptions(this.props.state.minYear)}
                            </select>
                        </div>
                    </div>

                    {/* Creating note button */}
                    <div className="noteBtn">
                        <button onClick={this.handleCreateButtonClick}>Создать заметку</button>
                    </div>
                </div>

                <NotesList notes={this.state.notes} onChangeNotesLength={this.changeNotesLength}/>
            </>
        );
    }
}
export default Notes;
