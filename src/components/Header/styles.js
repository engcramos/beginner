import styled from 'styled-components';

export const HeaderContainer = styled.header`
  max-width: 100vw;
  height: 100px;
  background: #0F4C81;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;

  div {
    display: flex;
    align-items: center;
  }



  a {
    margin-right: 5px;
    align-text: center;
    font-size: 3rem;
    text-decoration: none;
    color: white;
  }
`;