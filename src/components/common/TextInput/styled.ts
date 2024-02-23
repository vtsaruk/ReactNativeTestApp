import {TextInput} from 'react-native';
import styled from 'styled-components/native';

export const TextInputComponent = styled(TextInput)`
  border: 1px solid black;
  border-radius: 4px;
  font-size: 18px;
  padding: 4px 8px;
`;

export const TextInputWrapper = styled.View``;

export const ErrorMessage = styled.Text`
  color: red;
  font-size: 12px;
`;
