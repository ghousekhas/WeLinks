
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Notiifications from 'expo-notifications';
import Introduction from './screens/Introduction'
<<<<<<< HEAD
import AddAddress from './screens/AddAddress';
=======
import LoginScreen from './screens/Login'
>>>>>>> 13e537a7b846a03431596776edec53a9d45ebe10

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
      <Stack.Navigator>
<<<<<<< HEAD
        <Stack.Screen name='AddAddress' component={AddAddress} options={{
          headerShown: false
        }}/>
        <Stack.Screen  name="Introduction" component={Introduction} 
        options={{
          headerShown: false
        }}/>
=======
       
        <Stack.Screen name = "Login" component={LoginScreen}/>
      

>>>>>>> 13e537a7b846a03431596776edec53a9d45ebe10
      </Stack.Navigator>
    </NavigationContainer>
  );
  }

export default App;

/*export default function App() {
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
