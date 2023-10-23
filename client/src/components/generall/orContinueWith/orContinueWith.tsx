import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './orContinueWith.style';

function OrContinueWith () {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <Text style={styles.text}>Or continue</Text>
      <View style={styles.line} />
    </View>
  );
}

export default OrContinueWith;
