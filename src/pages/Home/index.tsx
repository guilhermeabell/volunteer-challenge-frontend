import React from 'react'

import Ilustration from '../../assets/home.svg'
import Header from '../../fragments/Header'
import Main from '../../fragments/Main'
import Footer from '../../fragments/Footer'
import Button from '../../fragments/Button'

import * as S from './styles'

const Home: React.FC = () => {

  return (
    <>
    <Header />
    <Main
    imageSrc={Ilustration}
    imageAlt="Home
    image"
    subtitle="Uma plataforma segura e acolhedora para comunidade LGBTQIAPN+" title="Boas vindas a Lacrei Saúde" 
    />
    <S.ButtonsContainer>
    <Button bgColor='#018762' color='#FFF'>
      Pessoa Usuária
    </Button>
    <Button hasBorder bgColor='#FFF' color='#018762'>
      Profissional
    </Button>
    </S.ButtonsContainer>
    <Footer />
    </>
  )
}

export default Home