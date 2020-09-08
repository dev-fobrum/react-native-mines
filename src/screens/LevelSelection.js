import React from 'react'
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    Modal
} from 'react-native'

const LevelSelection = (props) => {
    return (
        <Modal
            onRequestClose={props.onCancel}
            visible={props.isVisible}
            animationType='slide'
            transparent={true}
        >
            <View style={styles.frame}>
                <View style={styles.container}>
                    <Text style={styles.title}>Select the difficulty</Text>

                    <TouchableOpacity
                        style={[styles.button, styles.bgEasy]}
                        onPress={() => props.onLevelSelected(0.1)}
                    >
                        <Text style={styles.buttonLabel}>Easy</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.button, styles.bgNormal]}
                        onPress={() => props.onLevelSelected(0.2)}
                    >
                        <Text style={styles.buttonLabel}>Normal</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.button, styles.bgHard]}
                        onPress={() => props.onLevelSelected(0.3)}
                    >
                        <Text style={styles.buttonLabel}>Hard</Text>
                    </TouchableOpacity>

                    <View style={styles.divisor} />

                    <View style={[styles.container, styles.controlContainer]}>
                        <TouchableOpacity style={styles.closeButton} onPress={props.onClose}>
                            <Text style={styles.closeButtonLabel}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>


            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    frame: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)'
    },
    container: {
        backgroundColor: '#EEE',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    button: {
        width: 100,
        marginTop: 10,
        padding: 5,
        borderRadius: 10
    },
    buttonLabel: {
        fontSize: 20,
        textAlign: 'center',
        color: '#EEE',
        fontWeight: 'bold'
    },
    bgEasy: {
        backgroundColor: '#49B65D'
    },
    bgNormal: {
        backgroundColor: '#2765F7'
    },
    bgHard: {
        backgroundColor: '#F26337'
    },
    controlContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    closeButton: {
        padding: 10,
        backgroundColor: '#00CC00',
        borderRadius: 10,
    },
    closeButtonLabel: {
        color: '#FFF'
    }
})

export default LevelSelection