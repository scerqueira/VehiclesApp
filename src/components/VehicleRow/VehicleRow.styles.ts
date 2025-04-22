import styled from 'styled-components/native';

export const RowPressable = styled.Pressable`
  min-height: 120px;
`;

export const Container = styled.View`
  flex: 1;

  padding-vertical: 10px;
  background-color: ${({ theme }) => theme.colors.surface.WHITE};
  flex-direction: row;
  border-bottom-width: 0.5px;
  border-bottom-color: ${({ theme }) => theme.colors.PRIMARY_50};
`;

export const LeftContainer = styled.View`
  flex: 1;
  padding-left: 5px;
  flex-direction: column;
`;

export const Photo = styled.Image`
  height: 80px;
  width: 100px;
  margin-right: 10px;
`;

export const ImagePlaceholder = styled.Image`
  height: 80px;
  width: 100px;
  resize-mode: contain;
`;

export const InfoContainer = styled.View`
  flex-direction: column;
  gap: 2px;
  flex: 1;
`;

export const RightContainer = styled.View`
  padding-horizontal: 14px;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
`;

export const MakeModel = styled.Text`
  font-size: ${({ theme }) => theme.paragraph.p3}px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text.PRIMARY};
`;

export const Details = styled.Text<{
  capitalize?: boolean;
  alignRight?: boolean;
}>`
  font-size: ${({ theme }) => theme.paragraph.p4}px;
  color: ${({ theme }) => theme.colors.text.GRAY};
  text-transform: ${({ capitalize }) => (capitalize ? 'capitalize' : 'none')};
  align-self: ${({ alignRight }) => (alignRight ? 'flex-end' : 'flex-start')};
`;

export const Bid = styled.Text`
  font-size: ${({ theme }) => theme.paragraph.p4}px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.PRIMARY_500};
`;

export const ExpiredLabel = styled.Text`
  font-size: ${({ theme }) => theme.paragraph.p4}px;
  color: ${({ theme }) => theme.colors.SECONDARY_500};
`;

export const TimeLeftLabel = styled.Text`
  font-size: ${({ theme }) => theme.paragraph.p4}px;
  color: ${({ theme }) => theme.colors.PRIMARY_500};
`;
