import styled from 'styled-components'

export const FooterContainer = styled.footer`
  display: flex;
  border-top: 1px solid #b0e0d3;
  flex-direction: column;
  margin: 4rem;
  gap: 1rem;
  padding: 2rem 0px 0.5rem;
  justify-content: center;
`

export const MenuContainer = styled.div`
  display: flex;
  gap: 1rem;
`

export const MenuItem = styled.a<{ selected: boolean }>`
  color: #333;
  text-decoration: none;
  font-size: 1.2rem;

  a {
    color: ${({ selected }) => (selected ? '#1F1F1F' : 'inherit')};
    font-weight: ${({ selected }) => (selected ? '700' : 'normal')};
    text-decoration: none;
    transition: all 0.2s ease 0s;
  }

  &:hover {
    color: #808080;
  }
`

export const IconContainer = styled.div`
  display: flex;
  color: #018762;
  gap: 2rem;

  a {
    color: #018762;
  }

  &:hover {
    color: #018762;
    transition: all 0.2s ease 0s;
  }
`

export const SubTitle = styled.p`
  color: #515151;
  font-size: 0.75rem;
`
