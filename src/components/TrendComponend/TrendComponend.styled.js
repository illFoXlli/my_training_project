import styled from 'styled-components';

export const ListCard = styled.ul`
  display: flex;
  flex-wrap: wrap;

  padding-bottom: 60px;
  row-gap: 30px;
  column-gap: 20px;

  @media screen and (min-width: 480px) {
    row-gap: 50px;
    column-gap: 30px;
  }

  @media screen and (min-width: 768px) {
    row-gap: 42px;
  }

  @media screen and (min-width: 1280px) {
    row-gap: 59px;
  }
`;
