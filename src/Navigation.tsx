import React from 'react';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { enableScreens } from 'react-native-screens';

import { StatusBar } from 'react-native';

import Colors from './styles/colors';

import Home from './screens/Home';
import Stats from './screens/Stats';
import Settings from './screens/Settings';
import AllTransactions from './screens/AllTransactions';

enableScreens();

const Stack = createNativeStackNavigator();
const MaterialTab = createMaterialBottomTabNavigator();

const MaterialTabNavigation = () => {
  return (
    <MaterialTab.Navigator
      initialRouteName="Home"
      labeled={false}
      activeColor={Colors.purple}
      inactiveColor={Colors.clay}
      barStyle={{ backgroundColor: '#FFF' }}
    >
      <MaterialTab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="home-variant-outline"
              color={color}
              size={26}
            />
          )
        }}
      />
      <MaterialTab.Screen
        name="Stats"
        component={Stats}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="stats-chart" color={color} size={26} />
          )
        }}
      />
      <MaterialTab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="sync" color={color} size={26} />
          )
        }}
      />
    </MaterialTab.Navigator>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" />
      <Stack.Navigator
        initialRouteName="MaterialTab"
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="MaterialTab" component={MaterialTabNavigation} />
        <Stack.Screen name="AllTransactions" component={AllTransactions} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
