import * as React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import CityList from './CityList';
import WeatherDetailScreen from './WeatherDetailScreen';

const AppNavigator = createStackNavigator(
    {
        CityList: CityList,
        Detail: WeatherDetailScreen,
    },
    {
        initialRouteName: 'CityList',
    }
)

export default createAppContainer(AppNavigator);
