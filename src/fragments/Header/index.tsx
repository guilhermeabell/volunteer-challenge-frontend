import React from 'react'
import { Link } from 'react-router-dom'
import * as S from './styles'

const Header: React.FC = () => {
  return (
    <S.HeaderContainer>
      <S.Title data-testid="header-title">Lacrei</S.Title>
      <S.NavigationMenu>
        <S.NavigationMenuItem>
          <Link data-testid="header-menu-home" to="/">
            Home
          </Link>
        </S.NavigationMenuItem>
        <S.NavigationMenuItem>
          <Link data-testid="header-menu-user-person" to="/userperson">
            Pessoa Usuária
          </Link>
        </S.NavigationMenuItem>
        <S.NavigationMenuItem>
          <Link data-testid="header-menu-professional" to="/professional">
            Profissional
          </Link>
        </S.NavigationMenuItem>
      </S.NavigationMenu>
    </S.HeaderContainer>
  )
}

export default Header
