import React from "react"
import logo from '../img/logo.png';
import styled from 'styled-components';




const DivSobre = styled.div`


h1 {
    color: #363636;
    font-weight: 700;
    margin-bottom: 15px;
    font-size: 25px;
   text-align: justify;
   max-width: 94%;
   text-align: center
   
}

h2{
    color: #363636;
    font-weight: 500;
    margin-bottom: 15px;
    font-size: 20px;
   text-align: justify;
   max-width: 94%;
   text-align: center

}
.img-logo{
   width: 25vw;
   height:25vh;
   overflow: hidden;
   transition all 0.3s;
}
.img-logo:hover {
   -moz-transform: scale(1.1);
   -webkit-transform: scale(1.1);
   transform: scale(1.1);
}


.img{
    padding-left: 34vw;
}



`
export default function SobreNos() {

    return (
        <DivSobre>

            <div>
                <div className="img">
                    <img className="img-logo" src={logo} alt="" />
                </div>
                <h1 className="logo"><p>SOMOS UMA EMPRESA QUE COMBATE A ANSIEDADE</p></h1>
                <h2 className="quemsomos"><p>Temos em nosso DNA muito mais do que criatividade. Desde o inicio, em 2021, é predominante nossa cultura empresarial
                    e a valorização das pessoas como essências em todas as nossas relações.</p>
                    <p>Atualmente, a paixão em ajudar as pessoas que possuem ansiedade vem aumentando cada dia mais, é o que nos move.
                        Trabalhamos para que os nossos clientes consigam cada vez melhores resultados e que possam viver experiencias que os ajudam cada
                        dia mais a se sentir melhor.
                    </p>
                </h2>
                <h1 classname="val">Valores</h1>
                <h2 className="topicos">
                    <p><li>Franqueza</li></p>
                    <p><li>Meritocracia</li></p>
                    <p><li>Paixão pelas pessoas</li></p>
                    <p><li>Verdade</li></p>
                    <p><li>Excelência</li></p>

                </h2>
                <h1 className="mis">Nossa Missão</h1>
                <h2 className="miss">Encurtar distâncias na busca de melhores condições de saúde e bem estar.</h2>
                <h1 className="vis">Nossa Visão</h1>
                <h2 className="visa">Ser a melhor solução digital em psicologia no Brasil, promovendo uma experiência surpreendente aos usuários.</h2>
                <h1>ATENÇÃO</h1>
                <h2>Este site não oferece tratamento ou aconselhamento imediato para pessoas em crise suicida. Em caso de crise, ligue para 188 (CVV)
                    ou acesse o site <a href="#">www.cvv.org.br.</a> Em caso de emergência, procure atendimento em um hospital mais próximo.</h2>
            </div>
            <div className='tecnica'>

                </div>
        </DivSobre>

    )
}