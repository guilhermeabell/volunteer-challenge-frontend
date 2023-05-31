import React from 'react';
import * as S from './styles'

interface MainProps {
  title: string;
  subtitle: string;
  imageSrc: string;
  imageAlt: string;
  hasBorderLeft?: boolean
}

const Main: React.FC<MainProps> = ({ 
  title,
  subtitle,
  imageSrc,
  imageAlt,
  hasBorderLeft
}) => {
  return (
    <>
    <S.MainContainer>
      <S.Content>
        {title && <S.Title dangerouslySetInnerHTML={{ __html: title }} />}
       {subtitle && <S.SubTitle hasBorderLeft={hasBorderLeft} dangerouslySetInnerHTML={{ __html: subtitle }}  />}
       
      </S.Content>
      <S.Image src={imageSrc} alt={imageAlt} />
    </S.MainContainer>
    </>
  );
};

export default Main;
