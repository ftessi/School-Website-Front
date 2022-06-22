import React from "react";
import Button from '@mui/material/IconButton';
import { ReactComponent as Hat } from '../img/hat.svg';
import { ReactComponent as Calendar } from '../img/calendar.svg';
import { ReactComponent as Att } from '../img/att.svg';
import { ReactComponent as Feed } from '../img/feed.svg';
import './Navbar.css';

function Navbar() {


    return (
        <>
            <div className="Navbar">
                <div className="Navbar-Buttons">
                    <Button className="Button" href="/#Educacion" >
                        <Hat className="Icon" />
                        <p>EDUCACIÓN</p>
                    </Button>
                    <Button className="Button" href="/#Publicaciones">
                        <Feed className="Icon" />
                        <p>PUBLICACIONES</p>
                    </Button>
                    <Button className="Navbar-Logo" href="/#">
                        <img className="Logo" src="https://www.adobe.com/es/express/create/media_127a4cd0c28c2753638768caf8967503d38d01e4c.jpeg?width=400&format=jpeg&optimize=medium" alt="Logo.png"></img>
                    </Button>
                    <Button className="Button" href="/#Calendario">
                        <Calendar className="Icon" />
                        <p>CALENDARIO</p>
                    </Button>
                    <Button className="Button" href="/#Contacto">
                        <Att className="Icon" />
                        <p>CONTACTO</p>
                    </Button>
                </div>
            </div>
        </>
    );
}

export default Navbar;