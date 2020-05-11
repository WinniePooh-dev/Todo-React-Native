import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { CocaColaText } from './ui/CocaColaText';

export const Todos = ({ todos, onRemove, onUpdate }) => {

    const { todo_title, todo_title_done, todo_title_important } = styles;

    return (
        <View>
            {todos.map(e => (
                    <TouchableWithoutFeedback key={e.id}>
                            <TouchableOpacity activeOpacity={.5}
                                              onLongPress={() => onRemove(e.id)}
                                              onPress={onUpdate.bind(null, e.id)}>
                                <View key={e.id} style={styles.todo}>
                                    <CocaColaText style={e.done ? {...todo_title, ...todo_title_done} : e.important ?
                                                          {...todo_title, ...todo_title_important} : todo_title}>{e.title}</CocaColaText>
                                </View>
                            </TouchableOpacity>
                    </TouchableWithoutFeedback>
                )
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    todo: {
        padding: 10,
        borderColor: '#292929',
        backgroundColor: '#eee',
        borderWidth: 1,
        borderStyle: 'dashed',
        // flexDirection: 'row',
        // alignItems: 'center',
        borderRadius: 5,
        marginBottom: 3,
    },
    todo_title: {
        color: '#377a8d',
        textAlign: 'justify',
        fontSize: 22,
        fontStyle: 'italic'
    },
    todo_title_done: {
        textDecorationLine: 'line-through',
        textDecorationStyle: 'solid'
    },
    todo_title_important: {
        color: 'tomato',
        fontWeight: 'bold'
    }
})