import React, { Component } from 'react'

export default class Display extends Component {
render() {
        let {value} = this.props;
        return (
            <div className="result-box">
               {value}
            </div>
        )
    }
}
Display.defaultProps= {
    value: "0"
}