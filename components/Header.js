import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export const Header = ({ title }) => {
    return (
        <View style={styles.header}>
            <Text style={styles.header_title}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 70,
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: '#2d6681',
    },
    header_title: {
        color: 'ivory',
        fontSize: 20,
        marginBottom: 5
    }
})