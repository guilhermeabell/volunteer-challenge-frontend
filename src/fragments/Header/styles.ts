import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.25rem;
  height: 5rem;
  background-color: #EEEEEE;
`

export const Title = styled.h1`
font-size: 2rem;
padding: 2rem;
font-weight: bold;
line-height: 44px;
color: #018762;
`
export const NavigationMenu = styled.ul`
  display: flex;
  color: #1F1F1F;
  list-style: none;
  font-weight: bold;
  gap: 2.8rem;
  padding: 2rem;
`;

export const NavigationMenuItem = styled.li`
  margin-left: 16px;
  cursor: pointer;

  &:first-child {
    margin-left: 0;
  }
   a {
    color: inherit;
    text-decoration: none;
    transition: all 0.2s ease 0s;
  }

  &:hover {
      color: #808080;
    }
`;
