import React, { useState } from 'react';
import {View, StyleSheet, Text, Dimensions} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Vendor from '../components/Vendor';


const ServiceProviders = () => {
    return(<View>
    <View style={style.container}>
        <Text style ={style.username}>User Name</Text>
        <Text style={style.address}>Kalyan Nagar, Bangalore</Text>
    </View>
    <View style={style.line} />

    <Text style={style.heading}>Milk Vendors in your locality</Text>

    <Vendor name='Vendor name 1' brands=' Nandini, Heritage, Akshayakalpa'
        stars= {3} reviews = {10}
    />

<Vendor name='Vendor name 2' brands=' Nandini, Heritage, Akshayakalpa'
        stars= {3} reviews = {10}
    />

<Vendor name='Vendor name 3' brands=' Nandini, Heritage, Akshayakalpa'
        stars= {3} reviews = {10}
    />

    </View>)
};

const style = StyleSheet.create({
    container: {
        margin: 10,
        padding: 10,
        alignItems: 'flex-start',
    },
    username: {
        fontWeight: 'bold',
        marginStart: 50,
        fontSize: 18
    },
    address: {
        marginTop: 7,
        borderRadius: 5,
        backgroundColor: '#00C99D',
        color: 'white',
        padding: 3,
        marginStart: 50,
        paddingHorizontal: 6,
        
        fontSize: 13,
        
    },
    line:{
        borderWidth: 0.5,
        borderColor: 'gray',
        marginVertical: 5,
          
        
    },
    heading: {
        fontSize: 20,
        padding: 10,
        fontWeight: 'bold',
        marginVertical: 20
    }

})

export default ServiceProviders;