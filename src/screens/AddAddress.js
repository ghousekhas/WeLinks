import * as React from 'react'
import {Text,Button,TouchableOpacity,Dimensions,StyleSheet,View} from 'react-native';
import MapView, {Marker} from 'react-native-maps'
import { Directions, TextInput } from 'react-native-gesture-handler';

export default class AddAddress extends React.Component{

    constructor(props){
        super(props);
        this.state= {
            marker:{
                title: 'Home',
                description: 'Move map around to focus on point',
            }
        };
    }
    mapinit= ()=>{

    }

    onPress= ()=>{

    }
    render(){
        return(
            <View style={styles.mainContainer}>
            <View style={styles.mainContainer} >
                <MapView style={styles.mapview} onMapReady={this.mapinit}>
                    <Marker
                        title= {this.state.marker.title}
                        description= {this.state.marker.description}
                        draggable= {false}


                    />
                    </MapView>
                <TextInput style={styles.address} placeholder='Address Line 1' placeholderTextColor='rgba(30,30,30,255)'/>
                <TextInput style={styles.address} placeholder='Address Line 2'/>
            </View>
            <View style={{...styles.mainContainer,justifyContent: 'flex-end'}}>
                <TouchableOpacity style={styles.addbuttontouchable} onPress={
                    this.onPress
                } >
                    <Text style={styles.addaddresstext}>Add Address</Text>
                </TouchableOpacity>
            </View>
            </View>
        )
    }

}

const styles= StyleSheet.create({
    mapview:{
        width: Dimensions.get('window').width-30,
        height: 300,
        alignSelf: 'center'
    },
    mainContainer:{
        marginTop: 20,
        flex: 1,
        flexDirection: 'column',
        padding: 10,
        justifyContent: 'flex-start',
    },
    address:{
        height: 40,
        padding: 10,
        marginVertical: 15,
        alignSelf: 'center',
        width: Dimensions.get('window').width-30,
        borderRadius: 5,
        borderColor: 'rgba(0,0,0,255)',
        borderWidth: 1,
    },
    addbuttontouchable:{ 
        width: Dimensions.get('window').width-50,
        alignSelf: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'rgba(125,125,125,255)'
        
        

    },
    addaddresstext:{
        textAlign: 'center',
        color: 'rgba(0,0,0,255)',
        fontSize: 27,
        margin: 5,
        height: 30,
        width: Dimensions.get('window').width,
        
    }
}

);