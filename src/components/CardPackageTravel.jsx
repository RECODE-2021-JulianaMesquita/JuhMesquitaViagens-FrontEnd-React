import React, { Component } from 'react';
import PackageTravelService from '../services/PackageTravelService';

import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCardTitle,
    MDBCardText,
    MDBCol
  } from 'mdbreact';

class CardPackageTravel extends Component {
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
        PackageTravelService.deletePackage(id).then( res => {
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
        PackageTravelService.getPackages().then((res) => {
            this.setState({packageTravel: res.data});
        });
    }

    addPackage(){
        this.props.history.push('/add-package/_add');
    }

    render() {
        return (
            <>
                {                    
                    this.state.packageTravel.map(
                        packageTravel => 
                        <MDBCol style={{ maxWidth: "22rem" }} key={packageTravel.id}>
                        <MDBCard>
                            <MDBCardImage className="img-fluid" src="https://github.com/RECODE-2021-JulianaMesquita/JuhMesquitaViagens-FrontEnd-React/blob/main/src/image/1.jpg?raw=true" waves />
                            <MDBCardBody>
                            <MDBCardTitle>Titulo : {packageTravel.title}</MDBCardTitle>
                            <MDBCardText> Destino : {packageTravel.idAddressDestiny} - R$ {packageTravel.value}</MDBCardText>
                            <MDBBtn className="btn btn-info" onClick={() => this.viewPackageTravel(packageTravel.id)}>Detalhes</MDBBtn>
                            </MDBCardBody>
                        </MDBCard>
                        </MDBCol>                           
                    )}
            </>
        );
    }
}

export default CardPackageTravel;