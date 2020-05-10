import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';

export default ({ onSubmit }) => {

    const [value, setValue] = useState('')

    const handlePres = () => {
        onSubmit(value)
        setValue('')
    }

    return (
        <View style={styles.bar}>
            <View style={styles.input}>
                <TextInput placeholder='Введите текст'
                           autoCorrect={false}
                           autoCapitalize='none'
                           value={value}
                           onChangeText={setValue}/>
            </View>
            <View style={styles.btn}>
                <Button title='+'
                        color='green'
                        onPress={handlePres}/>
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
    input: {
        width: '50%',
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
    },
    btn: {
        width: '40%',
    }
})