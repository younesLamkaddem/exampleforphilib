/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React  , {useState}from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TouchableOpacity,
  TextInput
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
import ArrowLogo from '../assets/arrow.png'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MultiSelect from 'react-native-multiple-select';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
const Inscription = props => {


//Username Validation
const [emptyusername, setEmptyusername] = useState(false);
//Email validation
const [emptyemail, setEmptyemail] = useState(false);
//Password Validation
const [emptypassword, setEmptypassword] = useState(false);
//State that control show sign up erro
const [signuperror, setSignuperror] = useState(false)
//State That shows that the account was created successfuly
const [signupsuccess, setSignupsuccess] = useState(false)
const [userToBeCreated, setUserToBeCreated] = useState({
    username : '',
    email : '',
    password : ''
    });

    //Method that handle change of input of username

    const handleChangeUserName = (text) => {

        setUserToBeCreated({
            ...userToBeCreated,
            username : text
        })
    }

    //Method that handle change of input of email

        const handleEmailChange = (text) => {
        setUserToBeCreated({
            ...userToBeCreated,
            email : text
        })
    }

    //Method that handle change of input of password

        const handlePasswordChange = (text) => {
        setUserToBeCreated({
            ...userToBeCreated,
            password : text
        })
    }






//Navigate Back to the previous screen

    const goBackToDashboard = () => {
        props.navigation.goBack();
    }


//Create User Method
    const handleCreateUser = async() => {
        //If condition to check the field of forms to verify they pass the validation
        if(
            userToBeCreated.username.length == 0 ||
            userToBeCreated.email.length == 0 ||
            userToBeCreated.password.length == 0 ||
            !userToBeCreated.email.includes('@')
        ){
                   if(userToBeCreated.username.length == 0){
            setEmptyusername(true);
        }
        if(userToBeCreated.email.length == 0){
            setEmptyemail(true);
        }
        if(userToBeCreated.password.length == 0){
            setEmptypassword(true);
        }    
        if(!userToBeCreated.email.includes('@')){
            console.log('pas format email')
        }

//else condition happen when the forms is filled , then we call the backend api for creating account 
        }else{
                        
            const createUser = async() => {

                console.log('create')
                const response = await fetch('http://192.168.1.15:8080/api/auth/register',{
                     method : 'POST',
                     headers : {
                    'Accept':'application/json',
                         'Content-Type':'application/json'
                    },
                     body:JSON.stringify({
                    'username':userToBeCreated.username,
                     'password':userToBeCreated.password,
                     'email':userToBeCreated.email,
          
             })
                });

                const resData = await response.json();
                console.log(response);
//if account is created successfully , message that shows the account was created will show
                if(response.status == '200'){
                    
                    //props.navigation.goBack();
                    setSignupsuccess(true);
                    
                }
                //if account is not created because username or password already exist , message of error will show in the screen
                else{
                    if(response.status == '400'){
                        console.log('username ou email deja existe');
                        setSignuperror(true);
                    }
                }

            }


            await createUser();
           // goToPreviousPage();

        }



    }
    return (
            <View style={styles.fullScreen}> 
                <View style={styles.header}>
                <View style={{flex: 1 , flexDirection: 'row' , justifyContent: 'space-between'}}>
                <View style={{flex : 0.2 , justifyContent: 'center',marginLeft: 4 }}>
                                <TouchableOpacity 
                                onPress={() => goBackToDashboard()}
                                style={{justifyContent: 'center'}}>
                                <Image source={ArrowLogo} style={{width: 30 , height: 30}} />

                </TouchableOpacity>
                </View>
                <TouchableOpacity 
                onPress={() => GoToLogin()}
                style={{flex : 0.28  , justifyContent: 'center'}}>
                    <Text style={{color: '#737AFA' ,fontSize: 20 , fontWeight: 'bold' ,alignSelf: 'flex-end' , marginRight: 5}}>Login</Text>
                </TouchableOpacity>
                </View>
               
              
                </View>
                <View style={styles.middle}>
                <View>
                <View style={[styles.itemOfForm,{
                    marginTop: 15
                }]}>
                   <View style={{flex : 0.1 , marginLeft: 5}}>
                    <FontAwesome name="user-o" size={35} color='#585858' />
                    </View>
                    <View style={{flex : 0.8}}>
                <TextInput
                                                placeholder="Enter username"

      onChangeText={(username) => {handleChangeUserName(username)}}
     // value={value}
    />
    </View>


                </View>
                {
                    userToBeCreated.username.length == 0 && emptyusername ==true?

                                            <View style={{justifyContent: 'center' , alignSelf: 'center'}}>
            <Text style={{fontSize: 14 , fontWeight: 'bold' , color: '#EBB401'}}>Field is empty</Text>
                        </View>
                    : null
                }


                </View>




                    <View>
                                <View style={styles.itemOfForm}>
                   <View style={{flex : 0.1 , marginLeft: 5}}>
                    <MaterialCommunityIcons name="email" size={33} color='#585858' />
                    </View>
                    <View style={{flex : 0.8}}>
                <TextInput
                            placeholder="Enter your email"

      onChangeText={(email) => {handleEmailChange(email)}}
     // value={value}
    />
    </View>

                </View>
                {
                    userToBeCreated.email.length == 0 && emptyemail == true || 
                    !userToBeCreated.email.includes('@') && emptyemail == true
                    ?

                                            <View style={{justifyContent: 'center' , alignSelf: 'center'}}>
            <Text style={{fontSize: 14 , fontWeight: 'bold' , color: '#EBB401'}}>Email field empty or not correct format of email</Text>
                        </View>
                    : null
                }


                </View>


                <View>
                                <View style={styles.itemOfForm}>
                   <View style={{flex : 0.1 , marginLeft: 5}}>
                    <AntDesign name="lock" size={35} color='#585858' />
                    </View>
                    <View style={{flex : 0.8}}>
                <TextInput
            placeholder="Enter your password"
            secureTextEntry={true}
      onChangeText={(password) => {handlePasswordChange(password)}}
     // value={value}
    />
    </View>


                </View>
                {
                    userToBeCreated.password.length == 0 && emptypassword == true?

                                            <View style={{justifyContent: 'center' , alignSelf: 'center'}}>
            <Text style={{fontSize: 14 , fontWeight: 'bold' , color: '#EBB401'}}>Empty Password Field</Text>
                        </View>
                    : null
                }

            </View>

                <View style={{flexDirection: 'row' , justifyContent: 'center' , marginTop: 20}}>
                <TouchableOpacity 
                onPress={() => handleCreateUser()}
                style={{flex : 0.8 , backgroundColor: '#C6C1C1' ,borderRadius: 25, alignSelf: 'center' , alignContent: 'center' , alignItems: 'center' , justifyContent: 'center' , padding: 14}}>
                <Text style={{fontSize: 30 , color: '#fff' , fontWeight: 'bold'}}>Sign Up</Text>
                </TouchableOpacity>
                </View>

{
    signuperror == true ?
                <View style={{width: '80%',alignSelf: 'center' , flexDirection: 'row' , marginTop: 30 , borderWidth: 1 , borderRadius: 20 , padding: 10 , borderColor: 'red'}}>
                <MaterialIcons name="error" size={35} color='red' />
                <Text style={{alignSelf: 'center' }}>Email or username already exist</Text>

                </View> :
                null
}
{
    signupsuccess == true ?
                <View style={{width: '80%',alignSelf: 'center' , flexDirection: 'row' , marginTop: 30 , borderWidth: 1 , borderRadius: 20 , padding: 10 , borderColor: 'green'}}>
                <AntDesign name="checkcircleo" size={35} color='green' />
                <Text style={{alignSelf: 'center' }}> Account Successfuly Created</Text>

                </View> :
                null
}

                
                </View>

                <View style={{flex : 0.1 , backgroundColor: '#737AFA'}}>

                </View>
            </View>
     
    )
}


const styles = StyleSheet.create({
    fullScreen : {
        flex: 1,
        backgroundColor: '#737AFA'
    },
    header : {
        flex : 0.1 , 
        flexDirection: 'row',
        backgroundColor: '#fff',
    },
    middle : {
        flex : 0.80 , 
        backgroundColor: '#fff',
        //borderBottomLeftRadius: 80 , 
        borderBottomRightRadius: 80
    },
    itemOfForm : {
        width: '95%',
        flexDirection: 'row' ,
         justifyContent: 'center',
        borderBottomWidth: 1,
        borderColor : '#E1DEDE',
        alignSelf: 'center',
        marginBottom: 20
    }
})
export default Inscription