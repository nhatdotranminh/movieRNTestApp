import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import MovieDetailScreen from '../screens/MovieDetailScreen';
import TabNavigator from './TabNavigator';

export type RootStackParamList = {
  Main: undefined;
  MovieDetail: { movieId: number };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Main" component={TabNavigator} />
        <Stack.Screen name="MovieDetail" component={MovieDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppStack;
