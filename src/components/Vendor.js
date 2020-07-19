import React, { useState } from 'react';
import {View, StyleSheet, Text, Dimensions} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


const Vendor = ({name,brands,stars,reviews}) => {
    return(<View style={style.container}>
    <View style={style.top}>
        <Text style={style.name}>{name}</Text>
        <TouchableOpacity style={style.button}>
            <Text style={{color:'#00C99D',fontSize: 12}}>Select</Text>
        </TouchableOpacity>
        </View>

        <View style = {{flexDirection: 'row'}}>
        <Text style={style.brandsTitle}>Brands: </Text>
        <Text style={style.brands}>{brands}</Text>
        </View>

        <View style = {{flexDirection: 'row'}}>
        <Text style={style.brandsTitle}>{stars} stars </Text>
            <Text style = {style.review}>({reviews} reviews.)</Text>
        </View>
    </View>)
};

const style = StyleSheet.create({
    container:{
        margin: 10,
        marginBottom: 50
    },
    top:{
        flexDirection: 'column',
        width: Dimensions.get('window').width-10,
      
        alignItems: 'flex-end',
        
        

    },
    button: {
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#00C99D',
        padding: 1,
        paddingHorizontal: 30,
        alignItems: 'flex-end',
        marginHorizontal:10,
        marginVertical: -3
       
       

    },
    name: {
        fontWeight: 'bold',
        marginStart: 80,
        fontSize: 15,
        alignSelf: 'flex-start'
    },
    brandsTitle:{
        color: 'gray',
        marginStart: 80,
        marginTop: 7,
        fontWeight: 'bold'
    },
    
    brands:{
        color: 'gray',
        
        marginTop: 7,

    },
    review:{
        color: 'gray',
        marginStart: 10,
        marginTop: 6,
        fontWeight: 'bold'
    },
    
    
});


export default Vendor;