import React from 'react'
import * as S from './styles'

interface ButtonProps {
  hasBorder?: boolean
  color?: string
  bgColor?: string
  children: React.ReactNode
}

function Button({ hasBorder = false, color, bgColor, children }: ButtonProps) {
  return (
    <S.ButtonWrapper hasBorder={hasBorder} color={color} bgColor={bgColor}>
      {children}
    </S.ButtonWrapper>
  )
}

export default Button
