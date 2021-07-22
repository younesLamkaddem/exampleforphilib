/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
/*
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
*/
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from './screens/Dashboard'
import Inscription from './screens/Inscription'
import SplashScreen from './screens/SplashScreen'
import 'react-native-gesture-handler';



const App = () => {

const Stack = createStackNavigator();


  return (

    <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
    headerShown: false
  }}
          >
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Inscription" component={Inscription} />
        <Stack.Screen name="SplashScreen" component={SplashScreen} />


      </Stack.Navigator>
    </NavigationContainer>

  )
}


const styles = StyleSheet.create({

    fullScreen : {
      backgroundColor: '#737AFA',
      flex: 1
    }
});

export default App;
