import React, { Component } from 'react';
import api from '../services/api';

class ViewLegalComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            legal: {}
        }
    }

    componentDidMount(){
        api.getLegalById(this.state.id).then( res => {
            this.setState({legal: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> Detalhes empresa</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Endereço: </label>
                            <div> { this.state.legal.address }</div>
                        </div>
                        <div className = "row">
                            <label> Nome da empresa: </label>
                            <div> { this.state.legal.name }</div>
                        </div>
                        <div className = "row">
                            <label> EMail: </label>
                            <div> { this.state.legal.email }</div>
                        </div>
                        <div className = "row">
                            <label> Telefone: </label>
                            <div> { this.state.legal.phone }</div>
                        </div>
                        <div className = "row">
                            <label> CNPJ: </label>
                            <div> { this.state.legal.cnpj }</div>
                        </div>                        
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewLegalComponent;