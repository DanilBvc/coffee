import React, { type FC } from 'react';
import { View } from 'react-native';
import { type BaseLayoutType } from './baseLayout.type';
import { styles } from './baseLayout.style';

const BaseLayout: FC<BaseLayoutType> = ({ children, style }) => {
  return <View style={[styles.container, style]}>{children}</View>;
};

export default BaseLayout;
