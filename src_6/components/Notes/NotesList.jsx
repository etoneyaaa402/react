import React from "react"

class NotesList extends React.Component {
    constructor(props) {
        super(props);

        this.createControlButtons = this.createControlButtons.bind(this);
        this.createNotes = this.createNotes.bind(this);
        this.handleControlButtonClick = this.handleControlButtonClick.bind(this);
    }

    handleControlButtonClick(event) {
        this.props.onChangeNotesLength(event.target.id);
    }

    createNotes() {
        let notes = this.props.notes;

        let displayNotes = [];
        for (let i = 0; i < notes.length; i++) {
            let note =
                <div className="note" style={{ backgroundColor: i > 6 ? "fuchsia" : "" }}>
                    <p className="noteWarning" style={{ display: i > 6 ? "block" : "none" }}>У вас слишком много заметок!</p>
                    <div className="name">{notes[i].noteName}</div>
                    <div className="date">
                        {notes[i].noteDate.noteDay + "." + notes[i].noteDate.noteMonth + "." + notes[i].noteDate.noteYear}
                    </div>
                    <div className="content">{notes[i].noteContent}</div>
                </div>
                ;
            displayNotes.push(note);
        }
        return displayNotes;
    }

    createControlButtons() {
        let notes = this.props.notes;

        let controlButtons =
            <div className="controlButtons">
                <button id="shift" onClick={this.handleControlButtonClick}>Удалить первую заметку</button>
                <button id="pop" onClick={this.handleControlButtonClick}>Удалить последнюю заметку</button>
            </div>
            ;
        if (notes.length > 2) return controlButtons;
    }

    render() {
        return (
            <>
                {this.createControlButtons()}
                <div className="notesList">
                    {this.createNotes()}
                </div>
            </>
        );
    }
}
export default NotesList;
