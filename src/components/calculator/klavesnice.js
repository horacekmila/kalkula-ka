import React, { Component } from 'react'
import Klavesa from "./klavesa"

export default class Klavesnice extends Component {
    render() {
        return (
            <div className="klavesnice">
                <Klavesa Klik={this.props.KlikCislo} hodnota="0" />                
                <Klavesa Klik={this.props.KlikCislo} hodnota="1" />
                <Klavesa Klik={this.props.KlikCislo} hodnota="2" />
                <Klavesa Klik={this.props.KlikOperace} operace hodnota="+" />
                <Klavesa Klik={this.props.KlikCislo} hodnota="3" />
                <Klavesa Klik={this.props.KlikCislo} hodnota="4" />
                <Klavesa Klik={this.props.KlikCislo} hodnota="5" />
                <Klavesa Klik={this.props.KlikOperace} operace hodnota="-" />
                <Klavesa Klik={this.props.KlikCislo} hodnota="6" />
                <Klavesa Klik={this.props.KlikCislo} hodnota="7" />
                <Klavesa Klik={this.props.KlikCislo} hodnota="8" />
                <Klavesa Klik={this.props.KlikOperace} operace hodnota="/" />
                <Klavesa Klik={this.props.KlikCislo} hodnota="." />
                <Klavesa Klik={this.props.KlikCislo} hodnota="9" />
                <Klavesa Klik={this.props.KlikVysledek} vysledek hodnota="=" />
                <Klavesa Klik={this.props.KlikOperace} operace hodnota="*" />                                                

            </div>
        )
    }
}
