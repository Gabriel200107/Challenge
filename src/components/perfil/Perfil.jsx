import React from 'react'
import styled from 'styled-components'
import FotoPerfil from '../img/perfil.png'
import { FaClipboardList as FCL , FaRegCalendarAlt as FRCA, FaEdit as FE} from 'react-icons/fa'

export default function Perfil() {

    /*const inputFoto = document.getElementById('inputFoto');
    const imgFoto = document.getElementById('file-name');
    
    inputFoto.addEventListener('change', () => {
        imgFoto.textContent = this.value;
    });*/

    /*var $input = document.getElementById('inputFoto'),
    $fileName = document.getElementById('file-name');

    $input.addEventListener('change', function(){
    $fileName.textContent = this.value;
    });*/



    const estiloIcone = { fontSize: "5em" }

    const DivPerfil = styled.div`
    
    padding-top: 5vh;
    padding-bottom: 30vh;
 
    .box1 {
    display: flex;
    flex-direction: row;
    background-color: #ffffff;
    height: 45vh;
    margin: 1vw;
    padding-left: 14vw;
    font-size: 15px;
    border-radius: 2vw;
    border: solid 0.1vw black;
    }

    .img1 {
    margin-top: 8vh;
    margin-left: 5vw;
    margin-bottom: 3vh;
    width: 8vw;
    height: 17vh;
    border-radius: 20vh;
    }

    .corletra{
        padding-top: 10px;
        font-size: 14px;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        }

    input[type='file'] {
        display: none;
        }

    .lbFoto {
        background-color: #3498db;
        border-radius: 5px;
        color: #fff;
        cursor: pointer;
        margin: 10px;
        padding: 6px 20px
        }
    
        .divDados{
            margin: 2vh 0 0 4vw;
            font-size: 17px;
        }

        .divDado{
            margin-bottom: 2vh;
        }
    
        .divAtividade{
            margin: 12.5vh 0 0 4vw;
            font-size: 17px;
        }

        .btnAtividade{
            margin-left: 7vw;
        }

        .lbAtividade p{
            margin-top: 3vh;
            background-color: #3498db;
            border-radius: 5px;
            color: #fff;
            cursor: pointer;
            padding: 6px 20px
        }

        .divAgenda{
            margin: 12.5vh 0 0 4vw;
            font-size: 17px;
        }

        .btnAgenda{
            margin-left: 5vw;
        }

        .lbAgenda p{
            margin-top: 3vh;
            background-color: #3498db;
            border-radius: 5px;
            color: #fff;
            cursor: pointer;
            padding: 6px 20px
        }

        .titulo{
            margin-left: 1vw;
        }
        .dado{
            margin-left: 2.25vw;
        }

    `

    return (
        
    

        <DivPerfil>

            <div className="box1">
                <div className="divFoto">
                    <figure>
                        <img className="img1" src={FotoPerfil}alt=""/>
                    </figure>
                    
                    <input className="inputFoto" type="file" name="inputFoto" id="inputFoto"/>
                    <label className="lbFoto"for="inputFoto">Selecionar uma foto de perfil</label>        
                </div>

                <div className="divDados">
                    <div className="divDado">
                        <p>
                            <button>
                                <FE/>
                            </button>
                            <span className="titulo">Nome:</span>
                        </p>
                        <p className="dado">Nome do Usuário</p>
                    </div>
            
                    <div className="divDado">
                        <p>
                            <button>
                                <FE/>
                            </button>
                            <span className="titulo">Data de Nascimento:</span>
                        </p>
                        <p className="dado">DD/MM/AAAA</p>
                    </div>

                    <div className="divDado">
                        <p>
                            <button>
                                <FE/>
                            </button>
                            <span className="titulo">Telefone:</span>
                        </p>
                        <p className="dado">XX-XXXXX-XXXX</p>
                    </div>

                    <div className="divDado">
                        <p>
                            <button>
                                <FE/>
                            </button>
                            <span className="titulo">E-mail:</span>
                        </p>
                        <p className="dado">you@youremail.com</p>
                    </div>

                    <div className="divDado">
                        <p>
                            <button>
                                <FE/>
                            </button>
                            <span className="titulo">Senha:</span>
                        </p>
                        <p className="dado">**********</p>
                    </div>
                   
                </div>

                <div className="divAtividade">

                    <button type="button" className="btnAtividade" id="btnAtividade">
                        <FCL className="iconTarefa" style={estiloIcone}/>
                    </button>

                    <label className="lbAtividade" for="btnAtividade"><p>Acesse sua lista de atividades</p></label>

                </div>

                <div className="divAgenda">

                    <button type="button" className="btnAgenda" id="btnAgenda">
                        <FRCA className="iconTarefa" style={estiloIcone}/>
                    </button>

                    <label className="lbAgenda" for="btnAgenda"><p>Agende suas atividades</p></label>

                </div>

            </div>
            
        </DivPerfil>

        
)}