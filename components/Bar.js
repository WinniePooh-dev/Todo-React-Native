import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, TouchableOpacity, Keyboard } from 'react-native';

export default ({ onSubmit }) => {

    const [value, setValue] = useState('')

    const handlePress = () => {
        onSubmit(value)
        setValue('')
        Keyboard.dismiss()
    }

    return (
        <View style={styles.bar}>
            <View style={styles.wrap_input}>
                <TextInput placeholder='Введите текст'
                           autoCorrect={false}
                           autoCapitalize='none'
                           value={value}
                           style={styles.input}
                           onChangeText={setValue}/>
            </View>
            <View style={styles.btn}>
                <Button title='+'
                        color='green'
                        onPress={handlePress}/>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    bar: {
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    wrap_input: {
        width: '50%',
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
    },
    input: {
        fontSize: 19,
        color: '#314f65',
        fontStyle: 'italic'
        // fontFamily: 'coca-cola',
    },
    btn: {
        width: '40%',
    }
})