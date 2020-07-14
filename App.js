
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Notifications from 'expo-notifications';
import Introduction from './screens/Introduction'
import Otp from './screens/Otp';
import LoginScreen from './screens/Login';
import City from './screens/City';
import About from './screens/About';
import AddAddress from './screens/AddAddress';


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
      
        <Stack.Screen  name="Introduction" component={Introduction} 
        options={{
          headerShown: false
        }}/>

        <Stack.Screen name = "Login" component={LoginScreen}/>
        <Stack.Screen name = "OTP" component={Otp}/>
        <Stack.Screen name = "City" component={City}/>
        <Stack.Screen name = "About" component={About}/>
      </Stack.Navigator>
    </NavigationContainer>
  );  
}

export default App;

