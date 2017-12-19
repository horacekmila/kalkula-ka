import React, { Component } from 'react'

export default class Displej extends Component {
    render() {
        return (
            <div className="displej col-xs-12">
                {this.props.hodnota}
            </div>
        )
    }
}
