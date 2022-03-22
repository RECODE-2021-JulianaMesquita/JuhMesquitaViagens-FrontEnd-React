import React, { Component } from 'react';
import LegalService from '../services/LegalService';

class ListLegalComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                legals: []
        }
        this.addLegal = this.addLegal.bind(this);
        this.editLegal = this.editLegal.bind(this);
        this.deleteLegal = this.deleteLegal.bind(this);
    }

    deleteLegal(id){
        LegalService.deleteLegal(id).then( res => {
            this.setState({legals: this.state.legals.filter(legal => legal.id !== id)});
        });
    }
    viewLegal(id){
        this.props.history.push(`/view-legal/${id}`);
    }
    editLegal(id){
        this.props.history.push(`/add-legal/${id}`);
    }

    componentDidMount(){
        LegalService.getLegals().then((res) => {
            this.setState({ legals: res.data});
        });
    }

    addLegal(){
        this.props.history.push('/add-legal/_add');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Lista de empresas</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addLegal}> Adicionar empresa</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Endereço</th>
                                    <th> Nome</th>
                                    <th> Email</th>
                                    <th> Telefone</th>
                                    <th> Administrador</th>
                                    <th> CNPJ</th>
                                    <th> Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.legals.map(
                                        legal => 
                                        <tr key = {legal.id}>
                                             <td> { legal.address} </td>   
                                             <td> {legal.name}</td>
                                             <td> {legal.email}</td>
                                             <td> {legal.phone}</td>
                                             <td> {legal.administrator}</td>
                                             <td> {legal.cnpj}</td>
                                             <td>
                                                 <button onClick={ () => this.editLegal(legal.id)} className="btn btn-info">Atualizar </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteLegal(legal.id)} className="btn btn-danger">Deletar </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewLegal(legal.id)} className="btn btn-info">Detalhes </button>
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

export default ListLegalComponent;