import React, { Fragment } from "react";
import Navbar from "./Navbar";
import Slider from "./Slider";
import Students from "./Educacion"
import News from "./Publicaciones/News"
import Calendar from "./Calendar"
import Footer from "./Footer"
import './Home.css'




function Home() {


        return (
            <>
            <Navbar />
            <div className="Home">
                
                <Slider />
                <Students />
                <News />
                <Calendar />
                
            </div>
            <Footer />
            </>
        );
    }
    export default Home;