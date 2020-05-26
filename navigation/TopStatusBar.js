import React from 'react'
import { View, StatusBar } from 'react-native'
import Constants from 'expo-constants';

const TopStatusBar = ({props}) => {
    return (
        <View style={{ height: Constants.statusBarHeight }}>
            <StatusBar translucent {...props} />
        </View>
    )
}

export default TopStatusBar
