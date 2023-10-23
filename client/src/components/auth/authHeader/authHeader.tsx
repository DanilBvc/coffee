import React from 'react';
import { View, Pressable, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ArrowLeft } from '../../../assets/images/icons';
import { styles } from './authHeader.style';

function AuthHeader () {
  const navigation = useNavigation();
  const handleBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.header}>
      <Pressable style={styles.headerButton} onPress={handleBack}>
        <ArrowLeft />
      </Pressable>
      <Text>Sign in</Text>
    </View>
  );
}

export default AuthHeader;
