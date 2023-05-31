import React from 'react';
import * as S from './styles'
import Button from '../Button';

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
    <>
    <S.MainContainer>
      <S.Content>
        {title && <S.Title dangerouslySetInnerHTML={{ __html: title }} />}
       {subtitle && <S.SubTitle dangerouslySetInnerHTML={{ __html: subtitle }}  />}
       
      </S.Content>
      <S.Image src={imageSrc} alt={imageAlt} />
    </S.MainContainer>
    </>
  );
};

export default Main;
