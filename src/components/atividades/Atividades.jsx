import React from 'react'
import styled from 'styled-components';
import Exercicio from '../img/exercicio.png'
import Meditacao from '../img/meditacao.png'
import Respiracao from '../img/respiracao.png'

const DivAtividades = styled.div`
   
   max-width: 100%;
   width: 100%;

.container-atividades{
   font-size: 20px;
   text-align: justify;
   max-width: 94%;
   color: #363636;
}

.container-exercicio{
   margin-top: 10vh;
   width: 200vh;
   margin-left: 10vh;
   display: flex;
   flex-direction: row;
   max-width: 94%;
   color: #363636;
}

.container-meditacao{
   margin-left: 10vh;
   margin-top: 10vh;
   width: 200vh;
   display: flex;
   flex-direction: row;
   max-width: 94%;
   color: #363636;
}

.container-respiracao{
   margin-top: 10vh;
   width: 200vh;
   margin-left: 10vh;
   display: flex;
   flex-direction: row;
   max-width: 94%;
   color: #363636;
}

span{
   display: block;
   letter-spacing: 0.5px
   color: #363636; 
}

h1 {
   padding: 20px;
   color: white;
}

.img-exercicio{
   margin-left: 10vh;
   width: 400px;
   height: 300px;
   border: solid 3px white;
   overflow: hidden;
   -moz-transition: all 0.3s;
   -webkit-transition: all 0.3s;
   transition all 0.3s;
}

.img-exercicio:hover {
   -moz-transform: scale(1.1);
   -webkit-transform: scale(1.1);
   transform: scale(1.1);
}

.img-meditacao{
   margin-right: 10vh;
   width: 400px;
   height: 300px;
   border: solid 3px white;
   transition all 0.3s;
}

.img-meditacao:hover {
   -moz-transform: scale(1.1);
   -webkit-transform: scale(1.1);
   transform: scale(1.1);
}

.img-respiracao{
   margin-left: 10vh;
   width: 300px;
   height: 300px;
   border: solid 3px white;
   margin-bottom: 15vh;  
   transition all 0.3s;
} 
.img-respiracao:hover {
   -moz-transform: scale(1.1);
   -webkit-transform: scale(1.1);
   transform: scale(1.1);
}

`
export default function Atividades() {

   return (
      <DivAtividades>

         <div className="container-atividades">

            <div className="container-exercicio">
               <div>
                  <h1>Exerc??cios F??sicos</h1>
                  <span id="span1">
                     Praticar atividades f??sicas ajuda no combate ?? ansiedade,
                     uma vez que leva o organismo a liberar subst??ncias respons??veis
                     por sensa????es de alegria e bem-estar.
                  </span>

                  <span id="span2">
                     Al??m de trazer benef??cios ao sistema circulat??rio,
                     a pr??tica de exerc??cios aumenta a produ????o e a libera????o
                     de neurotransmissores como a endorfina, serotonina e a noradrenalina.
                  </span>

                  <span id="span3">
                     Quando liberadas na circula????o, essas subst??ncias
                     agem diretamente no sistema nervoso central, gerando sensa????o de bem-estar,
                     aliviando a depress??o e normalizando os n??veis de ansiedade.
                  </span>

                  <span>
                     Quer ver uma lista de exerc??cios f??sicos para te ajudar com a ansiedade?
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
                  <h1>T??cnicas de Medita????o</h1>
                  <span id="span1">
                     Medita????o ?? um h??bito que traz in??meros benef??cios para o corpo e para a mente.
                     A medita????o para ansiedade, por exemplo, ?? muito eficaz.
                  </span>

                  <span id="span2">
                     Vale a pena incorporar essa pr??tica no dia a dia para reduzir o estresse,
                     regular o organismo, melhorar o foco e o humor, refor??ar a autodisciplina e
                     desfrutar da vida com mais plenitude.
                  </span>

                  <span id="span3">
                     A lista de benef??cios da medita????o para acalmar a ansiedade ?? abrangente e
                     validada pela ci??ncia. Al??m dos benef??cios pessoais, tamb??m contempla as
                     pessoas com quem convivemos, j?? que nos tornamos melhores.
                  </span>
                  <span id="span4">
                     O autoconhecimento e a compreens??o da realidade nos permitem pensar e reagir
                     melhor aos acontecimentos. E, embora mais orientada para a melhora da ansiedade,
                     traz os mesmos benef??cios da medita????o em geral.
                  </span>

                  <span>
                     Quer ver uma lista de t??cnicas de medita????o para te ajudar com a ansiedade?
                     <a href="#"> Clique aqui!</a>
                  </span>

               </div>
            </div>

            <div className="container-respiracao">
               <div>
                  <h1>T??cnicas de Respira????o</h1>
                  <span id="span1">
                     O ato de respirar pode parecer uma tarefa muito simples.
                     Por??m, muitas vezes n??o reparamos na forma como estamos respirando.
                     Sabemos que o corpo naturalmente se encarrega de nos manter respirando e vivos.
                  </span>

                  <span id="span2">
                     No entanto, quando prestamos aten????o na respira????o e a trabalhamos de forma consciente e focada,
                     podemos obter in??meros benef??cios. Ao dedicarmos tempo ?? isso, o ato de respirar produz prazer,
                     alivia a ansiedade e nos deixa mais equilibrados.
                  </span>

                  <span>
                     Quer ver uma lista de t??cnicas de respira????o para te ajudar com a ansiedade?
                     <a href="#"> Clique aqui!</a>
                  </span>
               </div>

               <div>
                  <img className="img-respiracao" src={Respiracao} alt="" />
               </div>

            </div>
         </div>

      </DivAtividades>
   )
}