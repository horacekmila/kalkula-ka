import React, { Component } from 'react'

export default class Key extends Component {
    render() {
         const {value} = this.props;
        return (
         <button className="Key">
           {value}
         </button>
        )
    }
}
Key.defaultProps= {
    value: "0"
}
