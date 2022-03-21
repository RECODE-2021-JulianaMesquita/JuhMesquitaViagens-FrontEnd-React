import React, { Component } from 'react';
import PackageTravelService from '../services/PackageTravelService';
import foto1 from '../image/6.jpg';

class CardPackageTravel extends Component {
    constructor(props) {
        super(props)

        this.state = {
            packageTravel: []
        }
        this.addPackageTravel = this.addPackage.bind(this);
        this.editPackageTravel = this.editPackage.bind(this);
        this.deletePackageTravel = this.deletePackage.bind(this);
    }

    deletePackage(id) {
        PackageTravelService.deletePackage(id).then(res => {
            this.setState({ packageTravel: this.state.packageTravel.filter(packageTravel => packageTravel.id !== id) });
        });
    }
    viewPackage(id) {
        this.props.history.push(`/view-package/${id}`);
    }
    editPackage(id) {
        this.props.history.push(`/add-package/${id}`);
    }

    componentDidMount() {
        PackageTravelService.getPackages().then((res) => {
            this.setState({ packageTravel: res.data });
        });
    }

    addPackage() {
        this.props.history.push('/add-package/_add');
    }

    render() {
        return (
            <div className='container'>
                {
                    this.state.packageTravel.map(
                        packageTravel =>
                            <div className="container" key={packageTravel.id}>
                                <div className="row">
                                    <div className="row row-cols-1 row-cols-md-2 g-4">
                                        <div className="col">
                                            <div className="card">
                                                <img width="150" height="150" src={foto1} alt='logo' className="card-img-top" />
                                                <div className="card-body">
                                                    <h5 className="card-title">{packageTravel.title}</h5>
                                                    <p className="card-text"> Destino : {packageTravel.idAddressDestiny} </p>
                                                    <h4 className="card-text">  R$ {packageTravel.value}</h4>
                                                    <button type="button" className="btn btn-info" onClick={() => this.viewPackageTravel(packageTravel.id)}>Detalhes</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    )}
            </div>
        );
    }
}

export default CardPackageTravel;