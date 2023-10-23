import React from 'react';
import { View, Pressable } from 'react-native';
import { styles } from './animatedMark.style';

function AnimatedMark () {
  return (
    <View>
      <Pressable style={styles.button} onPress={() => {}}>
        <View style={[styles.firstLine]} />
        <View style={[styles.secondLine]} />
      </Pressable>
    </View>
  );
}

export default AnimatedMark;
