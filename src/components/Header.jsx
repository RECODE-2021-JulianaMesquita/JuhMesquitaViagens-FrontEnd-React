import React, { Component } from 'react';
import logo from '../image/JuhViagens.png';
import { Link } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {
        }
    }

    render() {
        return (
            <header>
                <div className='container nav'>
                    <nav className="navbar navbar-expand-lg bg-dark fixed-top navbar-header">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <Link to='/Promotions' className="nav-link">Promoções</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/packages' className="nav-link">Pacotes</Link>
                                </li>
                                <li className="nav-item">
                                    <Link exact to="/" className="navbar-brand" href="/#">
                                        <img className='logo' src={logo} alt='logo eurotrip' />
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/contact' className="nav-link">Contato</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/login' className="nav-link">Entrar</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/buy-car' className="nav-link">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                                    </svg>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </nav>

                </div>
            </header >

        );
    }
}
export default Header;