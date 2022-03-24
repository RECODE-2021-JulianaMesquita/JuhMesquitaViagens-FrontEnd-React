import React, { Component } from 'react';
import api from '../services/api';

class ViewPackageTravel extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            packageTravel: {}
        }
    }

    componentDidMount() {
        api.getPackageTravelById(this.state.id).then(res => {
            this.setState({ packageTravel: res.data });
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className="card col-md-6 offset-md-3">
                    <h3 className="text-center"> Detalhe do pacote {this.state.packageTravel.title} - id:{this.state.packageTravel.id}</h3>
                    <div className="card-body">
                        <div className="row">
                            <label> Titulo: </label>
                            <div> {this.state.packageTravel.title}</div>
                        </div>
                        <div className="row">
                            <label> Id endereço de destino: </label>
                            <div> {this.state.packageTravel.idAddressDestiny}</div>
                        </div>
                        <div className="row">
                            <label> Id endereço de origem: </label>
                            <div> {this.state.packageTravel.idAddressOrigin}</div>
                        </div>
                        <div className="row">
                            <label> Id Empresa que fornece o pacote: </label>
                            <div> {this.state.packageTravel.idLegal}</div>
                        </div>
                        <div className="row">
                            <label> Quantidade de pessoas: </label>
                            <div> {this.state.packageTravel.people}</div>
                        </div>
                        <div className="row">
                            <label> Preço: </label>
                            <div> R$ {this.state.packageTravel.value}</div>
                        </div>
                        <div className="row">
                            <label> Data de ida: </label>
                            <div> {this.state.packageTravel.dateGoing}</div>
                        </div>
                        <div className="row">
                            <label> Data de volta: </label>
                            <div> {this.state.packageTravel.dateReturn}</div>
                        </div>
                        <div className="row">
                            <label> Empresa: </label>
                            <div> {this.state.packageTravel.legal}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default ViewPackageTravel;