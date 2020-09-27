import React, { Component } from 'react';
import OKRListItem from "../OKRListItem/OKRListItem";

import './OKRList.scss'

export class OKRList extends Component {
    render () {
        return (
            <ul className="okr-list">
                {this.props.OKRList.map((parentObjective)=>{
                    return (
                        <OKRListItem objective={parentObjective}></OKRListItem>
                    )
                })}
            </ul>
        )
    }
}

export default OKRList;
