import React, { Component } from 'react';
import api from '../services/api';

class UpdatePhysicsComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            address: '',
            name: '',
            email: '',
            password: '',
            phone: '',
            administrator: '',
            cpf: '',
            packages: ''
        }
        this.changeAddressHandler = this.changeAddressHandler.bind(this);
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.changePhoneHandler = this.changePhoneHandler.bind(this);
        this.changeAdministratorHandler = this.changeAdministratorHandler.bind(this);
        this.changeCpfHandler = this.changeCpfHandler.bind(this);
        this.changePackagesHandler = this.changePackagesHandler.bind(this);
        this.updatePhysics = this.updatePhysics.bind(this);
    }

    componentDidMount(){
        api.getPhysicsById(this.state.id).then( (res) =>{
            let physics = res.data;
            this.setState({
                address: physics.address,
                name: physics.name,
                email: physics.email,
                password: physics.password,
                phone: physics.phone,
                administrator: physics.administrator,
                cpf: physics.cpf
            });
        });
    }

    updatePhysics = (e) => {
        e.preventDefault();
        let physics = {address: this.state.address, name: this.state.name, email: this.state.email, password: this.state.password, phone: this.state.phone, administrator: this.state.administrator, cpf: this.state.cpf, packages: this.state.packages};
        console.log('physics => ' + JSON.stringify(physics));
        console.log('id => ' + JSON.stringify(this.state.id));
        api.updatePhysics(physics, this.state.id).then( res => {
            this.props.history.push('/physics');
        });
    }
    
    changeAddressHandler= (event) => {
        this.setState({address: event.target.value});
    }

    changeNameHandler= (event) => {
        this.setState({name: event.target.value});
    }

    changeEmailHandler= (event) => {
        this.setState({emailId: event.target.value});
    }

    changePasswordHandler= (event) => {
        this.setState({password: event.target.value});
    }

    changePhoneHandler= (event) => {
        this.setState({phone: event.target.value});
    }

    changeAdministratorHandler= (event) => {
        this.setState({administrator: event.target.value});
    }

    changeCpfHandler= (event) => {
        this.setState({cpf: event.target.value});
    }

    changePackagesHandler= (event) => {
        this.setState({packages: event.target.value});
    }

    cancel(){
        this.props.history.push('/physics');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Atualizar Usuario</h3>
                                <div className = "card-body">
                                    <form>
                                    <div className = "form-group">
                                            <label> Endereço: </label>
                                            <input placeholder="address" name="address" className="form-control" 
                                                value={this.state.address} onChange={this.changeAddressHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Nome da empresa: </label>
                                            <input placeholder="name" name="name" className="form-control" 
                                                value={this.state.name} onChange={this.changeNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Email: </label>
                                            <input placeholder="email" name="email" className="form-control" 
                                                value={this.state.email} onChange={this.changeEmailHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Senha: </label>
                                            <input type="password" placeholder="password" name="password" className="form-control" 
                                                value={this.state.password} onChange={this.changePasswordHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Telefone para contato: </label>
                                            <input placeholder="phone" name="phone" className="form-control" 
                                                value={this.state.phone} onChange={this.changePhoneHandler}/>
                                        </div>
                                        <div class="form-check form-switch">
                                            <input class="form-check-input" type="checkbox" id="administrator" value={this.state.administrator} onChange={this.changeAdministratorHandler}/>
                                            <label class="form-check-label" for="flexSwitchCheckDefault">Conta de administrador</label>
                                        </div>
                                        
                                        <div className = "form-group">
                                            <label> CPF: </label>
                                            <input placeholder="cpf" name="cpf" className="form-control" 
                                                value={this.state.cpf} onChange={this.changeCpfHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.updatePhysics}>Atualizar</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancelar</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}


export default UpdatePhysicsComponent;