import styled from 'styled-components/native';

export const SafeArea = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.surface.WHITE};
`;

export const MainContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ContentContainerWrapper = styled.View`
  flex: 1;
  padding-horizontal: 24px;
`;

export const ContentContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ErrorImage = styled.Image`
  width: 100%;
  flex: 1;
  max-height: 50%;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.heading.h4}px;
  text-align: center;
  margin-top: 44px;
  margin-bottom: 28px;
  font-weight: bold;
`;

export const SubTitle = styled.Text`
  font-size: ${({ theme }) => theme.paragraph.p3}px;
  text-align: center;
  margin-bottom: 20px;
`;
