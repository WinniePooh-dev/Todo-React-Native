import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export const Todos = ({ todos, onRemove }) => {
    return (
        <View>
            {todos.map(e => <TouchableOpacity activeOpacity={.5}
                                              onLongPress={() => onRemove(e.id)}>
                <View key={e.id} style={styles.todo}><Text style={styles.todo_title}>{e.title}</Text>
                </View></TouchableOpacity>)}
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
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 5,
        marginBottom: 3,
    },
    todo_title: {
        color: '#377a8d',
    }
})