import React, { type FC } from 'react';
import { Pressable, View, Text } from 'react-native';
import { ArrowSvg } from '../../../assets/images/icons';
import { styles } from './navigationHeader.style';
import { useNavigation, useRoute } from '@react-navigation/native';

const NavigationHeader: FC = () => {
  const navigate = useNavigation()
  const route = useRoute()
  const { name } = route
  const goBack = () => {
    navigate.goBack()
  }
  return (
    <View style={styles.headerContainer}>
      <Pressable onPress={goBack}>
        <View style={styles.arrow}>
          <ArrowSvg color="#2F2D2C" />
        </View>
      </Pressable>
      <Text>{name}</Text>
      <View />
    </View>
  );
};

export default NavigationHeader;
