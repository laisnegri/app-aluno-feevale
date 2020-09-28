import React from 'react';
import { StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import Menu from './navegation/DrawerNavigator';

export default function App() {

  return (
      <NavigationContainer>
        <Menu/> 
      </NavigationContainer>
  );}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});