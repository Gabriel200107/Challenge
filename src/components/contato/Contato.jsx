import React from 'react'
import styled from 'styled-components'
import icoTel from '../img/tel.png'
import icoMail from '../img/mail.png'

export default function Contato() {

        const DivContato = styled.div`
 
 
 
        

    `
        return (

                <DivContato>

                <div>
                        <h4>Entre em contato conosco</h4>
                        <div className="contato">
                                <img className="icon-css" src={icoTel} alt="Telefone" />
                                <p>(11)9 8765-8956</p>
                        </div>
                        <div className="email">
                                <img className="icon-css" src={icoMail} alt="Carta" />
                                <p>ZenTI@gmail.com</p>
                        </div>
                </div>

                        <form className='box' action="index.html" method="post">
                                <h1>Contato</h1>
                                <input type="text" name="" placeholder="Nome *" />
                                <input type="email" name="" placeholder="E-mail *" />
                                <input type="text" name="" placeholder="Assunto" />
                                <input type="text" name="" placeholder="Sua mensagem*" />
                                <input type="submit" name="" value="Enviar" />
                        </form>



                </DivContato>




        )
}