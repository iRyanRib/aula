//import os core componentes
import { StyleSheet, Text,TextInput, View,Button, ScrollView, FlatList } from 'react-native';
import {useState} from "react";
import Login from "./src/screens/Login";
import Home from './src/screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

//view -> container que reune componentes
//text -> mostra qualquer texto


export default function App() {
  return(  
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown:false}}>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Home" component={Home}/>
      </Stack.Navigator>

    </NavigationContainer>
  );

};