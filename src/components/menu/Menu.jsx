import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import styled from 'styled-components';
import Inicio from '../inicio/Inicio';
import Atividades from '../atividades/Atividades';
import Perfil from '../perfil/Perfil';
import SobreNos from '../SobreNos/SobreNos';
import Cadastro from '../cadastro/Cadastro';
import Contato from '../contato/Contato';



const DivMenu = styled.div`

.menuHeader   {
    text-decoration: none;
    font-size: 30px;
}

.menuHeader {
    margin-left: 7%;
}

.menuHeader li {
    background-color: #000000;
    display: inline-block;
    margin-left: 4vh;
    padding-left: 5vh;
}

`
export default () => {
    return (
            
        <DivMenu>
                
                    <Link className="menuHeader"  to='/inicio'>Inicio</Link>
                    <Link className="menuHeader"  to='/atividades'>Atividades</Link>
                    <Link className="menuHeader"  to='/cadastro'>Cadastro</Link>
                    <Link className="menuHeader"  to='/contato'>Contato</Link>
                    <Link className="menuHeader"  to='/sobreNos'>Sobre Nós</Link>
                    <Link className="menuHeader"  to='/perfil'>Perfil</Link>
                    
                <Switch>
                    <Route exact path="/" component={Inicio}/>
                    <Route path="/inicio" component={Inicio}/>
                    <Route path="/atividades" component={Atividades}/>
                    <Route path="/cadastro" component={Cadastro}/>
                    <Route path="/perfil" component={Perfil}/>
                    <Route path="/contato" component={Contato}/>
                    <Route path="/sobreNos" component={SobreNos}/>
                </Switch>

        </DivMenu>
        
                  
)}