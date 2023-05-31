import React, { useEffect } from 'react'

import Ilustration from '../../assets/userPerson.svg'
import Header from '../../fragments/Header'
import Main from '../../fragments/Main'
import Footer from '../../fragments/Footer'

const UserPerson: React.FC = () => {
  useEffect(() => {
    document.title = 'Pessoa Usuária | Desafio Lacrei'
  }, [])

  return (
    <>
      <Header />
      <Main
        imageSrc={Ilustration}
        hasBorderLeft
        imageAlt="UserPerson
    image"
        title="Pessoa Usuária"
        subtitle="A Lacrei garante que pessoas LGBTQIAPN + <br /> recebam atendimento realizado por profissionais <br /> de qualidade e que atendam às suas <br /> necessidades de forma segura e acolhedora."
      />
      <Footer />
    </>
  )
}

export default UserPerson
