import React, { Component } from 'react';
import api from '../services/api';

class ListaPackageTravel extends Component {
    constructor(props) {
        super(props)

        this.state = {
            packageTravel: []
        }
        this.addPackageTravel= this.addPackage.bind(this);
        this.editPackageTravel= this.editPackage.bind(this);
        this.deletePackageTravel= this.deletePackage.bind(this);
    }

    deletePackage(id){
        api.deletePackage(id).then( res => {
            this.setState({packageTravel: this.state.packageTravel.filter(packageTravel => packageTravel.id !== id)});
        });
    }
    viewPackage(id){
        this.props.history.push(`/view-package/${id}`);
    }
    editPackage(id){
        this.props.history.push(`/add-package/${id}`);
    }

    componentDidMount(){
        api.getPackages().then((res) => {
            this.setState({packageTravel: res.data});
        });
    }

    addPackage(){
        this.props.history.push('/add-package/_add');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Pacotes - Painel Administrador</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addPackage}>Cadastrar pacote</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Titulo do pacote</th>
                                    <th> Destino</th>
                                    <th> Origem</th>
                                    <th> Empresa que cadastrou</th>
                                    <th> Quantidade de pessoas</th>
                                    <th> Preço da diária</th>
                                    <th> Data de inicio</th>
                                    <th> Data fim</th>
                                    <th> Empresa</th>
                                    <th> Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.packageTravel.map(
                                        packageTravel => 
                                        <tr key = {packageTravel.id}>
                                             <td> {packageTravel.title} </td>  
                                             <td> {packageTravel.idAddressDestiny} </td>   
                                             <td> {packageTravel.idAddressOrigin}</td>
                                             <td> {packageTravel.idLegal}</td>
                                             <td> {packageTravel.people}</td>
                                             <td> {packageTravel.value}</td>
                                             <td> {packageTravel.dateGoing}</td>
                                             <td> {packageTravel.dateReturn}</td>
                                             <td> {packageTravel.legal}</td>
                                             <td>
                                                 <button onClick={ () => this.editPackageTravel(packageTravel.id)} className="btn btn-info">Editar </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deletePackageTravel(packageTravel.id)} className="btn btn-danger">Excluir</button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewPackageTravel(packageTravel.id)} className="btn btn-info">Detalhes</button>
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


export default ListaPackageTravel;