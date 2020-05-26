import React from 'react'
import { View } from 'react-native'
import TopStatusBar from '../navigation/TopStatusBar'
import StackNavigator from '../navigation/StackNavigator';

const Home = () => {
    return (
        <View style={{flex: 1}}>
            <TopStatusBar/>
            <StackNavigator/>
        </View>
    )
}

export default Home
