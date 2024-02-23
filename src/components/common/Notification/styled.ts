import styled from 'styled-components/native';

export const NotificationContainer = styled.View`
  padding: 8px 16px;
  width: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;
`;

export const NotificationText = styled.Text`
  font-size: 18px;
  text-align: center;
  color: white;
`;

export const NotificationBox = styled.View`
  margin-top: 8px;
  border-width: 1px;
  background-color: #999;
  border-color: #999;
  border-radius: 4px;
`;
