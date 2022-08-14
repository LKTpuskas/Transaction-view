import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 48px;
  background: #e0e0e0;
  border-radius: 16px;
  gap: 32px;
  @media (max-width: 919px) {
    flex-direction: column-reverse;
  }
`;

export const ContentSection = styled.section<{ isAccountView?: boolean }>`
  color: #fff;
  display: flex;
  height: ${({ isAccountView }) => isAccountView ? '100%' : 'auto'};
  align-items: ${({ isAccountView }) => isAccountView ? 'flex-start' : 'center'};
  justify-content: ${({ isAccountView }) => isAccountView ? 'center' : 'normal'};
`;

export const Column = styled.div`
  flex-direction: column;
`;

export const StyledUl = styled.ul`
  border-radius: 12px;
  background: hsl(242deg 84% 77%);
  padding: 16px;
  margin-bottom: 16px;
`;

export const StyledLi = styled.li`
  list-style: none;
`;

