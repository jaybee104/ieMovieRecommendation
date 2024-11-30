import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './views/home_screen';

export default function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  useEffect(() =>{
    setLoggedIn(false);
 
  },[]);
  return (
    <View >
      {isLoggedIn ? (<HomeScreen/>) : (<HomeScreen/>)} {/* i used this logic to enable me see the home page. i will update the user Auth later with firebase */}
      
    </View>
  );
}

