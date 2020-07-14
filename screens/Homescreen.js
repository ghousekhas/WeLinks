import * as React from 'react';
import {Text,View,StyleSheet,Image, Dimensions} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Homescreen extends React.Component{
    constructor(props){
        super(props);
        this.state={
            username: 'roco',
            city: 'sanfrancisco'
        }
    }





    render(){
        return(
        <View style={styles.fullscreen}>
            <View style={styles.mainbar} >
                <Text style={styles.username}>{this.state.username}</Text>
                <TouchableOpacity style={{borderWidth: 1,borderRadius: 2, padding: 5,borderColor: 'black'}}>
                    <Text>{this.state.city}</Text>
                </TouchableOpacity>
            </View>
            <Image source={require('../assets/1.jpg')} style={styles.imagebanner} />
            <Text style={styles.title} >What are you looking for?</Text>
            <Text style={styles.description} >Select services and checkout easily</Text>
            <View style={styles.horizontalview}>
                <TouchableOpacity style={styles.menuitem}>
                <Image source={require('../assets/1.jpg')} style={styles.menuitemimage} />
                    <Text style={styles.menuitemtext} >Milk Delivery</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuitem}>
                <Image source={require('../assets/1.jpg')} style={styles.menuitemimage} />
                    <Text style={styles.menuitemtext} >NewsPaper Delivery</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuitem}>
                <Image source={require('../assets/1.jpg')} style={styles.menuitemimage} />
                    <Text style={styles.menuitemtext} >Scrap Collection</Text>
                </TouchableOpacity>
            </View>

        </View>
        );

    }
}

const styles=StyleSheet.create({
    fullscreen:{
        marginTop: 20,
        flex: 1,
        flexDirection: 'column',
    },
    mainbar:{
        height: '10%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        alignItems: 'center'
    },
    usercontainer:{
        flexDirection: 'row',
        flex: 1,
    },
    username:{
        fontWeight: '600',
        margin: 20,
        alignSelf: 'center'
    },
    imagebanner:{
        height: Dimensions.get('window').height*0.3,
        width: Dimensions.get('window').width,
    },
    title:{
        fontSize: 20,
        fontWeight: 'bold',
        fontStyle: 'normal',
        marginHorizontal: 30,
        marginTop: 20,
        marginBottom: 5,
        alignSelf: 'flex-start',
        color: 'black'
    },
    description:{
        fontSize: 16,
        marginHorizontal: 30,
        alignSelf: 'flex-start',
        color: 'gray'
    },
    horizontalview:{
        height: '40%',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    menuitem:{
        flex: 1,
        width: Dimensions.get('window').width/3-20,
        padding: 20,
        borderRadius:15,
        borderColor: 'gray',
        margin: 10,
        borderWidth: 1,
        flexDirection: 'column'
    },
    menuitemimage:{
        height: '60%',
        width: '90%',
        margin: 20,
        alignSelf: 'center',
    },
    menuitemtext:{
        fontSize: 17,
        fontWeight: 'bold',
        alignSelf: "center",
        margin: 0,

    }

});