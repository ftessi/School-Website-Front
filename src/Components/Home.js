import React, { Fragment } from "react";
import Navbar from "./Navbar";
import Slider from "./Slider";
import Students from "./Educacion"
import News from "./News"
import Calendar from "./Calendar"
import Footer from "./Footer"
import './Home.css'




function Home() {


    // Funcion para animar el logo del home, agarra el classname y le cambia los parametros, 
    // junto con una transición pa que sea mas lindo

        function AnimateLogo() {
            const logoElement = document.querySelector(".Logo")
            if (this.scrollY !== 0) {
                logoElement.style.top = '0';
                logoElement.style.width = '10vh';

            }
            else {
                logoElement.style.width = '30vmin';
                logoElement.style.top = '20vh';
            }
        }
        window.addEventListener("scroll", AnimateLogo);


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