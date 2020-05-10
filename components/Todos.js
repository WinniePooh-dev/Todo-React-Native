import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const Todos = ({ todos }) => {
    return (
        <View>
            {todos.map(e => <View key={e.id} style={styles.todo}><Text style={styles.todo_title}>{e.title}</Text></View>)}
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