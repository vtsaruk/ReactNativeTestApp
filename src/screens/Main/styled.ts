import styled from 'styled-components/native';

export const MainScreen = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  padding: 20px 40px;
  flex-direction: column;
`;

export const TitleScreen = styled.Text`
  font-size: 36px;
  font-weight: bold;
  text-align: center;
`;

export const SiteMenu = styled.View`
  padding-top: 20px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 20px;
`;

export const SiteItemMenu = styled.Text<{
  isActive: boolean;
}>`
  color: blue;
  font-size: 18px;
  padding: 4px 8px;
  ${({isActive}) => (isActive ? 'text-decoration: underline;' : '')}
`;
export const WebViewBox = styled.View`
  margin-top: 20px;
  display: flex;
  flex-grow: 1;
  width: 100%;
`;

export const Footer = styled.View`
  padding-top: 20px;
  height: 50px;
  width: 100%;
`;

export const CopyrightInformation = styled.Text`
  color: gray;
  font-size: 16px;
  text-align: center;
`;
