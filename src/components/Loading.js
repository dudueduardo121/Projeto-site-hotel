import React, { Component } from 'react';
import loading from '../images/gif/loading-arrow.gif';

export default class Loading extends Component {
    render() {
        return (
            <div>
                <img src={loading} alt="loading"/>
            </div>
        )
    }
}
