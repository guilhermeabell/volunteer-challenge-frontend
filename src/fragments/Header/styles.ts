import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.25rem;
  height: 3.75rem;
  background-color: var(--gray--color);
`

export const Title = styled.h1`
  font-size: 2rem;
  padding: 2rem;
  font-weight: bold;
  line-height: 44px;
  color: var(--green--color);
`

export const NavigationMenu = styled.ul`
  display: flex;
  color: var(--dark--medium-color);
  list-style: none;
  font-weight: bold;
  gap: 2rem;
  padding: 2rem;
`

export const NavigationMenuItem = styled.li<{ selected: boolean }>`
  margin-left: 16px;
  cursor: pointer;

  &:first-child {
    margin-left: 0;
  }

  a {
    color: ${({ selected }) => (selected ? 'var(--green--color)' : 'inherit')};
    text-decoration: none;
    transition: all 0.2s ease 0s;
  }

  &:hover {
    color: var(--gray--medium--color);
  }
`
