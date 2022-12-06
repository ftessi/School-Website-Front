import "./Footer.css";
import { ReactComponent as FacebookIcon } from '../img/icon-facebook.svg';
import { ReactComponent as WhatsappIcon } from '../img/icon-whatsapp.svg';

export default function Footer() {





    return (
        <>
            <div className="Footer container-fluid" id="Contacto">
                <div className="Footer-Container row">
                    <div className="col-lg-6">
                        <div className="Icons-Container">
                            <WhatsappIcon className="Media-Icon" />
                            <a href="https://www.facebook.com/francisco.savio.35110">
                                <FacebookIcon className="Media-Icon" />
                            </a>
                        </div>
                        <div className="Contact-Address">
                            <h4>Inicial: Dirección 1</h4>
                            <h4>Primaria: Dirección 2</h4>
                            <h4>Secundaria: Dirección 3</h4>
                            <h4>Maquinista Francisco Savio, Escobar, Bs. As.</h4>
                            <a href="/Login" className="logButton">Iniciar Sesión</a>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="Map-Container">
                            <iframe className="Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3292.1270362505106!2d-58.77957888420644!3d-34.398116854156505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bc9fb173d6386d%3A0xcbb4a0e0c4a349d1!2sColegio%20Francisco%20Savio!5e0!3m2!1sen!2sar!4v1661129980903!5m2!1sen!2sar" width="400" height="300" title="Map" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};