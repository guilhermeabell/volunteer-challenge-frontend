import React from 'react'
import * as S from './styles'

interface ButtonProps {
  hasBorder?: boolean
  color?: string
  bgColor?: string
  children: React.ReactNode
}

const Teste = () => {
  return <div>Teste</div>
}

const Button: React.FC<ButtonProps> = ({ hasBorder = false, color, bgColor, children }) => {
  return (
    <>
      <S.ButtonWrapper hasBorder={hasBorder} color={color} bgColor={bgColor}>
        {children}
      </S.ButtonWrapper>
      <Teste />
    </>
  )
}

export default Button
