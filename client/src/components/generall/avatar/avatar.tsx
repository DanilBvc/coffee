import React, { type FC } from 'react';
import { Image, type ImageStyle, Pressable, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './avatar.style';

const Avatar: FC<{ url: string; style?: ImageStyle }> = ({ url, style }) => {
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
      {url && <Image source={{ uri: url }} style={[styles.container, style]} alt="avatar" />}
    </Pressable>
  );
};

export default Avatar;
