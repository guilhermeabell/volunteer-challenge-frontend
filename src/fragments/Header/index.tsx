import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import * as S from './styles'

interface HeaderProps {
  selected?: boolean
}

const Header: React.FC<HeaderProps> = () => {
  const location = useLocation()

  const isSelected = (path: string) => {
    return location.pathname === path
  }

  return (
    <S.HeaderContainer>
      <S.Title data-testid="header-title">Lacrei</S.Title>
      <S.NavigationMenu>
        <S.NavigationMenuItem selected={isSelected('/')}>
          <Link data-testid="header-menu-home" to="/">
            Home
          </Link>
        </S.NavigationMenuItem>
        <S.NavigationMenuItem selected={isSelected('/userperson')}>
          <Link data-testid="header-menu-user-person" to="/userperson">
            Pessoa Usuária
          </Link>
        </S.NavigationMenuItem>
        <S.NavigationMenuItem selected={isSelected('/professional')}>
          <Link data-testid="header-menu-professional" to="/professional">
            Profissional
          </Link>
        </S.NavigationMenuItem>
      </S.NavigationMenu>
    </S.HeaderContainer>
  )
}

export default Header
