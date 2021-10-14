import React from 'react'
import styled from 'styled-components';
import Slideshow from '../slideshow/Slideshow'
import Exercicio from '../img/exercicio.png'
import Meditacao from '../img/meditacao.png'
import Respiracao from '../img/respiracao.png'




const DivInicio = styled.div`
   
    max-width: 100%;
    width: 100%;

.container-atividades{
    font-size: 20px;
    text-align: justify;
    max-width: 94%;
}

.container-exercicio{
    margin-top: 10vh;
    width: 200vh;
    margin-left: 10vh;
    display: flex;
    flex-direction: row;
    max-width: 94%;
}

.container-meditacao{
    margin-left: 10vh;
    margin-top: 10vh;
    width: 200vh;
    display: flex;
    flex-direction: row;
    max-width: 94%;
}

.container-respiracao{
    margin-top: 10vh;
    width: 200vh;
    margin-left: 10vh;
    display: flex;
    flex-direction: row;
    max-width: 94%;
}

span{
    display: block;
    letter-spacing: 0.5px
}

h1 {
    padding: 20px;
    color: white
}

.img-exercicio{
    margin-left: 10vh;
    width: 400px;
    height: 300px;
    border: solid 3px white;
}

.img-meditacao{
    margin-right: 10vh;
    width: 400px;
    height: 300px;
    border: solid 3px white;
}

.img-respiracao{
    margin-left: 10vh;
    width: 300px;
    height: 300px;
    border: solid 3px white;
    margin-bottom: 15vh;
    
} 

`

export default function Inicio() {

   return (
      <DivInicio>

         <div id="slider">
            <Slideshow />
         </div>       
      </DivInicio>
   )
}