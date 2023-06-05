import { useEffect } from 'react'

import { Link } from 'react-router-dom'
import Header from '@fragments/Header'
import Ilustration from '@assets/home.svg'
import Main from '@fragments/Main'
import Footer from '@fragments/Footer'
import Button from '@fragments/Button'

import * as S from './styles'

function Home() {
  useEffect(() => {
    document.title = 'Home | Desafio Lacrei'
  }, [])

  return (
    <>
      <Header />
      <Main
        imageSrc={Ilustration}
        imageAlt="Home image"
        subtitle="Uma plataforma segura e acolhedora para <br /> comunidade LGBTQIAPN+"
        title="Boas vindas a Lacrei <br /> Saúde"
      />
      <S.ButtonsContainer>
        <Link to="/userperson">
          <Button bgColor="#018762" color="#FFF">
            Pessoa Usuária
          </Button>
        </Link>
        <Link to="/professional">
          <Button hasBorder bgColor="#FFF" color="#018762">
            Profissional
          </Button>
        </Link>
      </S.ButtonsContainer>
      <Footer />
    </>
  )
}

export default Home
