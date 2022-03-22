import React, { Component } from 'react';
import AddressService from '../services/AddressService';

class ViewAddressComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            address: {}
        }
    }

    componentDidMount(){
        AddressService.getAddressById(this.state.id).then( res => {
            this.setState({address: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> Detalhes endereço</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Estado: </label>
                            <div> { this.state.address.state }</div>
                        </div>
                        <div className = "row">
                            <label> País: </label>
                            <div> { this.state.address.country }</div>
                        </div>
                        <div className = "row">
                            <label> Municipio: </label>
                            <div> { this.state.address.municipality }</div>
                        </div>
                        <div className = "row">
                            <label> Código postal: </label>
                            <div> { this.state.address.code }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
export default ViewAddressComponent;