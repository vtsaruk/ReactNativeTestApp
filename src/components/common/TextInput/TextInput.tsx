import React, {useState} from 'react';
import {TextInputComponent, TextInputWrapper, ErrorMessage} from './styled';
import validateInputValue, {
  IValidateInput,
} from '../../../utils/validateInputValue';

interface ITextInputProps {
  placeholder?: string;
  secureTextEntry?: boolean;
  rules?: IValidateInput[];
  handleChange?: (text: string | null) => void;
}

const TextInput = (props: ITextInputProps) => {
  const {rules, handleChange, ...rest} = props;
  const [errMessage, setErrMessage] = useState('');

  const onChange = (text: string) => {
    let errorMessage = null;
    if (rules) {
      errorMessage = validateInputValue(text, rules) || '';
      setErrMessage(errorMessage);
    }
    if (errorMessage && handleChange) {
      handleChange(null);
      return;
    }
    if (handleChange) {
      handleChange(text);
    }
  };

  return (
    <TextInputWrapper>
      <TextInputComponent onChangeText={onChange} {...rest} />
      <ErrorMessage>{errMessage}</ErrorMessage>
    </TextInputWrapper>
  );
};

export default TextInput;
