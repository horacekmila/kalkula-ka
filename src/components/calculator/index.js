import React, { Component } from 'react';
import Displej from "./displej";
import Klavesnice from "./klavesnice";

export default class Calculator extends Component {
    
    state = {
        hodnota: 0,
        prvni_cislo: null,
        operace: null,
    }

    KlikCislo = (e) => {
        if(this.state.hodnota == 0){
            this.setState({
                hodnota: e.target.value,
            });
        }
        else{
            this.setState({
                hodnota: this.state.hodnota + e.target.value,
            });
        };
    }
    
    KlikOperace = (e) => {
        if(this.state.hodnota == 0 && e.target.value == "/"){
            alert("Nemůžeš dělit nulou!");
        }
        else{
            this.setState({
                prvni_cislo: this.state.hodnota,
                operace: e.target.value,
                hodnota: 0,
            });
        }
    }

    KlikVysledek = () => {
        let vysledek = "Error!";        
        const prvni = parseFloat(this.state.prvni_cislo);
        const druhe = parseFloat(this.state.hodnota);

        switch(this.state.operace){
            case "+":
                vysledek = prvni + druhe;
                break;

            case "-":
                vysledek = prvni - druhe;
                break;

            case "/":
                vysledek = prvni / druhe;
                break;

            case "*":
                vysledek = prvni * druhe;
                break;
                
        }
        this.setState({
            hodnota: vysledek,
            operace: null,
            prvni_cislo: null,
        })
    }

    render() {
        return (
            <div>
                <Displej operace={this.state.operace} className="col-xs-12" hodnota={this.state.hodnota} />
                <Klavesnice KlikVysledek={this.KlikVysledek} KlikOperace={this.KlikOperace} KlikCislo={this.KlikCislo} className="col-xs-12" />
            </div>
        )
    }
}
