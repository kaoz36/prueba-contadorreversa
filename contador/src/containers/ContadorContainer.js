import React, { Component } from 'react';
import ContadorComponent from './../components/ContadorComponent'
import { Grid, Row, Col } from 'react-flexbox-grid';

var nuevoDias = 2;
var nuevoHoras = 0;
var nuevoMinutos = 0;
var nuevoSegundos = 0;

/*
function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

const doSomething = async () => {
    await sleep(1000);
    this.restarSegundos();
    console.log(dias + ":" + horas + ":" + minutos + ":" + segundos);
}*/

class ContadorContainer extends Component {

    componentDidMount() {
        this.initTimer();
    }

    constructor(props) {
        super(props);
        this.state = {
            dias: nuevoDias,
            horas: nuevoHoras,
            minutos: nuevoMinutos,
            segundos: nuevoSegundos
        };
    }

    initTimer() {
        while (nuevoDias >= 0 && nuevoHoras >= 0) {
            this.restarMinutos();
            console.log(nuevoDias + ":" + nuevoHoras + ":" + nuevoMinutos + ":" + nuevoSegundos);
        }
    } 
    
    restarSegundos() {
        nuevoSegundos--;
        if (nuevoSegundos < 1) {
            this.restarMinutos();
            nuevoSegundos = 59;
        }
        this.setState( {segundos: nuevoSegundos} );
    }

    restarMinutos() {
        nuevoMinutos--;
        if (nuevoMinutos < 1) {
            this.restarHoras();
            nuevoMinutos = 59;
        }
        this.setState( {minutos: nuevoMinutos} );
    }

    restarHoras() {
        nuevoHoras--;
        if (nuevoHoras < 1) {
            this.restarDias();
            nuevoHoras = 23;
        }
        this.setState( {horas: nuevoHoras} );
    }

    restarDias() {
        nuevoDias--;
        this.setState( {dias: nuevoDias} );
    }
    
    render() {
        return (
            <Grid>
                <Row>
                    <Col>
                        <ContadorComponent nombre='dia' unidad={this.state.dias}/>
                    </Col>
                    <Col>
                        <ContadorComponent nombre='hora' unidad={this.state.horas}/>
                    </Col>
                    <Col>
                        <ContadorComponent nombre='minuto' unidad={this.state.minutos}/>
                    </Col>
                    <Col>
                        <ContadorComponent nombre='segundo' unidad={this.state.segundos}/>
                    </Col>
                </Row>
            </Grid>            
        );
    }
}

export default ContadorContainer;