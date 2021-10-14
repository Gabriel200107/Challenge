import React from 'react'
import styled from 'styled-components'
import icoTel from '../img/tel.png'
import icoMail from '../img/mail.png'

export default function Contato() {

        const DivContato = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: center;
        padding-top: 25vh;
        font-family: sans-serif;

        .contato{
                padding-right: 15vw;

        }
        .formulario{
                padding-bottom: 2vh;
        }
        .formulario2{
                padding-bottom: 2vh;
                padding-left: 2vw;
        }

        input{
        width: 17vw;
        height: 0.2vh;
        border: 0;
        background: none;
        display: block;
        text-align: center;
        border: 2px solid white;
        padding: 20px 40px;
        outline: none;
        color: white;
        transition: 0.25s;
        border-radius: 10px;         
        }
        input:focus {
        width: 16vw;
        }

        input::placeholder {
        color:white;
        }

        .numero{
                display: flex;
                color: white;

        }
        .submit {
                cursor: pointer;
                border-radius: 4vh;
                width: 8vw;
                margin-left: 12vh;
                
        }


        .email{
                display: flex;
                color: white;
        }
        .icon-css{
                padding-right: 1vw;
                width: 50px;
                padding-bottom: 2vh;
        }
        h1{
                padding-bottom: 3vh;
                color: white;
        }

`
        return (

                <DivContato>

                        <div className="contato">
                                <h1 >Entre em contato conosco</h1>
                                <div className="numero">
                                        <img className="icon-css" src={icoTel} alt="Telefone" />
                                        <p>(11)9 8765-8956</p>
                                </div>
                                <div className="email">
                                        <img className="icon-css" src={icoMail} alt="Carta" />
                                        <p>zeniTI@gmail.com</p>
                                </div>
                        </div>
                        <div className="">

                                <form className='box' action="index.html" method="post">
                                        <h1>Como podemos ajudar ?</h1>
                                        <div className="formulario">
                                                <input type="text" name="" placeholder="Nome *" />
                                        </div>
                                        <div className="formulario">
                                                <input type="email" name="" placeholder="E-mail *" />
                                        </div>
                                        <div className="formulario">
                                                <input type="text" name="" placeholder="Assunto" />
                                        </div>
                                        <div className="formulario">
                                                <input type="text" name="" placeholder="Sua mensagem*" />
                                        </div>
                                        <div>
                                                <input className="submit" type="submit" name="" value="Enviar" />
                                        </div>

                                </form>
                        </div>



                </DivContato>




        )
}