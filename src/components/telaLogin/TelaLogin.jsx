import React from 'react'
import styled from 'styled-components'

export default function TelaLogin() {

    const DivLogin = styled.div
    `
    h1 {
        float: left;
        font-size: 35px;
        border-bottom: 6px solid #483D8B ;
        margin-bottom: 25px;
        padding: 5px;
        color: white;
    }
    .textbox {
        width: 100%;
        overflow: hidden;
        font-size: 20px;
        padding: 8px 0;
        margin: 8px 0;
        border-bottom: 1px solid #483D8B;
    }

    .textbox input {
        border: none;
        outline: none;
        background: none;
        color: white;
        font-size: 18px;
        width: 80%;
        float: left;
        margin: 10px;
    }

    .btnLogin {
        width: 100%;
        background: none;
        border: 2px solid #483D8B;
        color: white;
        padding: 3px;
        font-size: 13px;
        cursor: pointer;
        margin-top: 12px;
    }

    margin:0;
    padding:0;
    font-family: sans-serif;
    color: white;
    width: 200px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    `
    return (
        
        <DivLogin className="login-box">

            <h1>Login</h1>

            <form method="GET" action="#">
                 <div className="textbox">
                    <input type="text" placeholder="Usuário" name="txtUser"/>
                </div>
        
                <div className="textbox">
                    <input type="text" placeholder="Senha" name="txtSenha"/>
                </div>

                <button className="btnLogin" type="submit">Logar</button>
            </form>
            
        </DivLogin>
  
    )
}
