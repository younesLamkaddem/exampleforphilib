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
  Image,
  TouchableOpacity
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
import 'react-native-gesture-handler';
import Logo from '../assets/app.png'
import fblogo from '../assets/facebook.png'

const Dashboard = props => {

    const goToInscriptionPage = () => {
        props.navigation.navigate('Inscription')
    }

    const goToSplashScreen = () => {
       // props.navigation.navigate('SplashScreen')
    }

    return (

        <View style={styles.fullScreen}>
            <View style={styles.viewOne}>
      <View style={{justifyContent: 'center',alignContent: 'center' , alignItems: 'center' , alignSelf: 'center' , padding:  15}}>
                    <Image source={Logo}   style={{ width: 150, height: 150 , justifyContent: 'center',alignContent: 'center' , alignSelf: 'center'}} />
            </View>
            </View>
            <View style={styles.viewTwo}>
                <View style={{flex : 0.5 }}>
                  <View style={{alignItems: 'center' , marginTop: 45 }}>
                    <Text style={{ fontSize: 20 , color: '#716E6E' , fontWeight: 'bold'}}>Continue With</Text>
                </View>
                <TouchableOpacity 
                onPress={() => goToSplashScreen()}
                style={{ padding: 25, flexDirection: 'row',backgroundColor: '#4267B2', alignItems: 'center' , alignContent: 'center',alignSelf: 'center', width: '80%' , marginTop: 30
, borderRadius: 15
}}>
                <View style={{flex : 0.3 , justifyContent: 'center', alignContent: 'center',alignSelf: 'center',alignItems: 'center'}}>
                                    <Image source={fblogo}  style={{height: 25 , width: 25}} />

                </View>
                <View style={{flex : 0.7}}>
                    <Text style={{color: '#fff' , fontSize: 20 , fontWeight: 'bold'}}>FACEBOOK</Text>
                </View>
                
                </TouchableOpacity>
                </View>
                <View style={{flex : 0.25}}>
                    <TouchableOpacity style={{alignItems: 'center'}} 
                    onPress={() => goToInscriptionPage()}
                    >
                        <Text style={{fontWeight: 'bold' , fontSize: 23 , color: '#737AFA'}}>Sign Up</Text>
                    </TouchableOpacity>

                    <View style={{flexDirection: 'row' , marginTop: 30 , alignContent: 'center' , alignItems: 'center' , alignSelf: 'center'}}>
                    <View>
                        <Text>Already Have an account ?</Text>
                    </View>
                                        <TouchableOpacity style={{alignItems: 'center'}} 
                    >
                        <Text style={{color: '#737AFA' ,fontWeight: 'bold' , fontSize: 17}}> Login</Text>
                    </TouchableOpacity>   
                    </View>
                </View>

                <View style={{flex: 0.2 }}>
                    <View style={{alignSelf: 'center' , flexDirection: 'row'}}>
                    <Text style={{color: '#716E6E'}}>
                    By continuing you accept our 
                    </Text> 
                    <Text style={[styles.underline,{
                        color: '#716E6E' , fontSize: 14
                    }]}> Conditions</Text>
                    </View>
                    <View style={{alignSelf: 'center' , flexDirection: 'row'}}>
                   <Text style={[styles.underline,{
                        color: '#716E6E' , fontSize: 14
                    }]}> of use</Text>
                    <Text style={{color: '#716E6E'}}> and our</Text>
                    <Text style={[styles.underline,{
                                                color: '#716E6E' , fontSize: 14

                    }]}> Privacy Policy</Text>
                    </View>
                </View>

            </View>
        </View>

    )
}


const styles = StyleSheet.create({
    fullScreen : {
        flex: 1 , 
        //backgroundColor: '#fff'
        backgroundColor: '#737AFA'
    },
    viewOne : {
        flex : 0.20 ,
        //backgroundColor: '#737AFA'
    },
    viewTwo : {
        backgroundColor: '#fff',
        flex : 0.80,
        borderTopLeftRadius: 80,
        borderTopRightRadius: 80,
        justifyContent: 'space-around'
    },
    underline : {
        textDecorationLine: 'underline'
    }
})
export default Dashboard