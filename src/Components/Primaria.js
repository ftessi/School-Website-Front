import './Primaria.css'
import primaria from './../img/primaria.jpg';
import Navbar from "./Navbar";

export default function Primaria() {
    return (
        <div className="Primaria ">
            <Navbar></Navbar>
            <div className="Info-Inicial container fluid">
                <div className="col">
                    <div className="row justify-content-around align-items-center">
                        <div className="col-lg-5">
                            <h1>En la educación inicial lo mas importante son los primeros pasos</h1>
                            <h4> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </h4>
                        </div>
                        <div className="col-image col-lg-5 align" >
                            <img src={primaria} alt="Imágen Jardín"></img>
                        </div>
                    </div>

                    <div className="row">
                        <h1 className="banner">-------------------------------------------------</h1>
                        <h1 className="banner">Special Banner WIth Info and Links</h1>
                        <h1 className="banner">-------------------------------------------------</h1>
                    </div>

                    <div className="second-row row justify-content-around align-items-center">
                        <div className="col-lg-5">
                            <h1>En la educación inicial lo mas importante son los primeros pasos</h1>
                            <h4> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </h4>
                        </div>
                        <div className="col-image col-lg-5 align" >
                            <img src={primaria} alt="Imágen Jardín"></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}