import React, { Component } from 'react'

export default class Klavesa extends Component {
    render() {

        if(this.props.vysledek){
            return (
                <input value={this.props.hodnota} type="submit" onClick={this.props.Klik} className="klavesa col-xs-3 btn btn-danger" />
            );
        }

        if(this.props.operace){
            return (
                <input value={this.props.hodnota} type="submit" onClick={this.props.Klik} className="klavesa col-xs-3 btn btn-success" />
            ); 
        }

        else{
            return (
                <input value={this.props.hodnota} type="submit" onClick={this.props.Klik} className="klavesa col-xs-3 btn btn-default" />
            ); 
        }

    }
}
