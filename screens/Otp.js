import React, { useState } from 'react';
// import * as firebase from "firebase/app";
// import "firebase/auth";
// import "firebase/analytics";

import {Text,View,StyleSheet,TextInput, Dimensions} from 'react-native';
import { Defs } from 'react-native-svg';
import { TouchableOpacity } from 'react-native-gesture-handler';
import SubmitButton from './components/SubmitButton';



const Otp = ({route,navigation}) => {

    var firebaseConfig = {
        apiKey: "AIzaSyAMNh-ci1hhnsvzgCbbuqyuWVzScUr5E54",
        authDomain: "welinks-b80f2.firebaseapp.com",
        databaseURL: "https://welinks-b80f2.firebaseio.com",
        projectId: "welinks-b80f2",
        storageBucket: "welinks-b80f2.appspot.com",
        messagingSenderId: "887049508481",
        appId: "1:887049508481:web:db88dbac3fd71d2ebd9f80",
        measurementId: "G-B3532FWL44"
      };
   //   firebase.initializeApp(firebaseConfig);
   const num = route.params;
   const numDisplay = num.charAt(0) + 'XXXXXXXX' + num.charAt(9)

//    const [one,sOne] = useState('');
//    const[two,sTwo] = useState('')
//    const[three,sThree] = useState('')

//    const[four,sFour] = useState('')
  
    return(<View style = {style.mainContainer}>
        <Text style={style.text}>We sent a '4-digit OTP' on {"\n"}     +91 {numDisplay} </Text>
        <Text style={style.desc}>Please enter the OTP below to complete the verification process. </Text>
       <View style = {style.view}>
       <TextInput style={style.input}  maxLength = {1}
                keyboardType = {"number-pad"}
                // onChangeText={(one) => {
                //     sOne(one)
                    
                    
                // }}
               
                    
                />
       <TextInput style={style.input} maxLength = {1}
                keyboardType = {"number-pad"}
              
                />
       <TextInput style={style.input} maxLength = {1}
                keyboardType = {"number-pad"}
                
                />
       <TextInput style={style.input} maxLength = {1}
                keyboardType = {"number-pad"}
                
                />

       </View>
       <Text style={style.resend}>Resend OTP </Text>
       <SubmitButton text='Submit'
           onTouch={()=>{
              // console.log('Your number was' + num)
                 navigation.navigate('City')
           }}
       />
     
    </View>)

};



const style = StyleSheet.create({
    mainContainer: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        padding: 10

    },
    text:{
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
        textAlign: "center",
        marginTop: 10,
        margin: 5

    },
    desc: {
        fontSize: 12,
        color: '#5D5D5D',
        textAlign: 'center',
        padding: 3,
        marginTop: 15
},
input:{
    height: 45,
    width: 45,
    borderWidth: 1.5,
    borderRadius: 5,
    borderColor: '#5D5D5D',
    marginStart: 10,
    alignSelf:"center",
    fontSize: 20,
    color: 'gray',
    textAlign: 'center'
    
},
view:{
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 15,
    margin: 50,

    
    
},
resend: {
    fontFamily: 'sans-serif',
    color: '#00C99D',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 15

}
});

export default Otp;