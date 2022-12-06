import React from "react";
import Button from '@mui/material/Button';
import { ReactComponent as Hat } from '../img/hat.svg';
import { ReactComponent as Calendar } from '../img/calendar.svg';
import { ReactComponent as Att } from '../img/att.svg';
import { ReactComponent as Feed } from '../img/feed.svg';
import logo from './../img/logo.png';
import './Navbar.css';

function Navbar() {

    return (
        <>
            <nav className="navbar navbar-dark navbar-expand-lg">
                <div className="container-fluid col-11">
                    <Button href="/#">
                        <img className="Logo" src={logo} alt="Logo FS"></img>
                        <a className="navbar-brand" href="/#"></a>
                    </Button>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav mb-2 mb-lg-0">
                                <li className="nav-item">
                            <Button>
                                    <a className="nav-link" href="/#Educacion"><Hat className="Icon" />EDUCACIÓN</a>
                            </Button>
                                </li>
                                <li className="nav-item">
                            <Button>
                                    <a className="nav-link" href="/#Publicaciones"><Feed className="Icon" />PUBLICACIONES</a>
                            </Button>
                                </li>
                                <li className="nav-item">
                            <Button>
                                    <a className="nav-link" href="/#Calendario"><Calendar className="Icon"  />CALENDARIO</a>
                            </Button>
                                </li>
                                <li className="nav-item">
                            <Button>
                                    <a className="nav-link" href="/#Contacto"><Att className="Icon" />CONTACTO</a>
                            </Button>
                                </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;