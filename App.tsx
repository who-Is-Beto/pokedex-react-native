import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React, {ReactNode} from 'react';
import {Text, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

type TabNavIcons = 'home' | 'information' | 'heart';
type TabNavNames = 'Home' | 'About' | 'Favorites';

const NavNameToIcon: Map<TabNavNames, TabNavIcons> = new Map([
  ['Home', 'home'],
  ['About', 'information'],
  ['Favorites', 'heart'],
]);

const Home = () => (
  <View>
    <Text>Home</Text>
  </View>
);

const Tab = createBottomTabNavigator();
const App = (): ReactNode => {
  const setTabIconName = (tabName: TabNavNames) => {
    return (
      <MaterialCommunityIcons
        name={NavNameToIcon.get(tabName)!}
        size={25}
        color="gray"
      />
    );
  };

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: () => {
            return setTabIconName(route.name as TabNavNames);
          },
          tabBarInactiveBackgroundColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
        })}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="About" component={Home} />
        <Tab.Screen name="Favorites" component={Home} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
