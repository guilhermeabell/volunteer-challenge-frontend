import React from 'react';
import { FacebookLogo, LinkedinLogo, InstagramLogo } from 'phosphor-react';
import * as S from './styles';



const Footer: React.FC = () => {
  return (
    <S.FooterContainer>
      <S.MenuContainer>
        <S.MenuItem href="#">Home</S.MenuItem>
        <S.MenuItem href="#">Pessoa Usuária</S.MenuItem>
        <S.MenuItem href="#">Profissional</S.MenuItem>
      </S.MenuContainer>
      <S.IconContainer>
        <FacebookLogo size={32} />
        <InstagramLogo size={32} />
        <LinkedinLogo size={32} />
      </S.IconContainer>
      <S.SubTitle>Desafio front-end lacrei</S.SubTitle>
    </S.FooterContainer>
  );
};

export default Footer;