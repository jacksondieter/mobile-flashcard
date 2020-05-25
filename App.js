import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Deck from './screens/Deck'
import QuizCard from './screens/QuizCard';
import AddCard from './screens/AddCard'
import DeckNavigator from './navigation/DeckNavigator'
import Constants from 'expo-constants';

const Stack = createStackNavigator();

function TopStatusBar ({backgroundColor, ...props}) {
  return (
    <View style={{ height: Constants.statusBarHeight }}>
      <StatusBar translucent {...props} />
    </View>
  )
}


export default function App() {
  return (
      <View style={{flex: 1}}>
        <TopStatusBar/>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home"
                            screenOptions={{
                              headerStatusBarHeight:0,
                              headerStyle: {
                                  height: 50
                                }
                              }}>
            <Stack.Screen name="Home" component={DeckNavigator} options={{headerShown: false}}/>
            <Stack.Screen name="Deck" component={Deck} />
            <Stack.Screen name="AddCard" component={AddCard} />
            <Stack.Screen name="QuizCard" component={QuizCard} options={{headerLeft:null}}/>
          </Stack.Navigator>
    </NavigationContainer>
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
});
