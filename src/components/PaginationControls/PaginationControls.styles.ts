import styled from 'styled-components/native';

export const ControlsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-horizontal: 24px;
  margin-top: 10px;
`;

export const PageNumberContainer = styled.View`
  height: 40px;
  width: 40px;
  background-color: ${({ theme }) => theme.colors.surface.WHITE};
  align-items: center;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
`;
export const SelectedPageNumberContainer = styled.View`
  height: 40px;
  width: 40px;

  align-items: center;
  justify-content: center;
  align-items: center;
`;
