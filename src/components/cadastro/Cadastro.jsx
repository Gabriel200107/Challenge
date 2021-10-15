import React from 'react'
import styled from 'styled-components';

const DivCadastro = styled.div`
margin: 0;
padding: 0;
font-family: sans-serif;


h1 {
    color: #87CEFA;
    text-shadow: 1px 1px 2px black, 0 0 25px blue, 0 0 5px black;
    font-size: 5vh;
    font-weight: 500;
    text-shadow: 2px 2px;
}

hr {
    margin-bottom: 25px;
    margin-top: 3px;
    margin: 10px 0;
    height: 2px;
    background-image: linear-gradient(to right, transparent, #3d9db3, transparent);
}

`
const FormBox = styled.form `
background-color: white;
border-radius: 15px;
width: 70vh;
height: 60vh;
padding: 40px;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
text-align: center;




input::placeholder {
    font-size: 22px;
    color: grey;
}

input {
border: 0;
display: block;
margin: 20px auto;
text-align: center;
border: 1.5px solid black;
padding: 2.5vh 3vh;
width: 25vh;
outline: none;
transition: 0.25s;
border-radius: 10px;
background: none;
}


.submit {
    cursor: pointer;
    border: none;
    font-size: 2vh;
    background: none;

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

                        <h1>Cadastre-se</h1>
                        <hr/>
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