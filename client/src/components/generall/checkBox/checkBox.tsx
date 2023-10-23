import React, { type FC } from 'react';
import { FlatList, TouchableOpacity, Text } from 'react-native';
import { type checkBoxType } from './checkBox.type';
import { styles } from './checkBox.style';

const CheckBox: FC<checkBoxType> = ({ optionList, update, activeItems, horizontal = false }) => {
  return (
    <FlatList
      data={optionList}
      keyExtractor={(item) => item}
      contentContainerStyle={styles.fullScreen}
      horizontal={horizontal}
      numColumns={3}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => {
            update(item);
          }}
          style={[styles.container, activeItems.includes(item) && styles.activeContainer]}
        >
          <Text>{item}</Text>
        </TouchableOpacity>
      )}
    />
  );
};

export default CheckBox;
