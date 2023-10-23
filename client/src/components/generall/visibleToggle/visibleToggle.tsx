import React, { type FC } from 'react';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { type visibleToggleType } from './visibleToggle.type';

const VisibleToggle: FC<visibleToggleType> = ({
  style,
  isPasswordVisible,
  togglePasswordVisibility,
}) => {
  return (
    <View style={[{ position: 'absolute' }, style]}>
      <TouchableOpacity onPress={togglePasswordVisibility}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Icon name={isPasswordVisible ? 'eye-off' : 'eye'} size={20} color="#000" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default VisibleToggle;
