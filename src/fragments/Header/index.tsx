import React from 'react';
// import { Link } from 'react-router-dom';
import * as S from './styles';

const Header: React.FC = () => {
  return (
    <S.HeaderContainer>
      <S.Title>Lacrei</S.Title>
      <S.NavigationMenu>
        <S.NavigationMenuItem>
           <a href="/">Home</a>
        </S.NavigationMenuItem>
        <S.NavigationMenuItem>
          Pessoa Usuária
        </S.NavigationMenuItem>
        <S.NavigationMenuItem>
          Profissional
        </S.NavigationMenuItem>
      </S.NavigationMenu>
    </S.HeaderContainer>
  );
};

export default Header;
