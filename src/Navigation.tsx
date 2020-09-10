import React from 'react';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { StatusBar } from 'react-native';

import Colors from './styles/colors';

import Home from './screens/Home';
import Stats from './screens/Stats';
import Settings from './screens/Settings';

const { Navigator, Screen } = createMaterialBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <StatusBar />
      <Navigator
        initialRouteName="Home"
        labeled={false}
        activeColor={Colors.purple}
        inactiveColor={Colors.clay}
        barStyle={{ backgroundColor: '#FFF' }}
      >
        <Screen
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
        <Screen />
        <Screen
          name="Stats"
          component={Stats}
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons name="stats-chart" color={color} size={26} />
            )
          }}
        />
        <Screen
          name="Settings"
          component={Settings}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="sync" color={color} size={26} />
            )
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
