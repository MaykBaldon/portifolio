import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Inicio from './components/inicio/inicio';
import Projetos from './components/Projetos/projetos';
import Sobre from './components/Sobre/sobre'
import Header from './components/Header/header';
import { createGlobalStyle } from 'styled-components';
import Footer from './components/Footer/footer';


export default function App() {

  const GlobalStyle = createGlobalStyle`
  * {
    margin:0;
    padding:0;
    box-sizing: border-box;
  }
  body {
    height: 100vh;
    background: rgb(2,0,36);
    background-repeat: no-repeat;
    background: linear-gradient(169deg, rgba(2,0,36,1) 49%, rgba(0,0,97,1) 81%);
  }

  `

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Routes>

          <Route path='/' element={<Inicio />} />
          <Route path='/Projetos' element={<Projetos />} />
          <Route path='/Sobre' element={<Sobre />} />

        </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  )
}