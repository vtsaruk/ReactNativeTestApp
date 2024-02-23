import React from 'react';
import {ButtonComponent} from './styled';

interface ISubmitButtonProps {
  title: string;
  disabled?: boolean;
  onPress: () => void;
}

const SubmitButton = (props: ISubmitButtonProps) => {
  return <ButtonComponent {...props} />;
};

export default SubmitButton;
