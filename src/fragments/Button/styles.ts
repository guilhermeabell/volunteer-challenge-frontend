import styled from 'styled-components'

interface ButtonProps {
  hasBorder?: boolean
  color?: string
  bgColor?: string
}

export const ButtonWrapper = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 2rem;
  min-width: 192px;
  height: 48px;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 8px;
  border: ${(props) => (props.hasBorder ? '3px solid' : 'none')};
  color: ${(props) => props.color || '#000'};
  background-color: ${(props) => props.bgColor || 'white'};
  cursor: pointer;

  @media screen and (min-width: 768px) {
    font-size: 1.125rem;
    min-width: 240px;
    height: 56px;
  }

  @media screen and (min-width: 1024px) {
    min-width: 280px;
    height: 64px;
  }

  @media screen and (min-width: 414px) {
    min-width: 150px;
    height: 56px;
  }
`
