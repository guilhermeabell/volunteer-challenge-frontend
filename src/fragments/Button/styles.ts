import styled from 'styled-components'

interface ButtonProps {
  hasBorder?: boolean;
  color?: string;
  bgColor?: string;
}

export const ButtonWrapper = styled.button<ButtonProps>`
  padding: 10px 20px;
  width: 192px;
  height: 48px;
  font-weight: bold;
  border-radius: 8px;
  border: ${(props) => (props.hasBorder ? '3px solid' : 'none')};
  color: ${(props) => props.color || '#000'};
  background-color: ${(props) => props.bgColor || 'white'};
  cursor: pointer;
`;