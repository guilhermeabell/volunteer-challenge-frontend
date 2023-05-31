import React from 'react'

import Ilustration from '../../assets/professional.svg'
import Header from '../../fragments/Header'
import Main from '../../fragments/Main'
import Footer from '../../fragments/Footer'

const Professional: React.FC = () => {
  return (
    <>
      <Header />
      <Main
        imageSrc={Ilustration}
        imageAlt="Professional
    image"
        hasBorderLeft
        title="Profissional"
        subtitle="A Lacrei garante que pessoas LGBTQIAPN + <br /> recebam atendimento realizado por profissionais <br /> de qualidade e que atendam às suas <br /> necessidades de forma segura e acolhedora."
      />
      <Footer />
    </>
  )
}

export default Professional
