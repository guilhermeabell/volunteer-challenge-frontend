import styled from 'styled-components'

interface MainProps {
  hasBorderLeft?: boolean;
}

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4rem 4rem 0px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Image = styled.img`
  width: 555px;
  height: 421px;
`;

export const Title = styled.h1`
  font-size: 3rem;
`;

export const SubTitle = styled.h2<MainProps>`
  border-left: ${(props) => (props.hasBorderLeft ? '4px solid #018762' : 'none')};
  padding-left: 1rem;
  font-size: 1.5rem;
  font-weight: normal;
  color: #515151;
`;