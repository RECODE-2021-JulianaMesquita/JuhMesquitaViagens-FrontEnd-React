import React, { Component } from 'react';
import PackageTravelService from '../services/PackageTravelService';
import LegalService from '../services/PackageTravelService';

class UpdatePackageTravel extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            title: '',
            idAddressDestiny: '',
            idAddressOrigin: '',
            idLegal: '',
            people: '',
            value: '',
            dateGoing: '',
            dateReturn: '',
            legal: ''
        }
        this.changeTitleHandler = this.changeTitleHandler.bind(this);
        this.changeIdAddressDestinyHandler = this.changeIdAddressDestinyHandler.bind(this);
        this.changeIdAddressOriginHandler = this.changeIdAddressOriginHandler.bind(this);
        this.changeIdLegalHandler = this.changeIdLegalHandler.bind(this);
        this.changePeopleHandler = this.changePeopleHandler.bind(this);
        this.changeValueHandler = this.changeValueHandler.bind(this);
        this.changeDateGoingHandler = this.changeDateGoingHandler.bind(this);
        this.changeDateReturnHandler = this.changeDateReturnHandler.bind(this);
        this.changeLegalnHandler = this.changeLegalnHandler.bind(this);
        this.updatePackageTravel = this.updatePackageTravel.bind(this);
       
        this.state = {
            legals: []
        }
        this.addLegal = this.addLegal.bind(this);
        this.editLegal = this.editLegal.bind(this);
        this.deleteLegal = this.deleteLegal.bind(this);
    }

    componentDidMount(){
        PackageTravelService.getPackageTravelById(this.state.id).then( (res) =>{
            let packageTravel = res.data;
            this.setState({
                title: packageTravel.title,
                idAddressDestiny: packageTravel.idAddressDestiny,
                idAddressOrigin: packageTravel.idAddressOrigin,
                idLegal: packageTravel.idLegal,
                people: packageTravel.people,
                value: packageTravel.value,
                dateGoing: packageTravel.dateGoing,
                dateReturn: packageTravel.dateReturn,
                legal: packageTravel.legal
            });
        });

        LegalService.getLegals().then((res) => {
            this.setState({ legals: res.data});
        });
    }

    updatePackageTravel = (e) => {
        e.preventDefault();
        let packageTravel = {ftitle: this.state.title, idAddressDestiny: this.state.idAddressDestiny, idAddressOrigin: this.state.idAddressOrigin,  people: this.state.people , value: this.state.value, dateGoing: this.state.dateGoing, dateReturn: this.state.dateReturn, legal: this.state.legal};
        console.log('packageTravel => ' + JSON.stringify(packageTravel));
        console.log('id => ' + JSON.stringify(this.state.id));
        PackageTravelService.updatePackageTravel(packageTravel, this.state.id).then( res => {
            this.props.history.push('/packageTravels');
        });
    }
    
    changeTitleHandler = (event) => {
        this.setState({ title: event.target.value });
    }

    changeIdAddressDestinyHandler = (event) => {
        this.setState({ idAddressDestiny: event.target.value });
    }

    changeIdAddressOriginHandler = (event) => {
        this.setState({ idAddressOrigin: event.target.value });
    }

    changeIdLegalHandler = (event) => {
        this.setState({ idLegal: event.target.value });
    }

    changePeopleHandler = (event) => {
        this.setState({ people: event.target.value });
    }

    changeValueHandler = (event) => {
        this.setState({ value: event.target.value });
    }

    changeDateGoingHandler = (event) => {
        this.setState({ dateGoing: event.target.value });
    }

    changeDateReturnHandler = (event) => {
        this.setState({ dateReturn: event.target.value });
    }

    changeLegalnHandler = (event) => {
        this.setState({ legal: event.target.value });
    }

    cancel(){
        this.props.history.push('/packageTravels');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update PackageTravel</h3>
                                <div className = "card-body">
                                    <form>
                                    <div className="form-group">
                                        <label> Titulo do pacote de viagem: </label>
                                        <input placeholder="Pacote de viagem" name="title" className="form-control"
                                            value={this.state.title} onChange={this.changeTitleHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Endereço de destino: </label>
                                        <input placeholder="Destino" name="idAddressDestiny" className="form-control"
                                            value={this.state.idAddressDestiny} onChange={this.changeIdAddressDestinyHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Endereço de Origem: </label>
                                        <input placeholder="Origem" name="idAddressOrigin" className="form-control"
                                            value={this.state.idAddressOrigin} onChange={this.changeIdAddressOriginHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Id Empresa do pacote: </label>
                                        <input placeholder="Empresa" name="idLegal" className="form-control"
                                            value={this.state.idLegal} onChange={this.changeIdLegalHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Quantidade de pessoas: </label>
                                        <input placeholder="2" name="people" className="form-control"
                                            value={this.state.people} onChange={this.changePeopleHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Preço do pacote: </label>
                                        <input placeholder="R$585,00" name="value" className="form-control"
                                            value={this.state.value} onChange={this.changeValueHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Data ida: </label>
                                        <input type="date" placeholder="05/02/2025" name="dateGoing" className="form-control"
                                            value={this.state.dateGoing} onChange={this.changeDateGoingHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Data volta: </label>
                                        <input type="date" placeholder="05/03/2025" name="dateReturn" className="form-control"
                                            value={this.state.dateReturn} onChange={this.changeDateReturnHandler} />
                                    </div>
                                    <div className="form-group">
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected>Empresa</option>
                                        {
                                            this.state.legals.map(
                                                legal =>
                                                <option value={this.state.legal} onChange={this.changeLegalHandler} >{legal.name}</option>
                                                )
                                        }
                                    </select>
                                    </div>

                                        <button className="btn btn-success" onClick={this.updatePackageTravel}>Atualizar</button>
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


export default UpdatePackageTravel;