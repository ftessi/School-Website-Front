import './News.css'
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import foto1 from "../../img/arbolV.jpg";


export default function News() {

  const [news, setNews] = useState([])


  const getNews = async () => {
    try {
      const response = await fetch("http://localhost:5000/novedades")
      const jsonData = await response.json()

      setNews(jsonData)
    } catch (error) {
      console.error(error.message)
    }
  }

  useEffect(() => {
    getNews();
  }, []);

  return (
    <>
      <div className='News container-fluid' id="Publicaciones">
        <a className='News-Anchor' id='Publicaciones' href="none">Anchor</a>
        <div className='News-Headers'>
          <h1 className="display-2">ÚLTIMAS PUBLICACIONES</h1>
          <h4 className='display-5'> Seleccioná una noticia para ver mas información.</h4>
        </div>
        <div className='Publications-Container'>
          {news.map(news => (
            <div className="Publication">
              <Button href="" className="Publication-Button">
                <img className="Publication-Image" src={foto1} alt="Card cap"></img>
                <div className="Publication-Body">
                  <h4 className="Publication-Title">{news.titulo}</h4>
                  <h6 className="Publication-Description">{news.descripcion} Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five</h6>
                </div>
              </Button>
            </div>
          ))}
        </div>
        <div className='row justify-content-center'>
        <Button className='Publication-ViewAll col-10' href="/Publicaciones" >Ver todas las publicaciones</Button>
        </div>
      </div>
    </>
  )
};