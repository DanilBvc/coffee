import React, { type FC } from 'react';
import { View } from 'react-native';
import { type bottomSectionType } from './bottomSection.type';
import { styles } from './bottomSection.style';

const BottomSection: FC<bottomSectionType> = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

export default BottomSection;
