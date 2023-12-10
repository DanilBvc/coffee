import React, { type FC } from 'react'
import { Image, View, Text } from 'react-native'
import { type productItem } from '../../../modules/products/store';

const FavoriteItem: FC<{ product: productItem }> = ({ product }) => {
  const { title, picture } = product

  return (
    <View>
      <Image style={{ width: 144, height: 144 }} source={{ uri: picture }} />
      <Text>{title}</Text>
    </View>
  );
};

export default FavoriteItem
