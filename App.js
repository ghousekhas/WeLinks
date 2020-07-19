
import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Notifications from 'expo-notifications';
import Introduction from './src/screens/Introduction'

import LoginScreen from './src/screens/Login'
import City from './src/screens/City';
import About from './src/screens/About';
import HomeScreen from './src/screens/Homescreen'


import DateScreen from './src/screens/DateScreen';

import Cart from './src/screens/Cart';
import MilkVendors from './src/screens/MilkVendors';
import PaperVendors from './src/screens/PaperVendors';
import SubscribeScreen from './src/screens/SubscribeScreen';
import VendorScreen from './src/screens/VendorScreen';



/*function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}*/

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "Homescreen">
     
        <Stack.Screen  name="Introduction" component={Introduction} 
        options={{
          headerShown: false
        }}/>
       
        <Stack.Screen name = "Login" component={LoginScreen}/>
       
        <Stack.Screen name = "City" component={City}/>
        <Stack.Screen name = "About" component={About}/>
        <Stack.Screen name = "Homescreen" component={HomeScreen}/>
        
        
       
        <Stack.Screen name = "MilkVendors" component={MilkVendors}/>
        <Stack.Screen name = "PaperVendors" component={PaperVendors}/>
        <Stack.Screen name = "VendorScreen" component={VendorScreen}/>
        <Stack.Screen name = "SubscribeScreen" component={SubscribeScreen}/>
        <Stack.Screen name = "DateScreen" component={DateScreen}/>
       
        <Stack.Screen name = "Cart" component={Cart}/>
       


        

        
      </Stack.Navigator>
    </NavigationContainer>
  );  
}

export default App;

/*<Stack.Screen name = "Introduction" component={Introduction}/>
 export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text style={styles.text}> Something's going on in here</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontSize: 30,
    textAlign: "center",
    transform: [
      { translateX: -Dimensions.get('window').width*0.24},
      { rotateY: '60deg'},
      { perspective: 850 }
    ],
    color: '#0000FF'
  }
});*/
