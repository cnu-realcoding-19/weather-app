import * as React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import CityList from './CityList';
import WeatherDetailScreen from './WeatherDetailScreen';

const AppNavigator = createStackNavigator({
    Home: {
        screen: CityList
    }

})

export default createAppContainer(AppNavigator);
