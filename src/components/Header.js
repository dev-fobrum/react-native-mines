import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

import Flag from './Flag'

const Header = (props) => {
    return (
        <View style={styles.container}>


            <View style={styles.flagContainer}>
                <TouchableOpacity style={styles.flagButton} onPress={props.onRules}>
                    <Flag bigger />
                </TouchableOpacity>

                <Text style={styles.flagsLeft}>{props.flagsLeft}</Text>
            </View>

            <TouchableOpacity style={styles.button} onPress={props.onNewGame}>
                <Text style={styles.buttonLabel}>New Game</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.button, { backgroundColor: props.levelColor }]} onPress={props.onLevelSelection}>
                <Text style={styles.buttonLabel}>Level Selection</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        backgroundColor: '#EEE',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: 20,
        paddingHorizontal: 20
    },
    flagContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    flagButton: {
        marginTop: 10,
        minWidth: 30
    },
    flagTip: {
        fontSize: 12,
        width: 80
    },
    flagsLeft: {
        fontSize: 30,
        fontWeight: 'bold',
        paddingTop: 5,
        marginLeft: 20,
    },
    button: {
        backgroundColor: '#999',
        borderRadius: 10,
        padding: 5
    },
    buttonLabel: {
        fontSize: 18,
        color: '#DDD',
        fontWeight: 'bold'
    }
})

export default Header