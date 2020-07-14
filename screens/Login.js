import React from 'react';
import {Text,View,StyleSheet,TextInput, Dimensions} from 'react-native';
import { Defs } from 'react-native-svg';
import { TouchableOpacity } from 'react-native-gesture-handler';

const authenticate= ()=>{

}

const LoginScreen = () => {
    return(
    <View>
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
        <View>
            <TouchableOpacity style={LoginScreenStyle.button}>
                <Text style={LoginScreenStyle.buttonText}>Get OTP</Text>
            </TouchableOpacity>
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
        borderColor: 'grey',
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
        color: 'grey',
        textAlign: 'center',
        padding: 3,
        marginTop: 15
    },
    descStyle2: {
        fontSize: 12,
        color: 'grey',
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
    button:{
        alignSelf: "center",
        marginTop: 30,
        backgroundColor: '#00C99D',
        width: Dimensions.get('window').width-30,
        height: 45,
        borderRadius: 5,
       
       

    },
    buttonText: {
        textAlign: "center",
        textAlignVertical: "center",
        alignSelf:"center",
        color: 'white',
        fontWeight: '300',
        ...StyleSheet.absoluteFill
        
        
    }

    

});


export default LoginScreen;