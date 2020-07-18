import * as React from 'react';
import {StyleSheet,Text,View,TextInput, Dimensions,Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';


export default class Homescreen extends React.Component{
    constructor(props){
        super(props);
        this.text={
            username: 'Roco',
            city: 'City',
            title: 'What are you looking for?',
            desc: 'Select services and checkout easily',
            milk: 'Milk Delivery',
            news: 'NewsPaper Delivery',
            scrap: 'Scrap Collection'
        };
        this.images={
            milk: require('../../assets/milk.png'),
            news: require('../../assets/newspaper.png'),
            scrap: require('../../assets/scrap.png'),
            banner: require('../../assets/homebanner.png')
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
                        <Image styles={styles.locationimage}/>
                        <Text style={styles.city}>{this.text.city}</Text>
                    </View>
                </View>
                <Image style={styles.banner} source={this.images.banner}/>
                <Text style={styles.title}>{this.text.title}</Text>
                <Text style={styles.desc}>{this.text.desc}</Text>
                <View style={styles.horizontalview}>
                    <TouchableOpacity style={styles.menuitem}
                    onPress={() => {
                            this.props.navigation.navigate('CalendarScreen')
                    }}>
                        <Image style={styles.menuimage} source={this.images.milk} />
                        <Text style={styles.menutext}>{this.text.milk}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuitem}>
                        <Image style={styles.menuimage} source={this.images.news}/>
                        <Text style={styles.menutext}>{this.text.news}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuitem}>
                        <Image style={styles.menuimage} source={this.images.scrap} />
                        <Text style={styles.menutext}>{this.text.scrap}</Text>
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
        justifyContent: 'flex-start',
        backgroundColor: '#F9F9F9'

    },
    topbar:{
        justifyContent: 'space-between',
        height: '8%',
       marginBottom: 20,
        width: '100%',
        padding: 20,
        alignContent: 'center',
        backgroundColor: 'white',
        flexDirection: 'row',
        shadowColor: "#000",
        shadowOffset: {
                width: 0,
                height: 1,
            },
        shadowOpacity: 0.37,
        shadowRadius: 1.49,

            elevation: 5
    },
    usernamecontainer:{
        flexWrap: 'wrap',
        
        
    },
    username:{
        fontWeight: 'bold',
        fontSize: 15,
        alignSelf: 'center',
    },
    userdes:{
        fontSize: 11,
        alignSelf: 'center'

    },
    userimage:{
        height: 20,
        width: 20,
        alignSelf: 'center'
    },
    locationimage:{
        height: 20,
        width: 20,
        alignSelf: 'center'
    },
    city:{
        fontWeight: '600',
        fontSize: 13,
        color: 'black'
    },
    banner:{
        width: Dimensions.get('window').width-30,
        alignSelf: 'center',
        borderRadius: 12
    },
    title:{
        fontSize: 17,
        fontWeight: 'bold',
        marginLeft: 20,
        marginTop: 30,
        alignSelf: 'flex-start',
        
    },
    desc:{
        fontSize: 14,
        color: 'gray',
        marginTop: 3,
        marginLeft: 20,
        alignSelf: 'flex-start',
    },
    horizontalview:{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        flex: 1,
        marginHorizontal: 15
    }, 
    menuitem:{
        marginTop: 20,
        height: Dimensions.get('window').width/3+15,
        width: Dimensions.get('window').width/3-14,
        margin: 10,
        
        borderRadius: 7,
        flexDirection: 'column',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.1,
        shadowRadius: 1,
       
        backgroundColor: 'rgba(255,255,255,255)',
        padding: 10

    },
    menuimage:{
        height: '60%',
        width: '60%',
        padding: 10,
        alignSelf: 'center'
    },
    menutext:{
        fontWeight: 'bold',
        fontSize: 12,
        textAlign: 'center'
    }
});