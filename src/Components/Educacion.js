import './Educacion.css';
import jardin from './../img/jardin.jpg';
import primaria from './../img/primaria.jpg';
import secundaria from './../img/secundaria.jpg';
import Button from '@mui/material/IconButton';

export default function Students() {

    return (
        <>
            <div className="Education" id='Educacion'>
                <h1 className="EducationH">EDUCACIÓN</h1>
                <p className="Intro-Text"> Seleccioná el nivel para ver todo su contenido.</p>
                <div className='Container-Buttons'>
                    <Button className="Education-Button" id="Button-Start">
                        <h1>Inicial</h1>
                        <img src={jardin} alt="Inicial"></img>
                    </Button>
                    <Button className="Education-Button">
                        <h1>Primaria</h1>
                        <img src={primaria} alt="Primaria"></img>
                    </Button>
                    <Button className="Education-Button" id="Button-End">
                        <h1>Secundaria</h1>
                        <img src={secundaria} alt="Secundaria"></img>
                    </Button>
                </div>
            </div>
        </>
    )
};