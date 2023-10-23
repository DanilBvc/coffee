import React, { type FC } from 'react';
import { Pressable, View, Text } from 'react-native';
import { ArrowSvg } from '../../../assets/images/icons';
import { styles } from './navigationHeader.style';

const NavigationHeader: FC = () => {
  return (
    <View style={styles.headerContainer}>
      <Pressable>
        <View style={styles.arrow}>
          <ArrowSvg color="#2F2D2C" />
        </View>
      </Pressable>
      <Text>Detail</Text>
      <View />
    </View>
  );
};

export default NavigationHeader;
