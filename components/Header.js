import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { CustomText } from './ui/CustomText';

export const Header = ({ title }) => {
    return (
        <View style={styles.header}>
            <CustomText style={styles.header_title}>
                <Text style={styles.dino}>&#42;</Text>
                    {`${'\t'.repeat(10)}${title}${'\t'.repeat(10)}`}
                <Text style={styles.dino}>&#43;</Text>
            </CustomText>
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
        fontSize: 30,
        marginBottom: -5
    },
    dino: {
        fontSize: 50,
        fontFamily: 'Jurassic Park'
    }
})