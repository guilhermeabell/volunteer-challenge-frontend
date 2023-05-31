import React from 'react';
import * as S from './styles'

interface MainProps {
  title: string;
  subtitle: string;
  imageSrc: string;
  imageAlt: string;
}

const Main: React.FC<MainProps> = ({ 
  title,
  subtitle,
  imageSrc,
  imageAlt
}) => {
  return (
    <S.MainContainer>
      <S.Content>
        <S.Title>{title}</S.Title>
        <S.Subtitle>{subtitle}</S.Subtitle>
      </S.Content>
      <S.Image src={imageSrc} alt={imageAlt} />
    </S.MainContainer>
  );
};

export default Main;
