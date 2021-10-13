import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './Slideshow.css';



export default function Slideshow() {
  return (
    <div className="slide-container">
      <Slide>
        <div className="each-slide">
          <div>
            <p className="relatos-slider">
              <h3>Relato 1</h3>
              <h4>Viviane Araujo, 31 anos</h4>
               Convivi com isso por cinco anos, o que me impediu de trabalhar, sair sozinha e dirigir. Comecei a me informar sobre o assunto e procurei um psiquiatra. Hoje sei que tenho transtorno de pânico e, por meio de medicação e terapia adequadas, já me sinto muito mais segura e levando uma vida praticamente normal.
            </p>
          </div>
        </div>
        <div className="each-slide">
          <div>
            <p className="relatos-slider">
            <h3>Relato 2</h3>
              <h4> Michele Melão, 32 anos</h4>
                 Você não deixa de ser ansiosa de uma hora para a outra, mas você consegue lidar com mais tranquilidade com as coisas, focar mais, e lidar com mais naturalidade com as coisas que acontecem.
            </p>
          </div>
        </div>
        <div className="each-slide">
          <div>
            <p className="relatos-slider">
            <h3>Relato 3</h3>
             <h4>CLARA BAUÉB, 27 anos</h4>
             Tento desviar o foco e pensar positivo, porque quando a crise vem você fica desesperada. Também uso algumas técnicas de respiração e faço alguns dos exercicios que me passam e ajuda bastante a controlar minha ansiedade.
            </p>
          </div>
        </div>
      </Slide>
    </div>
  )
}