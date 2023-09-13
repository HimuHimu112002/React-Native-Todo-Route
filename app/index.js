import React from 'react'
//import Todo from './Todo'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screen/HomeScreen';
import DetailsScreen from './screen/DetailScreen';

const Stack = createStackNavigator();

const Home = () => {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </>
  )
}
export default Home
