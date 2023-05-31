import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './styles';

const Header: React.FC = () => {
  return (
    <S.HeaderContainer>
      <S.Title>Lacrei</S.Title>
      <S.NavigationMenu>
        <S.NavigationMenuItem>
           <Link to={"/"}>Home</Link>
        </S.NavigationMenuItem>
        <S.NavigationMenuItem>
          <Link to={"/userperson"}>Pessoa Usuária</Link>
        </S.NavigationMenuItem>
        <S.NavigationMenuItem>
          <Link to={"/professional"}>Profissional</Link>
        </S.NavigationMenuItem>
      </S.NavigationMenu>
    </S.HeaderContainer>
  );
};

export default Header;
