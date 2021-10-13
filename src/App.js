import './App.css';
import Footer from './components/footer/Footer';
import Menu from './components/menu/Menu';
import styled from 'styled-components';
import Inicio from './components/inicio/Inicio';

export default function App() {

  return (

    <div className="container">
      <Menu/>
      <Footer/>
    </div>
  );
}


