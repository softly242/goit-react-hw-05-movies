import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  color: black;
  font-size: 20px;
  font-weight: 600;
  justify-content: space-around;
  padding: 15px;
`;
export const Link = styled(NavLink)`

  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: orangered;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
 

  > nav {
    display: flex;
  }
`;

