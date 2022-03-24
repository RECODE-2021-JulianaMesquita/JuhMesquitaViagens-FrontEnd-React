import React, { Component } from 'react';
import api from '../services/api';

class ListAddressComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                Address: []
        }
        this.addAddress = this.addAddress.bind(this);
        this.editAddress = this.editAddress.bind(this);
        this.deleteAddress = this.deleteAddress.bind(this);
    }

    deleteAddress(id){
        api.deleteAddress(id).then( res => {
            this.setState({Address: this.state.Address.filter(address => address.id !== id)});
        });
    }
    viewAddress(id){
        this.props.history.push(`/view-address/${id}`);
    }
    editAddress(id){
        this.props.history.push(`/add-address/${id}`);
    }

    componentDidMount(){
        api.getAddresss().then((res) => {
            this.setState({ Address: res.data});
        });
    }

    addAddress(){
        this.props.history.push('/add-address/_add');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Lista de endereços</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addAddress}> Adicionar novo endereço</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th>Estado</th>
                                    <th>País</th>
                                    <th>Municipio</th>
                                    <th>Código Postal</th>
                                    <th> Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.Address.map(
                                        address => 
                                        <tr key = {address.id}>
                                             <td> {address.state} </td>   
                                             <td> {address.country}</td>
                                             <td> {address.municipality}</td>
                                             <td> {address.code}</td>
                                             <td>
                                                 <button onClick={ () => this.editAddress(address.id)} className="btn btn-info">Atualizar</button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteAddress(address.id)} className="btn btn-danger">Deletar</button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewAddress(address.id)} className="btn btn-info">Detalhes</button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}


export default ListAddressComponent;