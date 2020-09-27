import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import axios from '../../axios/axios-instance';
import './OKRHome.scss'
import OKRList from "../../components/OKRList/OKRList";
export class OKRHome extends Component {

    componentDidMount () {
        this.props.onInitOKRList();
    }

    render () {
        console.log(this.props.OKRList)
        return (
            <OKRList OKRList={this.props.OKRList}></OKRList>
        )
    }
}

const mapStateToProps = state => {
    return {
        OKRList: state.OKRListState.OKRList,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onInitOKRList: () => dispatch(actions.initOKRList()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)( OKRHome, axios );
