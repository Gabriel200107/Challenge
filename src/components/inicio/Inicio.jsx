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
    color: #4f65e0
}

.img-exercicio{
    margin-left: 10vh;
    width: 400px;
    height: 300px;
    border: solid 3px #4f65e081;
}

.img-meditacao{
    margin-right: 10vh;
    width: 400px;
    height: 300px;
    border: solid 3px #4f65e081;
}

.img-respiracao{
    margin-left: 10vh;
    width: 300px;
    height: 300px;
    border: solid 3px #4f65e081;
    
} 

`

export default function Inicio() {

   return (
      <DivInicio>

         <div id="slider">
            <Slideshow />
         </div>
         <div className="container-atividades">

            <div className="container-exercicio">
               <div>
                  <h1>Exercícios Físicos</h1>
                  <span id="span1">
                     Praticar atividades físicas ajuda no combate à ansiedade,
                     uma vez que leva o organismo a liberar substâncias responsáveis
                     por sensações de alegria e bem-estar.
                  </span> 

                  <span id="span2">
                     Além de trazer benefícios ao sistema circulatório, 
                     a prática de exercícios aumenta a produção e a liberação 
                     de neurotransmissores como a endorfina, serotonina e a noradrenalina.
                  </span>

                  <span id="span3">
                     Quando liberadas na circulação, essas substâncias 
                     agem diretamente no sistema nervoso central, gerando sensação de bem-estar, 
                     aliviando a depressão e normalizando os níveis de ansiedade.
                  </span>

                  <span>
                     Quer ver uma lista de exercícios físicos para te ajudar com a ansiedade?
                     <a href="#"> Clique aqui!</a>
                  </span>
               </div>
               <div>
                  <img className="img-exercicio" src={Exercicio} alt="" />
               </div>
            </div>

            <div className="container-meditacao">

               <div>
                <img className="img-meditacao" src={Meditacao} alt="" />
               </div>

               <div>
                  <h1>Técnicas de Meditação</h1>
                  <span id="span1">
                     Meditação é um hábito que traz inúmeros benefícios para o corpo e para a mente. 
                     A meditação para ansiedade, por exemplo, é muito eficaz. 
                  </span> 

                  <span id="span2">
                     Vale a pena incorporar essa prática no dia a dia para reduzir o estresse, 
                     regular o organismo, melhorar o foco e o humor, reforçar a autodisciplina e 
                     desfrutar da vida com mais plenitude.
                  </span>

                  <span id="span3">
                     A lista de benefícios da meditação para acalmar a ansiedade é abrangente e
                     validada pela ciência. Além dos benefícios pessoais, também contempla as 
                     pessoas com quem convivemos, já que nos tornamos melhores.
                  </span>
                  <span id="span4">
                     O autoconhecimento e a compreensão da realidade nos permitem pensar e reagir 
                     melhor aos acontecimentos. E, embora mais orientada para a melhora da ansiedade, 
                     traz os mesmos benefícios da meditação em geral. 
                  </span>

                  <span>
                     Quer ver uma lista de técnicas de meditação para te ajudar com a ansiedade?
                     <a href="#"> Clique aqui!</a>
                  </span>

               </div>
            </div>

            <div className="container-respiracao">
               <div>
                  <h1>Técnicas de Respiração</h1>
                  <span id="span1">
                     O ato de respirar pode parecer uma tarefa muito simples. 
                     Porém, muitas vezes não reparamos na forma como estamos respirando. 
                     Sabemos que o corpo naturalmente se encarrega de nos manter respirando e vivos.   
                  </span> 

                  <span id="span2">
                     No entanto, quando prestamos atenção na respiração e a trabalhamos de forma consciente e focada, 
                     podemos obter inúmeros benefícios. Ao dedicarmos tempo à isso, o ato de respirar produz prazer, 
                     alivia a ansiedade e nos deixa mais equilibrados.
                  </span>

                  <span>
                     Quer ver uma lista de técnicas de respiração para te ajudar com a ansiedade?
                     <a href="#"> Clique aqui!</a>
                  </span>
               </div>

               <div>
                  <img className="img-respiracao" src={Respiracao} alt="" />
               </div>

            </div>
         </div>
      </DivInicio>
   )
}