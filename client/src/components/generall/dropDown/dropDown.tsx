import React, { type FC, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Animated } from 'react-native';
import { ArrowSvg } from '../../../assets/images/icons';
import { styles } from './dropDown.style';
import { type dropDownType } from './dropDown.type';

const DropDown: FC<dropDownType> = ({ valueList, currentValue, updateCurrentValue }) => {
  const [isOpen, setIsOpen] = useState(false);
  const animatedHeight = useState(new Animated.Value(0))[0];

  const toggleDropDown = () => {
    setIsOpen(!isOpen);
    Animated.timing(animatedHeight, {
      toValue: isOpen ? 0 : valueList.length * 50,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const selectItem = (item: string) => {
    updateCurrentValue(item);
    toggleDropDown();
  };

  return (
    <View style={styles.dropDown}>
      <TouchableOpacity style={styles.dropDownTitle} onPress={toggleDropDown}>
        <Text style={styles.dropDownCurrentValue}>{currentValue}</Text>
        <View style={[styles.arrowIcon, isOpen ? styles.rotatedArrow : null]}>
          <ArrowSvg />
        </View>
      </TouchableOpacity>
      <Animated.View style={[styles.dropDownContainer, { height: animatedHeight }]}>
        {isOpen && (
          <FlatList
            data={valueList}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => {
                  selectItem(item);
                }}
              >
                <Text style={styles.dropDownList}>{item}</Text>
              </TouchableOpacity>
            )}
          />
        )}
      </Animated.View>
    </View>
  );
};

export default DropDown;
