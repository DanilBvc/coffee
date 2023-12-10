import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from './src/pages/auth/register/register';
import Home from './src/pages/home/home';
import Login from './src/pages/auth/login/login';
import Main from './src/pages/main/main';
import { HomeSvg, HeartSvg, BagSvg, NotificationSvg } from './src/assets/images/icons';
import Detail from './src/pages/detail/detail';
import Profile from './src/pages/profile/profile';
import Favorite from './src/pages/favorite/favorite';

const Stack = createNativeStackNavigator();
export const routes = [
  {
    route: 'Main',
    svg: <HomeSvg />,
    activeSvg: <HomeSvg active />,
  },
  {
    route: 'Heart',
    svg: <HeartSvg />,
    activeSvg: <HeartSvg active />,
  },
  {
    route: 'Bag',
    svg: <BagSvg />,
    activeSvg: <BagSvg active />,
  },
  {
    route: 'Notification',
    svg: <NotificationSvg />,
    activeSvg: <NotificationSvg active />,
  },
];

function App () {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name={routes[0].route} component={Main} options={{ headerShown: false }} />
        <Stack.Screen name="Details" component={Detail} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
        <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
        <Stack.Screen name="Heart" component={Favorite} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
