import {NavigationContainer} from '@react-navigation/native';
import React from 'react'
import TabNavigator from './App/components/navigation/TabNavigator';

const App = () => {
  return(
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}

export default App;