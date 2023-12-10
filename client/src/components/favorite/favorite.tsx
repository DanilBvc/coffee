import React from 'react'
import { FlatList, View } from 'react-native';
import useUserStore from '../../modules/user/store';
import FavoriteItem from './favoriteItem/favoriteItem';
const FavoriteComponent = () => {
  const user = useUserStore((state) => state)
  return (
    <View>
      <FlatList
        data={user.favorite}
        renderItem={({ item }) => <FavoriteItem product={item} />}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.starsCount + item.title}
      />
    </View>
  );
}

export default FavoriteComponent;
