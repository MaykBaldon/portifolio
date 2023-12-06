
import {Link} from 'react-router-dom'
import * as S from './header_style'

export default function Header() {

    return (
      <S.HeaderStyle> 
      <figure>
        <img src="/Logo.png" alt="logo" />
      </figure>

      <nav>
        <ul>
          <li>
            <Link to='/'>Inicio</Link>
          </li>
          <li>
            <Link to='/Sobre'>Sobre</Link>
          </li>
          <li>
            <Link to='/Projetos'>Projeto</Link>
          </li>
        </ul>
      </nav>
      </S.HeaderStyle>
    )
  }