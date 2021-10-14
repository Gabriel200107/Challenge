import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import styled from 'styled-components';
import Inicio from '../inicio/Inicio';
import Atividades from '../atividades/Atividades';
import Perfil from '../perfil/Perfil';
import SobreNos from '../SobreNos/SobreNos';
import Cadastro from '../cadastro/Cadastro';
import Contato from '../contato/Contato';



const DivMenu = styled.div`

background-color: white;
color: #011329;
text-decoration: none;
padding: 20px;
box-shadow: 20px 2px 2px #00000033;




.menu:hover {
    border-bottom: solid 2px #3d9db3;
}




.menu {
    color: black;
    margin-left: 5vh;
    text-decoration: none;
    font-size: 2vh;

}


`
export default () => {
    return (
            
        <>
        
        <DivMenu>  
                    <Link className="menu"   to='/inicio'>Inicio</Link>
                    <Link className="menu"   to='/atividades'>Atividades</Link>
                    <Link className="menu"   to='/cadastro'>Cadastro</Link>
                    <Link className="menu"   to='/contato'>Contato</Link>
                    <Link className="menu"   to='/sobreNos'>Sobre Nós</Link>
                    <Link className="menu"   to='/perfil'>Perfil</Link>

        </DivMenu>
                <Switch className="menu">
                    <Route exact path="/" component={Inicio}/>
                    <Route path="/inicio" component={Inicio}/>
                    <Route path="/atividades" component={Atividades}/>
                    <Route path="/cadastro" component={Cadastro}/>
                    <Route path="/perfil" component={Perfil}/>
                    <Route path="/contato" component={Contato}/>
                    <Route path="/sobreNos" component={SobreNos}/>
                </Switch>
        
        
       </>                
)}