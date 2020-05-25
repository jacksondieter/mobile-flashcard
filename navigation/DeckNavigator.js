import React from 'react'
import { View, Text, Platform } from 'react-native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import DeckList from '../screens/DeckList';
import AddDeck from '../screens/AddDeck'

const Tab = Platform.OS === 'ios'
            ? createMaterialBottomTabNavigator()
            : createMaterialTopTabNavigator()

const DeckNavigator = () => {
    return (
            <Tab.Navigator tabBarOptions={{
                tabStyle:{height:50}
            }}>
                <Tab.Screen name="Decks" component={DeckList} />
                <Tab.Screen name="AddDeck" component={AddDeck} />
            </Tab.Navigator>
    )
}

export default DeckNavigator
