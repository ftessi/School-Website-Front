import './Slider.css'

export default function Slider() {

  return (

    <div id="CarouselSlider" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#CarouselSlider" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#CarouselSlider" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#CarouselSlider" data-bs-slide-to="2" aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#CarouselSlider" data-bs-slide-to="3" aria-label="Slide 4"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active" id="slide1" data-bs-interval="7500">
          <div class="slide-text">
            <h1>Porque la educación es lo primero, desde que arrancamos en 1996</h1>
            <h3>En nuestro colegio, nuestro principal objetivo es que los niños puedan tener las mejores oportunidades</h3>
          </div>
        </div>
        <div class="carousel-item" data-bs-interval="7500"  id="slide2">
          <div class="slide-text">
            <h1>Desde pequeños inculcando el desarrollo, respeto, y honestidad</h1>
            <h3>Tenemos las mejores maestras que día a día dejan todo para hacer de nuestros alumnos unas mejores personas</h3>
          </div>
        </div>
        <div class="carousel-item" data-bs-interval="7500" id="slide3">
          <div class="slide-text">
            <h1>Un espacio en donde todos puedan sentirse seguros, contenidos, y apoyados</h1>
            <h3>Para que nuestros alumnos desarrollen su confianza y puedan lograr todo lo que se propongan</h3>
          </div>
        </div>
        <div class="carousel-item" data-bs-interval="7500" id="slide4">
          <div class="slide-text">
            <h1>Donde todos tienen voz, y siempre hay un oído atento</h1>
            <h3>Sabemos lo difícil que es salir adelante en las adversidades, por eso aceptamos acompañantes educacionales en las aulas para quienes lo necesiten</h3>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#CarouselSlider" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#CarouselSlider" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  )
}
