import './AllPublicaciones.css'
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import foto1 from "../../img/arbolV.jpg";
import  Header  from "./Header";
import Navbar from "../Navbar"; 
import Posts from "./Posts"
import axios from "axios";
import { useLocation } from "react-router";

export default function News() {

  const [news, setNews] = useState([])

  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts" + search);
      setPosts(res.data);
    };
    fetchPosts();
    }, [search]);


  const getNews = async () => {
    try {
      const response = await fetch("http://localhost:5000/publicaciones")
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
      <Navbar/>
      <div className="home">
        <Posts posts={posts} />
      </div>
      <div className='News container-fluid' id="Publicaciones">
        <a className='News-Anchor' id='Publicaciones' href="none">Anchor</a>
        <Header/>
        <div className='Publications-Container row'>
          {news.map(news => (
            <div className='Hello col-lg-2 gy-4'>
            <div className="Publication-1 ">
              <Button href="" className="Publication-Button">
                <img className="Publication-Image" src={foto1} alt="Card cap"></img>
                <div className="Publication-Body">
                  <h4 className="Publication-Title">{news.titulo}</h4>
                  <h6 className="Publication-Description">{news.descripcion} Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five</h6>
                </div>
              </Button>
            </div>
            </div> 
          ))}
        </div>
        <div className='row justify-content-center'>
        </div>
      </div>
    </>
  )
};