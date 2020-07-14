import * as React from 'react';
import {StyleSheet,Text,View,TextInput} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Homescreen extends React.Component{
    constructor(props){
        super(props);
        this.text={
            username: 'roco',
            city: 'city',
            title: 'What are you looking for',
            desc: 'Select services and checkout easily',
            milk: 'Milk Delivery',
            news: 'NewsPaper Delivery',
            scrap: 'Scrap Collection'
        }

    }
    
    render(){
        return(
            <View style={styles.fullscreen}>
                <View style={styles.topbar}>
                    <View style={styles.usernamecontainer}>
                        <Image style={styles.userimage}/>
                        <View style={styles.usernandd}>
                            <Text style={styles.username}>{this.text.username}</Text>
                            <Text style={styles.userdes}>{this.text.userdes}</Text>
                        </View>
                    </View>
                    <View>
                        <Image/>
                        <Text style={styles.city}>{this.text.city}</Text>
                    </View>
                </View>
                <Image style={styles.banner}/>
                <View style={styles.horizontalview}>
                    <TouchableOpacity style={styles.menuitem}>
                        <Image style={styles.menuimage}/>
                        <Text style={styles.menutext}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuitem}>
                        <Image style={styles.menuimage}/>
                        <Text style={styles.menutext}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuitem}>
                        <Image style={styles.menuimage}/>
                        <Text style={styles.menutext}/>
                    </TouchableOpacity>
                </View>
            </View>

        );
    }
}
const styles= StyleSheet.create({
    fullscreen:{
        ...StyleSheet.absoluteFill,
        flexDirection: 'column',
        justifyContent: 'flex-start'
    },
    topbar:{
        justifyContent: 'space-between',
        height: '20%',
        width: '100%',
        padding: 20,
        alignContent: 'center',
        flexDirection: 'row',
        shadowOffset: '0,4'
    },
    usernamecontainer:{
        flexWrap: 'wrap',
        borderWidth: 1
        
    },
    username:{
        fontWeight: 'bold',
        fontSize: 15,
        alignSelf: 'center',
    },
    userimage:{
        height: 20,
        width: 20,
        alignSelf: 'center'
    },
    usernamecontainer:{
        fontWeight: 'bold',
        fontSize: 15,
        alignSelf: 'center',
    },
    userimage:{
        height: 20,
        width: 20,
        alignSelf: 'center'
    },
    

});