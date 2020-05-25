import React from 'react'
import { StyleSheet, TextInput } from 'react-native'

const TextInputStyled = ({value,onChangeText}) => {
    return (
        <TextInput
             style={styles.reset}
            onChangeText={onChangeText}
            value={value}
            />
    )
}

export default TextInputStyled

const styles = StyleSheet.create({
    reset:{ height: 40,
            width: 200,
            borderColor: 'gray',
            borderWidth: 1,
            margin:20
        }
})
