import React from "react";
import Links from "./Links";
import "./Styles.css";

class JobMenu extends React.Component{
    constructor(props) {
        super(props);
        this.state = { profession: ""}; //текущему состоянию мы присвоили пустую переменную
        
    }
    click(e){
        this.setState({profession: e.target.innerText}); //target используется для возможности кликнуть на элемент
        console.log(this.state) //e — синтетическое событие
    }
    
    render() {
        return (
            <div>
                <ul>
                    <li> <a onClick={(e)=>  this.click(e)}>Front-end developer</a></li>
                    <li> <a onClick={(e)=>  this.click(e)}>Back-end developer</a></li>
                    <li> <a onClick={(e)=>  this.click(e)}>Full stack developer</a></li>
                    <li> <a onClick={(e)=>  this.click(e)}>UX/UI Designer</a></li>
                    <li> <a onClick={(e)=>  this.click(e)}>Markup specialist</a></li>
                </ul>
                {(this.state.profession) && <Links profession={this.state.profession}/>}
            </div>
        );
    }
}

export default JobMenu;