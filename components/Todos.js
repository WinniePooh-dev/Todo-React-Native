import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';

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
                                    <Text style={e.done ?
                                        {...todo_title, ...todo_title_done} : e.important ?
                                        {...todo_title, ...todo_title_important} : todo_title}>{e.title}
                                    </Text>
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
        borderColor: '#eee',
        borderWidth: 1,
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