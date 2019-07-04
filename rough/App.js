import React from 'react';
import { StyleSheet, Text, View, Button, Image} from 'react-native';
import HomeScreen from "./src/screens/Home"
import CameraScreen from "./src/screens/CameraScreen"
import { createStackNavigator, createAppContainer } from "react-navigation";

const MainNavigator = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    Camera: { screen: CameraScreen },
  },
  
  {
    defaultNavigationOptions: {
      headerTintColor: "#fff",
      headerStyle: {
        backgroundColor: "#b83227"
      },
      headerTitleStyle: {
        color: "#FFF"
      }
    }
  },
);

const App = createAppContainer(MainNavigator);
export default App;
