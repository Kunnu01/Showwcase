import styled, { css } from 'styled-components';

export const Title = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 10px;
    margin-bottom: 15px;
    border-bottom: 1px solid ${theme.color.grey};
    font-size: 18px;
  `}
`;
