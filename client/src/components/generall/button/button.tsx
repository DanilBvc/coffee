import React, { type FC } from 'react';
import { Pressable, View, Text } from 'react-native';
import { type buttonType } from './button.type';
import { styles } from './button.style';

const Button: FC<buttonType> = ({ onPress, title, additionalStyles, active = false }) => {
  return (
    <View style={additionalStyles}>
      <Pressable style={[active ? styles.buttonActive : styles.button]} onPress={onPress}>
        <Text style={[active ? styles.textActive : styles.text]}>{title}</Text>
      </Pressable>
    </View>
  );
};

export default Button;
