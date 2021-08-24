import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Home';
import Create from '../Create';
import Profile from '../Profile';
import TabBar from '../TabBar';
import ProfileNavigator from '../navigation/ProfileNavigator';

const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator tabBar={props => <TabBar {...props} />}>
      <Tab.Screen
        name='Home'
        component={Home}
        initialParams={{ icon: 'home' }}
      />
      <Tab.Screen
        name='Create'
        component={Create}
        initialParams={{ icon: 'plus' }}
      />
      <Tab.Screen
        name='Profile'
        component={ProfileNavigator}
        initialParams={{ icon: 'user' }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;