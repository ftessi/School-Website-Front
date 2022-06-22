import './News.css'
import Button from '@mui/material/IconButton';

export default function News() {



    return (
        <>
            <div className='News' id="Publicaciones">
                <div className='News-Header'>PUBLICACIONES</div>
                <p className="Intro-Text"> Seleccioná la publicación para ver todo su contenido.</p>

                <div className='Publications-Container'>
                    <Button href="#" className="Publication-Small">
                        <img className="Publication-Image-Small" src="https://conectasoftware.com/wp-content/uploads/2020/03/icono-postgre-sql.png" alt="Card  cap"></img>
                        <div className="Publication-Body-Small">
                            <h5 className="Publication-Title-Small">Juramento a la bandera 2022</h5>
                            <p className="Publication-Description-Small">Es el momento de los alumnos de 4to año de hacer el juramento a la bandera y dedicarse a ser personas de las cuales el pueblo argentino se encuentre orgulloso de ser parte[...] </p>
                        </div>
                    </Button>
                    <Button href="#" className="Publication-Small">
                        <img className="Publication-Image-Small" src="https://conectasoftware.com/wp-content/uploads/2020/03/icono-postgre-sql.png" alt="Card  cap"></img>
                        <div className="Publication-Body-Small">
                            <h5 className="Publication-Title-Small">Juramento a la bandera 2022</h5>
                            <p className="Publication-Description-Small">Es el momento de los alumnos de 4to año de hacer el juramento a la bandera y dedicarse a ser personas de las cuales el pueblo argentino se encuentre orgulloso de ser parte[...] </p>
                        </div>
                    </Button>
                    <Button href="#" className="Publication-Small">
                        <img className="Publication-Image-Small" src="https://conectasoftware.com/wp-content/uploads/2020/03/icono-postgre-sql.png" alt="Card  cap"></img>
                        <div className="Publication-Body-Small">
                            <h5 className="Publication-Title-Small">Juramento a la bandera 2022</h5>
                            <p className="Publication-Description-Small">Es el momento de los alumnos de 4to año de hacer el juramento a la bandera y dedicarse a ser personas de las cuales el pueblo argentino se encuentre orgulloso de ser parte[...] </p>
                        </div>
                    </Button>
                    <Button href="#" className="Publication-Small">
                        <img className="Publication-Image-Small" src="https://conectasoftware.com/wp-content/uploads/2020/03/icono-postgre-sql.png" alt="Card  cap"></img>
                        <div className="Publication-Body-Small">
                            <h5 className="Publication-Title-Small">Juramento a la bandera 2022</h5>
                            <p className="Publication-Description-Small">Es el momento de los alumnos de 4to año de hacer el juramento a la bandera y dedicarse a ser personas de las cuales el pueblo argentino se encuentre orgulloso de ser parte[...] </p>
                        </div>
                    </Button>
                    <Button href="#" className="Publication-Small">
                        <img className="Publication-Image-Small" src="https://conectasoftware.com/wp-content/uploads/2020/03/icono-postgre-sql.png" alt="Card  cap"></img>
                        <div className="Publication-Body-Small">
                            <h5 className="Publication-Title-Small">Juramento a la bandera 2022</h5>
                            <p className="Publication-Description-Small">Es el momento de los alumnos de 4to año de hacer el juramento a la bandera y dedicarse a ser personas de las cuales el pueblo argentino se encuentre orgulloso de ser parte[...] </p>
                        </div>
                    </Button>
                
                <Button className='Publication-ViewAll'>Ver Todas</Button>
                </div>
            </div>
        </>
    )
};