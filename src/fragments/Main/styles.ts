import styled from 'styled-components'

interface MainProps {
  hasBorderLeft?: boolean
}

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 1.5rem;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 3rem;
  }

  @media screen and (min-width: 414px) {
    padding: 4rem;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  @media screen and (min-width: 768px) {
    text-align: left;
  }

  @media screen and (min-width: 414px) {
    align-items: flex-start;
    text-align: left;
  }
`

export const Image = styled.img`
  width: 100%;
  max-width: 555px;
  height: auto;

  @media screen and (min-width: 768px) {
    width: 555px;
    height: 421px;
  }

  @media screen and (min-width: 414px) {
    width: 100%;
    height: auto;
  }
`

export const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;

  @media screen and (min-width: 414px) {
    font-size: 3rem;
  }
`

export const SubTitle = styled.h2<MainProps>`
  border-left: ${(props) => (props.hasBorderLeft ? '4px solid #018762' : 'none')};
  padding-left: 1rem;
  font-size: 1.2rem;
  font-weight: normal;
  color: #515151;
  margin-bottom: 2rem;

  @media screen and (min-width: 414px) {
    font-size: 1.5rem;
  }
`
