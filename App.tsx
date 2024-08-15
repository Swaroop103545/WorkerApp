import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Welcome, Categories} from './src/screens';
import {BottomTabParamList} from './types.ts';

const Tab = createBottomTabNavigator<BottomTabParamList>();

const App: React.FC = () => (
  <NavigationContainer>
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Welcome"
        component={Welcome}
        options={{tabBarTestID: 'WelcomeTab'}}
      />
      <Tab.Screen
        name="Categories"
        component={Categories}
        options={{tabBarTestID: 'CategoriesTab'}}
      />
    </Tab.Navigator>
  </NavigationContainer>
);

export default App;
