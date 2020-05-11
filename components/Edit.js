import React, { useState, useEffect } from 'react';
import { Modal, View, TextInput, Button, StyleSheet } from 'react-native';

export const Edit = ({ visible, onCancel, id, title, handleSave }) => {

    const [value, setValue] = useState('');
    const [disabled, setDisabled] = useState(false)

    useEffect(() => {
        setValue(title)
    }, [title])

    useEffect(() => {
        if (value.trim().length) {
            setDisabled(false)
        }
    }, [value])

    const onSave = () => {
        if (value.trim().length) {
            handleSave(id, value)
            setValue(title)
        }
        else {
            setDisabled(true)
        }
    }

    return (
        <Modal visible={visible} animationType='slide'>
            <View style={styles.edit}>
                <TextInput style={styles.input}
                           value={value}
                           onChangeText={setValue}
                           maxLength={64}/>
                <View style={styles.buttons}>
                    <Button title='Отменить' onPress={onCancel} color='#a55b61'/>
                    <Button title='Сохранить' color='#34768c' onPress={onSave} disabled={disabled}/>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    edit: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'ivory'
    },
    input: {
        width: '80%',
        borderColor: '#292929',
        backgroundColor: 'rgba(227, 97, 44, .5)',
        borderWidth: 1,
        color: 'ivory',
        fontSize: 22,
        padding: 10,
        borderRadius: 7,
        borderStyle: 'dashed',
    },
    buttons: {
        width: '100%',
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-around',
    }
})