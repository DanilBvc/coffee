import React, { type FC } from 'react';
import { FlatList, Text, View } from 'react-native';
import { type carouselType } from './carousel.type';
import { styles } from './carousel.style';

const Carousel: FC<carouselType<string>> = ({ list, active, updateActive }) => {
  return (
    <View style={styles.carouselWrapper}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={list}
        keyExtractor={(item) => item}
        ItemSeparatorComponent={() => <View style={{ width: 5 }} />}
        renderItem={({ item }) => (
          <Text
            style={[styles.carouselItem, active === item && styles.activeItem]}
            onPress={() => {
              updateActive(item);
            }}
          >
            {item}
          </Text>
        )}
      />
    </View>
  );
};

export default Carousel;
