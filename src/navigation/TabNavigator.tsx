import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import WatchListScreen from '../screens/WatchList';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={WatchListScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
