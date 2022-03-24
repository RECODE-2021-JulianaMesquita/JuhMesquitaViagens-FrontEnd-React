import React, { useEffect, useState} from 'react';
import api from '../services/api';
import { Link } from 'react-router-dom';

export const CardPackageTravel = () => {
    const [packageTravel, setpackageTravel] = useState([])

    useEffect(() => {
        api.get('/packageTravel').then(response => {
            setpackageTravel(response.data);
        })
    }, []);

    return (
        <div className='container text-white'>
            <div className='row'>
                {packageTravel.map(packageT => (
                    <div className="col" style={{ maxWidth: "22rem" }} key={packageT.id}>
                        <div className="card" style={{ backgroundColor: "black" }}>
                            <img className="img-fluid card-img-top" alt="..." src="https://github.com/RECODE-2021-JulianaMesquita/JuhMesquitaViagens-FrontEnd-React/blob/main/src/image/1.jpg?raw=true" />
                            <div className="card-body">
                                <h5 className="card-title">{packageT.titulo}  </h5>
                                <p className="card-text"> {packageT.idAddressDestiny} </p>
                                <p className="card-text"> R$ {packageT.value}</p>
                                <Link to={'/PackageTravel/'+packageT.id} className="btn btn-info">Detalhe</Link>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
}