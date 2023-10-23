import React, { type FC, useEffect, useState } from 'react';
import { FlatList, Pressable, View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { type mainLayoutType } from './mainLayout.type';
import { styles } from './mainLayout.style';
import BottomSection from '../../components/generall/bottomSection/bottomSection';
import { routes } from '../../../App';

const MainLayout: FC<mainLayoutType> = ({ children, style }) => {
  const [currentRoute, setCurrentRoute] = useState(routes[0].route);
  const route = useRoute();

  useEffect(() => {
    setCurrentRoute(route.name);
  }, [route]);
  return (
    <View style={styles.container}>
      <View style={styles.topContainer} />
      <View style={styles.bottomContainer} />
      <View style={[styles.children, style]}>{children}</View>
      <BottomSection>
        <View style={styles.sectionContainer}>
          <FlatList
            data={routes}
            contentContainerStyle={styles.sectionContainer}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <Pressable>{item.route === currentRoute ? item.activeSvg : item.svg}</Pressable>
            )}
          />
        </View>
      </BottomSection>
    </View>
  );
};

export default MainLayout;
