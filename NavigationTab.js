import React from 'react'
import {  StyleSheet, Dimensions } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


import Welcome from './screens/Welcome';
import Signup from './screens/Signup';
import Login from './screens/Login';



const WelcomeStack = createStackNavigator();




function NavigationTab() {
  return (

    <NavigationContainer style={styles.screen} >

      <WelcomeStack.Navigator initialRouteName="Welcome" screenOptions={{
        headerShown: false,
      }} >
        <WelcomeStack.Screen name="Welcome" component={Welcome} />
        <WelcomeStack.Screen name="Signup" component={Signup} />
        <WelcomeStack.Screen name="Login" component={Login} />
      </WelcomeStack.Navigator>

    </NavigationContainer>


  )
}



export default NavigationTab

const styles = StyleSheet.create({
  screen: {



  },
  container: {
    flex: 1,
  }
})
