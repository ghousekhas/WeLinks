import React from 'react';
import {Text,View,StyleSheet,TextInput, Dimensions} from 'react-native';
import { Defs } from 'react-native-svg';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, Header } from '@react-navigation/stack';
import SubmitButton from './components/SubmitButton';

const authenticate= ({ navigation })=>{
    console.log('otp')
//navigation.navigate('OTP')
};

const LoginScreen = ({navigation}) => {
    return(
    <View style={LoginScreenStyle.mainContainer}>
        <Text style = {LoginScreenStyle.titleStyle}>Mobile Verification</Text>
        <Text style = {LoginScreenStyle.descStyle1}>Please enter your mobile number.</Text>
        <View style = {LoginScreenStyle.phoneViewStyle}>
            <Text style={LoginScreenStyle.textyy}>+91</Text>
            <View style={LoginScreenStyle.linesep}/>
            <TextInput style = {LoginScreenStyle.textInputStyle}
                maxLength = {10}
                keyboardType = {"number-pad"}
            />
        </View>
        <Text style = {LoginScreenStyle.descStyle2}>Don't worry, your number will not be shared with anyone.</Text>
        <View style={LoginScreenStyle.bottom}>
            <SubmitButton text='Get OTP'
            onTouch={()=>{
                navigation.navigate("OTP")
            }} />
        </View> 
    </View>)
};

const LoginScreenStyle = StyleSheet.create({
    
    mainContainer:{
        flexDirection: 'column',
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width
    },
    phoneViewStyle:{
        flexDirection: 'row',
        height: 45,
        width: Dimensions.get('window').width-30,
        alignSelf: 'center',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderColor: '#5D5D5D',
        borderWidth: 1,
        borderRadius: 5
    },
    viewStyle: {
        margin: 10
        

    },
    titleStyle: {
        fontSize: 25,
        textAlign: 'center',
        marginTop: 20,
        fontWeight: '200'
        

        

    },
    descStyle1: {
        fontSize: 12,
        color: '#5D5D5D',
        textAlign: 'center',
        padding: 3,
        marginTop: 15
    },
    descStyle2: {
        fontSize: 12,
        color: '#5D5D5D',
        textAlign: 'center',
        padding: 3,
        marginTop: 5
    },
    textInputStyle: {
        height: 45, 
        alignSelf: 'center',
        flex: 5,
        marginStart: 10,
       
       
        
       
    },
    textInputStyle1: {
      
        borderColor: 'gray',
         flex: 1, 
        fontSize: 17,
        textAlign: 'center',
        alignSelf:'center'
    },
    textyy:{
        alignSelf: 'center',
        fontSize: 15,
        flex: 1,
        padding: 5,
        textAlign: "center"
    },
    linesep:{
        height:45,
        width: 1,
        backgroundColor: 'gray'
    },
    bottom:{
        position: 'absolute',
        bottom: 30,
        right: 10,
        left: 10
    }

    

});


export default LoginScreen;