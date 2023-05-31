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
  padding: 10px 20px;
  width: 192px;
  padding: 0.75rem 2rem;
  height: 48px;
  font-size: 1.125rem;
  font-weight: bold;
  border-radius: 8px;
  border: ${(props) => (props.hasBorder ? '3px solid' : 'none')};
  color: ${(props) => props.color || '#000'};
  background-color: ${(props) => props.bgColor || 'white'};
  cursor: pointer;
`
