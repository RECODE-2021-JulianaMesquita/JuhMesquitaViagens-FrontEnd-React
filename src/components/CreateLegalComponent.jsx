import React, { Component } from 'react';
import LegalService from '../services/LegalService';

class CreateLegalComponent extends Component {
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
            cnpj: ''
        }
        this.changeAddressHandler = this.changeAddressHandler.bind(this);
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.changePhoneHandler = this.changePhoneHandler.bind(this);
        this.changeAdministratorHandler = this.changeAdministratorHandler.bind(this);
        this.changeCnpjHandler = this.changeCnpjHandler.bind(this);
        this.saveOrUpdateLegal = this.saveOrUpdateLegal.bind(this);
    }
    componentDidMount(){
        if(this.state.id === '_add'){
            return
        }else{
            LegalService.getLegalById(this.state.id).then( (res) =>{
                let legal = res.data;
                this.setState({
                    address: legal.address,
                    name: legal.name,
                    email: legal.email,
                    password: legal.password,
                    phone: legal.phone,
                    administrator: legal.administrator,
                    cnpj: legal.cnpj
                });
            });
        }        
    }
    saveOrUpdateLegal = (e) => {
        e.preventDefault();
        let legal = {address: this.state.address, name: this.state.name, email: this.state.email, password: this.state.password, phone: this.state.phone, administrator: this.state.administrator, cnpj: this.state.cnpj};
        console.log('legal => ' + JSON.stringify(legal));

        if(this.state.id === '_add'){
            LegalService.createLegal(legal).then(res =>{
                this.props.history.push('/legals');
            });
        }else{
            LegalService.updateLegal(legal, this.state.id).then( res => {
                this.props.history.push('/legals');
            });
        }
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

    changeCnpjHandler= (event) => {
        this.setState({cnpj: event.target.value});
    }

    cancel(){
        this.props.history.push('/legals');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Adicionando Empresa</h3>
        }else{
            return <h3 className="text-center">Atualizando Empresa</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
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
                                            <label> CNPJ: </label>
                                            <input placeholder="cnpj" name="cnpj" className="form-control" 
                                                value={this.state.cnpj} onChange={this.changeCnpjHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveOrUpdateLegal}>Salvar</button>
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
export default CreateLegalComponent;