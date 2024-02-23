import React from 'react';
import {TextInput, SubmitButton} from '../../components/common';
import {LoginForm, LoginScreen, LoginTitle, InputItem} from './styled';
import {EMAIL_PATTERN} from '../../utils/patterns';
import {IValidateInput} from '../../utils/validateInputValue';
import checkAreAllFields from '../../utils/checkAreAllFields';
import loginService from '../../services/loginService';

import {useFormData} from '../../hooks/useFormData';

const defaultDate = {
  password: null,
  email: null,
};

const emailRules: IValidateInput[] = [
  {pattern: EMAIL_PATTERN, message: 'Email is not correct'},
  {required: true, message: 'Email field is required'},
];

const passwordRules: IValidateInput[] = [
  {minLen: 8, message: 'Password must have min 8 symbols'},
  {required: true, message: 'Email field is required'},
];

const Login = () => {
  const [formValues, handleChangeValue] = useFormData(defaultDate);
  // @ts-ignore
  const isDisabled = !checkAreAllFields(defaultDate, formValues);
  // @ts-ignore
  const handleClick = () => loginService(formValues);
  // @ts-ignore
  const handleChangeEmail = handleChangeValue('email');
  // @ts-ignore
  const handleChangePassword = handleChangeValue('password');

  return (
    <LoginScreen>
      <LoginTitle>Login</LoginTitle>
      <LoginForm>
        <InputItem>
          <TextInput
            placeholder="Email"
            handleChange={handleChangeEmail}
            rules={emailRules}
          />
        </InputItem>
        <InputItem>
          <TextInput
            secureTextEntry
            placeholder="Password"
            rules={passwordRules}
            handleChange={handleChangePassword}
          />
        </InputItem>
        <SubmitButton
          disabled={isDisabled}
          title="Submit"
          onPress={handleClick}
        />
      </LoginForm>
    </LoginScreen>
  );
};

export default Login;
