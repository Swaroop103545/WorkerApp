import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Categories } from '../src/screens';
import { IMAGES } from '../src/assets/images';
import workerData from '../src/data/workerData.json';
import categoriesData from '../src/data/categoriesData.json';

jest.mock('../data/workerData.json', () => [
  {
    id: '1',
    name: 'Philip',
    profileImage: 'philip',
    countryFlag: 'https://example.com/path_to_country_flag.png',
    categoryId: '1'
  },
]);

jest.mock('../data/categories.json', () => [
  {
    id: '1',
    Worker_Role: 'Astrologer',
    icon: 'astrology'
  },
]);

jest.mock('../assets/images', () => ({
  IMAGES: {
    philip: require('../assets/philip.jpg'),
    astrology: require('../assets/astrology.png'),
  }
}));

test('filters workers by category and search input', () => {
  const { getByText, getByPlaceholderText, queryByText } = render(<Categories />);

  expect(getByText('Philip')).toBeTruthy();

  fireEvent.press(getByText('Astrologer'));
  expect(getByText('Philip')).toBeTruthy();

  fireEvent.changeText(getByPlaceholderText('Search Workers'), 'Philip');
  expect(getByText('Philip')).toBeTruthy();

  expect(queryByText('SomeOtherWorker')).toBeNull();
});
