import React from 'react'
import { FacebookLogo, LinkedinLogo, InstagramLogo } from 'phosphor-react'
import { Link, useLocation } from 'react-router-dom'
import * as S from './styles'

interface FooterProps {
  selected?: boolean
}

const Footer: React.FC<FooterProps> = () => {
  const location = useLocation()

  const isSelected = (path: string) => {
    return location.pathname === path
  }

  return (
    <S.FooterContainer>
      <S.MenuContainer>
        <S.MenuItem selected={isSelected('/')}>
          <Link to="/">Home</Link>
        </S.MenuItem>
        <S.MenuItem selected={isSelected('/userperson')}>
          <Link to="/userperson">Pessoa Usuária</Link>
        </S.MenuItem>
        <S.MenuItem selected={isSelected('/professional')}>
          <Link to="/professional">Profissional</Link>
        </S.MenuItem>
      </S.MenuContainer>
      <S.IconContainer>
        <a href="https://www.facebook.com/lacrei.saude" target="_blank">
          <FacebookLogo data-testid="footer-facebook-logo" size={32} />
        </a>
        <a href="https://www.instagram.com/lacrei.saude/" target="_blank">
          <InstagramLogo data-testid="footer-instagram-logo" size={32} />
        </a>
        <a href="https://www.linkedin.com/company/lacrei/" target="_blank">
          <LinkedinLogo data-testid="footer-linkedin-logo" size={32} />
        </a>
      </S.IconContainer>
      <S.SubTitle>Desafio front-end lacrei</S.SubTitle>
    </S.FooterContainer>
  )
}

export default Footer
