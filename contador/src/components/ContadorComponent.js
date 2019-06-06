import React, { Component } from 'react';
import './styles.css';

class ContadorComponent extends Component {

    render() {
        const { nombre, unidad } = this.props;
        return (
            <div className="contador">
                <h2>{nombre}</h2>
                <h1>{unidad}</h1>
            </div>
            
        );
    }
}

export default ContadorComponent;