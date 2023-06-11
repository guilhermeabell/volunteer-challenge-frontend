import styled from 'styled-components'

export const FooterContainer = styled.footer`
  display: flex;
  border-top: 1px solid var(--green--light--color);
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
  color: var(--dark--gray--color);
  text-decoration: none;
  font-size: 1.2rem;

  a {
    color: ${({ selected }) => (selected ? 'var(--dark--medium--color)' : 'inherit')};
    font-weight: ${({ selected }) => (selected ? '700' : 'normal')};
    text-decoration: none;
    transition: all 0.2s ease 0s;
  }

  &:hover {
    color: var(--gray--medium--color);
  }
`

export const IconContainer = styled.div`
  display: flex;
  color: var(--green--color);
  gap: 2rem;

  a {
    color: var(--green--color);
  }

  &:hover {
    color: var(--green--color);
    transition: all 0.2s ease 0s;
  }
`

export const SubTitle = styled.p`
  color: var(--gray--light--color);
  font-size: 0.75rem;
`
