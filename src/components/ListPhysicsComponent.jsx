import React, { Component } from 'react';
import PhysicsService from '../services/PhysicsService';

class ListPhysicsComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                physicss: []
        }
        this.addPhysics = this.addPhysics.bind(this);
        this.editPhysics = this.editPhysics.bind(this);
        this.deletePhysics = this.deletePhysics.bind(this);
    }

    deletePhysics(id){
        PhysicsService.deletePhysics(id).then( res => {
            this.setState({physicss: this.state.physicss.filter(physics => physics.id !== id)});
        });
    }
    viewPhysics(id){
        this.props.history.push(`/view-physics/${id}`);
    }
    editPhysics(id){
        this.props.history.push(`/add-physics/${id}`);
    }

    componentDidMount(){
        PhysicsService.getPhysicss().then((res) => {
            this.setState({ physicss: res.data});
        });
    }

    addPhysics(){
        this.props.history.push('/add-physics/_add');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Lista de empresas</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addPhysics}> Adicionar empresa</button>
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
                                    <th> CPF</th>
                                    <th> Pacotes</th>
                                    <th> Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.physicss.map(
                                        physics => 
                                        <tr key = {physics.id}>
                                             <td> { physics.address} </td>   
                                             <td> {physics.name}</td>
                                             <td> {physics.email}</td>
                                             <td> {physics.phone}</td>
                                             <td> {physics.administrator}</td>
                                             <td> {physics.cpf}</td>
                                             <td> {physics.packages}</td>
                                             <td>
                                                 <button onClick={ () => this.editPhysics(physics.id)} className="btn btn-info">Atualizar </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deletePhysics(physics.id)} className="btn btn-danger">Deletar </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewPhysics(physics.id)} className="btn btn-info">Detalhes </button>
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

export default ListPhysicsComponent;