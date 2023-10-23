import React, { type FC, useState } from 'react';
import { Text, View, Pressable } from 'react-native';
import { styles } from './singleCheckbox.style';
import { type singleCheckboxType } from './singleCheckbox.type';

const CustomCheckbox: FC<singleCheckboxType> = ({ option, onToggle }) => {
  const [selected, setSelected] = useState(false);

  const toggleCheckbox = () => {
    setSelected(!selected);
    onToggle(!selected);
  };

  return (
    <Pressable onPress={toggleCheckbox} style={styles.container}>
      <View style={[styles.circle, selected ? styles.selected : null]}>
        {selected && <View style={styles.innerCircle} />}
      </View>
      <Text>{option}</Text>
    </Pressable>
  );
};

export default CustomCheckbox;
