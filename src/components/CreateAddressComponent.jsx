import React, { Component } from 'react';
import api from '../services/api';

class CreateAddressComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            state: '',
            country: '',
            municipality: '',
            code: ''
        }
        this.changeStateHandler = this.changeStateHandler.bind(this);
        this.changeCountryHandler = this.changeCountryHandler.bind(this);
        this.changeMunicipalityHandler = this.changeMunicipalityHandler.bind(this);
        this.changeCodeHandler = this.changeCodeHandler.bind(this);
        this.saveOrUpdateAddress = this.saveOrUpdateAddress.bind(this);
    }

    componentDidMount(){
        if(this.state.id === '_add'){
            return
        }else{
            api.getAddressById(this.state.id).then( (res) =>{
                let address = res.data;
                this.setState({
                    state: address.state,
                    country: address.country,
                    municipality: address.municipality,
                    code: address.code
                });
            });
        }        
    }
    saveOrUpdateAddress = (e) => {
        e.preventDefault();
        let address = {state: this.state.state, country: this.state.country, municipality: this.state.municipality,  code: this.state.code};
        console.log('address => ' + JSON.stringify(address));

        if(this.state.id === '_add'){
            api.createAddress(address).then(res =>{
                this.props.history.push('/address');
            });
        }else{
            api.updateAddress(address, this.state.id).then( res => {
                this.props.history.push('/address');
            });
        }
    }
    
    changeStateHandler= (event) => {
        this.setState({state: event.target.value});
    }

    changeCountryHandler= (event) => {
        this.setState({country: event.target.value});
    }

    changeMunicipalityHandler= (event) => {
        this.setState({municipality: event.target.value});
    }

    changeCodeHandler= (event) => {
        this.setState({code: event.target.value});
    }

    cancel(){
        this.props.history.push('/address');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Adicionar novo endereço</h3>
        }else{
            return <h3 className="text-center">Atualizar endereço</h3>
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
                                            <label> Estado: </label>
                                            <input placeholder="state" name="state" className="form-control" 
                                                value={this.state.state} onChange={this.changeStateHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> País: </label>
                                            <input placeholder="country" name="country" className="form-control" 
                                                value={this.state.country} onChange={this.changeCountryHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Município: </label>
                                            <input placeholder="municipality" name="municipality" className="form-control" 
                                                value={this.state.municipality} onChange={this.changeMunicipalityHandler}/>
                                        </div>
                                        <button className="btn btn-success" onClick={this.saveOrUpdateAddress}>Salvar</button>
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
export default CreateAddressComponent;