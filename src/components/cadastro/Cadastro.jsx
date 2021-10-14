import React from 'react'
import styled from 'styled-components';

const DivCadastro = styled.div
`
margin: 0;
padding: 0;
font-family: sans-serif;

h1 {
    color: black;
    text-transform: uppercase;
    font-weight: 500;
    margin-bottom: 15px;

}


`
const FormBox = styled.form `
width: 70vh;
height: 60vh;
padding: 40px;
position: absolute;
top: 50%;
left: 50%;
border-radius: 10px;
transform: translate(-50%, -50%);
background-color: white;

text-align: center;


input::placeholder {
}

input {
border: 0;
background: none;
display: block;
margin: 20px auto;
text-align: center;
border: 1.5px solid #011329;
padding: 2.5vh 3vh;
width: 25vh;
outline: none;
transition: 0.25s;
border-radius: 10px;
}

.submit {
    cursor: pointer;
    border: none;
    font-size: 2vh;

}

.submit:hover {
    border-bottom: solid 5px #3d9db3;
}

.campos {
    display:flex;
    flex-direction: row;
}


input:focus {
    width: 26vh;
}

`

export default function Cadastro() {

    return (
          <>
                <DivCadastro>
                    
                    <FormBox className='box' action="index.html" method="post">

                        <h1>Cadastro</h1>
                        <div className="campos">
                            <input type="text" name="" placeholder="Name *" />
                            <input type="email" name="" placeholder="E-mail *" />
                        </div>

                        <div className="campos" >
                            <input type="email" name="" placeholder="E-mail de Recuperacao *" />
                            <input type="password" name="" placeholder="Senha *" />
                        </div>
                        
                        <div className="campos">
                            <input type="password" name="" placeholder="Confirmar Senha *" />
                            <input type="date" name="" placeholder="Data de Nascimento *" />
                        </div>
                       
                       
                        <input type="text" name="" placeholder="Telefone"/>
                        <div className="campos">
                            <input className="submit" type="submit" name="" value="Teste de Ansiedade"/>
                            <input className="submit" type="submit" name="" value="Cadastrar"/>
                        </div>
                        
                    </FormBox>

                </DivCadastro>
          </>
    )
}