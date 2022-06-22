import "./Footer.css";
import { ReactComponent as FacebookIcon } from '../img/icon-facebook.svg';
import { ReactComponent as WhatsappIcon } from '../img/icon-whatsapp.svg';
import { ReactComponent as InstagramIcon } from '../img/icon-instagram.svg';

export default function Footer() {





    return (
        <>
        <div className="Footer" id="Contacto">
            <div className="Media-Icons">
                <FacebookIcon />
                <WhatsappIcon />
                <InstagramIcon />
            </div>
            <div className="Contact-Address">
            <p>Dirección 1</p>
            <p>Dirección 2</p>
            <p>Dirección 3</p>
            <p id="Address">Maquinista F. Savio, Escobar, Bs. As.</p>
            </div>
            <div className="Map-Container">
            <iframe className="Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3292.1270362505784!2d-58.779578885120195!3d-34.39811685415478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bc9fb173d6386d%3A0xcbb4a0e0c4a349d1!2sColegio%20Francisco%20Savio!5e0!3m2!1sen!2sar!4v1649279118089!5m2!1sen!2sar" title="Map" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
        </>
    )
};