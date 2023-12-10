import React, { type FC, useEffect, useState } from 'react';
import { FlatList, Pressable, View } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { type mainLayoutType } from './mainLayout.type';
import { styles } from './mainLayout.style';
import BottomSection from '../../components/generall/bottomSection/bottomSection';
import { routes } from '../../../App';

const MainLayout: FC<mainLayoutType> = ({ children, style, background = true }) => {
  const [currentRoute, setCurrentRoute] = useState(routes[0].route);
  const route = useRoute();
  const navigate = useNavigation()
  useEffect(() => {
    setCurrentRoute(route.name);
  }, [route]);

  const handleNavigate = (route: string) => {
    navigate.navigate(route as never)
  }
  return (
    <View style={styles.container}>
      <View style={[background ? styles.topContainer : null]} />
      <View style={styles.bottomContainer} />
      <View style={[styles.children, style]}>{children}</View>
      <BottomSection>
        <View style={styles.sectionContainer}>
          <FlatList
            data={routes}
            contentContainerStyle={styles.sectionContainer}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <Pressable onPress={() => { handleNavigate(item.route) }}>{item.route === currentRoute ? item.activeSvg : item.svg}</Pressable>
            )}
          />
        </View>
      </BottomSection>
    </View>
  );
};

export default MainLayout;
