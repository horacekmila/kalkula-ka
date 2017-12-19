import React, { Component } from 'react'

export default class Key extends Component {
    render() {
         let {value} = this.props;
        return (
         <button className="Key col-xs-2 col-xs-offset-1">
           {value}
         </button>
        )
    }
}

