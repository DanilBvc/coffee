import React, { type FC } from 'react';
import { Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './avatar.style';

const Avatar: FC<{ url: string }> = ({ url }) => {
  const navigation = useNavigation();
  const handleNavigate = (route: string) => {
    navigation.navigate(route as never);
  };
  return (
    <Pressable
      onPress={() => {
        handleNavigate('Profile');
      }}
    >
      {url && <Image source={{ uri: url }} style={styles.container} alt="avatar" />}
    </Pressable>
  );
};

export default Avatar;
