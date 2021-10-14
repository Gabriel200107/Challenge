import React from 'react'
import styled from 'styled-components';

const DivCadastro = styled.div`
margin: 0;
padding: 0;
font-family: sans-serif;
background: #34495e;
height: 20px;


h1 {
    color: white;
    text-transform: uppercase;
    font-weight: 500
}


`
const FormBox = styled.form `
width: 300;
padding: 40px;
position: absolute;
top: 50%;
left: 50%;
background: black;
transform: translate(-50%, -50%);

text-align: center;

input {
border: 0;
background: none;
display: block;
margin: 20px auto;
text-align: center;
border: 2px solid #3498db;
padding: 20px 40px;
width: 200px;
outline: none;
color: white;
transition: 0.25s;
border-radius: 10px;
}

input:focus {
    width: 150px;
}

`


export default function Cadastro() {

    return (
          <>
                <DivCadastro>
                    
                    <FormBox className='box' action="index.html" method="post">

                        <h1>Cadastro</h1>
                        <input type="text" name="" placeholder="Name *" />
                        <input type="email" name="" placeholder="E-mail *" />
                        <input type="email" name="" placeholder="E-mail de Recuperacao *" />
                        <input type="password" name="" placeholder="Senha *" />
                        <input type="password" name="" placeholder="Confirmar Senha *" />
                        <input type="date" name="" placeholder="Data de Nascimento *" />
                        <input type="text" name="" placeholder="Telefone"/>
                        <input type="submit" name="" value="Realizar Teste Ansiedade"/>
                        <input type="submit" name="" value="Cadastrar"/>
                    </FormBox>

                </DivCadastro>
          </>
    )
}