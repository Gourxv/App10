import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

//Navigation
import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

//Screens
import Home from './screens/Home'
import Details from './screens/Details'

export type RootStackPramList = {
  Home: undefined;
  Details: {product: Product}
}

const Stack = createNativeStackNavigator<RootStackPramList>()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
        name='Home'
        component={Home}
        options={{
          title: "Trending items"
        
        }}
        />
        <Stack.Screen
        name='Details'
        component={Details}
        options={{
          title: "Item details"
        
        }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

