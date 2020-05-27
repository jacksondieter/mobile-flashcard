import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Deck from '../screens/Deck'
import QuizCard from '../screens/QuizCard';
import AddCard from '../screens/AddCard'
import DeckNavigator from './DeckNavigator'

const Stack = createStackNavigator();

const StackNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home"
                            screenOptions={{
                                headerStatusBarHeight:0,
                                headerStyle: {
                                    height: 50
                                }
                            }}>
                <Stack.Screen name="Home" component={DeckNavigator} options={{headerShown: false}}/>
                <Stack.Screen name="Deck" component={Deck} options={({ route }) => ({ title: route.params.id })} />
                <Stack.Screen name="AddCard" component={AddCard} options={({ route }) => ({ title: `${route.params.deckId}: Add Card` })} />
                <Stack.Screen name="QuizCard" component={QuizCard} options={({ route }) => ({ title: `${route.params.id}: Quiz`, headerLeft:null })}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigator
