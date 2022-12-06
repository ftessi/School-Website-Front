import './Educacion.css';
import jardin from './../img/jardin.jpg';
import primaria from './../img/primaria.jpg';
import secundaria from './../img/secundaria.jpg';
import Button from '@mui/material/Button';


export default function Students() {

    return (
        <>
            <div className="Education container-fluid" >
                <a className='Education-Anchor' id='Educacion' href="none">Anchor</a>
                <div className='col'>
                    <h1 className="display-2">NUESTROS NIVELES</h1>
                    <h4 className='display-5'> Seleccioná el nivel para ver mas información.</h4>
                </div>
                <div className='Container-Buttons row'>
                    <div className='col-lg-4'>
                        <div className='Button-Container'>
                            <img src={jardin} alt="Inicial"></img>
                            <h2 className='display-2'>INICIAL</h2>
                            <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.</p>
                            <div>
                                <Button  color="success" className="Education-Button" id="Button-Start" href="/Inicial"  variant="contained">VER MÁS</Button>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className='Button-Container'>
                            <img src={primaria} alt="Imagen Primaria"></img>
                            <h2 className='display-2'>PRIMARIA</h2>
                            <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.</p>
                            <div>
                                <Button  color="success" className="Education-Button" id="Button-Start" href="/Primaria"  variant="contained">VER MÁS</Button>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className='Button-Container'>
                            <img src={secundaria} alt="Imagen Secundaria"></img>
                            <h2 className='display-2'>SECUNDARIA</h2>
                            <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.</p>
                            <div>
                                <Button  color="success" className="Education-Button" id="Button-Start" href="/Secundaria"  variant="contained">VER MÁS</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};