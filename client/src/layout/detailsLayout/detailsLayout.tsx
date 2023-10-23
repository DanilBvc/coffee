import React, { type FC } from 'react';
import { View } from 'react-native';
import { type DetailsLayoutType } from './detailsLayout.type';
import NavigationHeader from './navigationHeader/navigationHeader';
import { styles } from './detailsLayout.style';

const DetailsLayout: FC<DetailsLayoutType> = ({ children, style }) => {
  return (
    <View style={[styles.container, style]}>
      <NavigationHeader />
      {children}
    </View>
  );
};

export default DetailsLayout;
