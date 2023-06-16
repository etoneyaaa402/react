
import react from "react";
export class ArrowButtons extends react.Component {
    constructor(props) {
        super(props);
    }

    onClickHandler = (direction) => {
        this.props.handler(this.props.arrowAttribute,direction);
}

//Метод bind() создаёт новую функцию, которая при вызове устанавливает в качестве контекста выполнения this предоставленное значение

    render() {
       return (
           <div className="arrows" >
               <button onClick={this.onClickHandler.bind(this,"ascending")} className="arrow-button">
                   <div className="arrow arrow-top"/>
               </button>
               <button onClick={this.onClickHandler.bind(this,"descending")} className="arrow-button">
                   <div className="arrow arrow-bottom"/>
               </button>
           </div>
       )
   }
}