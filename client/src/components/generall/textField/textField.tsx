import React, { type FC, useState } from 'react';
import { TextInput, View, Text } from 'react-native';
import { type textFieldProps } from './textField.type';
import VisibleToggle from '../visibleToggle/visibleToggle';
import { styles } from './textField.style';

const TextField: FC<textFieldProps> = ({
  placeholder,
  value,
  onChange,
  validation,
  errorMessage,
  title,
  eye,
}) => {
  const [error, setError] = useState(false);
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const handleInput = (value: string) => {
    if (validation.test(value)) {
      setError(false);
    } else {
      setError(true);
    }
    onChange(value);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        secureTextEntry={isPasswordVisible}
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={handleInput}
      />
      {eye
        ? (
        <VisibleToggle
          style={{ right: 10, top: '50%' }}
          isPasswordVisible={isPasswordVisible}
          togglePasswordVisibility={togglePasswordVisibility}
        />
          )
        : null}
      {error ? <Text style={styles.errorText}>{errorMessage}</Text> : null}
    </View>
  );
};

export default TextField;
