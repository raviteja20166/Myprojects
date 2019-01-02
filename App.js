import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation'; 
import DetailsScreen from './DetailsScreen';
import HomeScreen from './HomeScreen';
import Maps from './Maps';
import MapsLocation from './MapsLocation';
import Login from './Login';
import InputData from './InputData';



const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
     MapsLocation: MapsLocation,
    Maps: Maps,
    Login: Login,
    Input: InputData
  },
  {
    initialRouteName: 'Login',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
