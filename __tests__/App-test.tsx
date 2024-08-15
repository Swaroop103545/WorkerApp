import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Categories, Welcome } from '../src/screens';

const Tab = createBottomTabNavigator();

jest.mock('@react-navigation/bottom-tabs');
const MockWelcomeScreen = () => <></>;
const MockCategoriesScreen = () => <></>;

afterEach(() => {
  cleanup();
});


function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Welcome" component={MockWelcomeScreen} />
        <Tab.Screen name="Categories" component={MockCategoriesScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

test('navigation between tabs works correctly', () => {
  const { getByText, getByTestId } = render(<AppNavigator />);

  expect(getByText('Welcome')).toBeTruthy();

  fireEvent.press(getByTestId('CategoriesTab'));
  expect(getByText('Categories')).toBeTruthy();
});
