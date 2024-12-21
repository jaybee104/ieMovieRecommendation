import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './views/home_screen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import SearchScreen from './views/search_screen';
import {Ionicons} from '@expo/vector-icons';
import WatchlistScreen from './views/watchlist_screen';
import SettingsScreen from './views/settings_screen';

const Tab = createBottomTabNavigator();

export default function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  useEffect(() =>{
    setLoggedIn(true);
 
  },[]);
  return (
    <NavigationContainer>
      {isLoggedIn ? (
      <Tab.Navigator 
      screenOptions={({route}) => ({
        tabBarIcon:({color,size}) => {
          let iconName;
          if(route.name === 'Home'){
            iconName = 'home';
          }else if (route.name === 'Search'){
            iconName = 'search';
          }
          else if(route.name ==='Watchlist'){
            iconName = 'heart';
          }
          else if (route.name === 'Settings'){
            iconName = 'person';
          }
          return <Ionicons name={iconName} size={size} color={color}/>
        },
        tabBarStyle:styles.floatingTabBar,
        tabBarShowLabel:false,

      })}
      >
        <Tab.Screen name='Home' component={HomeScreen}/>
        <Tab.Screen name='Search' component={SearchScreen}/>
        <Tab.Screen name='Watchlist' component={WatchlistScreen}/>
        <Tab.Screen name='Settings' component={SettingsScreen}/>
      </Tab.Navigator> ) : (<HomeScreen/>)} {/* i used this logic to enable me see the home page. i will update the user Auth later with firebase */}
      
    </NavigationContainer>
     
      
     
  );
}

const styles = StyleSheet.create({
floatingTabBar:{
  position:'absolute',
  backgroundColor:'#ffffff',
  borderRadius:30,
  borderWidth:0,
  height:70,
  marginHorizontal:20,
  marginBottom:10,
  shadowColor:'#000',
  shadowOpacity:0.1,
  shadowRadius:3.5,
  elevation:5, 
  alignItems:'center'
},icon:{
  justifyContent:'center',
  alignItems:'center'
}
});

