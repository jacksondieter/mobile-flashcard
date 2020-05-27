import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'

export default function TextButton ({ children, onPress, style = {}, styleChild={}  }) {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.reset, style]}>
            <Text style={styleChild}>{children}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    reset: {
        alignItems:'center',
        textAlign: 'center',
        height:50,
        padding:10,
        margin:10,
        borderRadius:5
    }})
