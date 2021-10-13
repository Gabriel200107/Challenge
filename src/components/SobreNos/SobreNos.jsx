import React from "react"
import styled from 'styled-components';


const DivSobre = styled.div`
      display: flex;
      flex-direction: row;
      justify-content: center;
      padding-top: 20vh;
      padding-bottom: 30vh;
 .empresa{
    width: 100%;
    overflow: hidden;
    font-size: 20px;
    padding: 8px 0;
    margin: 8px 0;
    
 }
   
`
export default function SobreNos() {

   return (
      <DivSobre>

                <div>
                    <h1 classname="empresa">A ZeniTI</h1>
                    <h2 className="logo">SOMOS UMA EMPRESA QUE COMBATE A ANSIEDADE</h2>
                    <h2 className="quemsomos"><p>Temos em nosso DNA muito mais do que criatividade. Desde o inicio, em 2021, é predominante nossa cultura empresarial
                        e a valorização das pessoas como essências em todas as nossas relações.</p>
                    <p>Atualmente, a paixão em ajudar as pessoas que possuem ansiedade vem aumentando cada dia mais, é o que nos move.
                        Trabalhamos para que os nossos clientes consigam cada vez melhores resultados e que possam viver experiencias que os ajudam cada 
                        dia mais a se sentir melhor.
                    </p>
                    </h2> terminei
                <h1 classname="val">Valores</h1>
                <h2 className="topicos">
                    <p><ul>Franqueza</ul></p>
                    <p><ul>Meritocracia</ul></p>
                    <p><ul>Paixão pelas pessoas</ul></p>
                    <p><ul>Verdade</ul></p>
                    <p><ul>Excelência</ul></p>

                    </h2>
                    <h1 className="mis">Nossa Missão</h1>
                <h2 className="miss">Encurtar distâncias na busca de melhores condições de saúde e bem estar.</h2>
                <h1 className="vis">Nossa Visão</h1>
                <h2 className="visa">Ser a melhor solução digital em psicologia no Brasil, promovendo uma experiência surpreendente aos usuários.</h2>
                <h1>ATENÇÃO</h1>
                <h2>Este site não oferece tratamento ou aconselhamento imediato para pessoas em crise suicida. Em caso de crise, ligue para 188 (CVV) 
                    ou acesse o site www.cvv.org.br. Em caso de emergência, procure atendimento em um hospital mais próximo.</h2>
        </div>               
      </DivSobre>
      
   )
}