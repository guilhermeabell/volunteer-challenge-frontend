import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  border-top: 1px solid #b0e0d3;
  flex-direction: column;
  margin: 4rem;
  gap: 1rem;
  padding: 2rem 0px 0.5rem;
  justify-content: center;
`;

export const MenuContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

export const MenuItem = styled.a`
  color: #333;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.2rem;
`;

export const IconContainer = styled.div`
  display: flex;
  color: #018762;
  gap: 2rem;
`;

export const SubTitle = styled.p`
 color: #515151;
 font-size: 0.75rem;
`