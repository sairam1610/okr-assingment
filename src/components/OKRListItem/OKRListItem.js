import React, { Component } from 'react';
import './OKRListItem.scss'


export class OKRListItem extends Component {
    constructor() {
        super()
        this.state={
            show: false
        }
    }
    toggleClick(){
        this.setState({show:!this.state.show});
    }
    render () {
            return (
                    <li className="parent-objective">
                        <div className="drop-down-section">{this.state.show ?
                            <span className="drop-down" onClick={()=>{this.toggleClick()}}>&#9660;</span>:
                            <span className="drop-down" onClick={()=>{this.toggleClick()}}>&#9650;</span>}</div>
                        <div className="okr-list-item">
                            <div className="parent-title"> {this.props.objective.title}</div>
                            <ul className={`children-objectives ${this.state.show ? "" : "hide"}`}>
                                {this.props.objective.children.map((childrenObjective)=>{
                                    return <li className="children-title">{childrenObjective.title}></li>
                                })}
                            </ul>
                        </div>
                    </li>
            )
    }
}

export default OKRListItem;
