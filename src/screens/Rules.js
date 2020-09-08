import React from 'react'
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    Modal
} from 'react-native'

const Rules = (props) => {
    return (
        <Modal
            onRequestClose={props.onCancel}
            visible={props.isVisible}
            animationType='slide'
            transparent={true}
        >
            <View style={styles.frame}>
                <View style={styles.container}>
                    <Text style={styles.title}>Rules</Text>

                    <Text style={styles.line}>Open all fields without trigger a mine</Text>
                    <Text style={styles.line}>Insert flags on the mined fields</Text>
                    <Text style={styles.line}>When all fields are discoverds and flaggeds you won :)</Text>
                </View>

                <View style={styles.container}>
                    <Text style={styles.title}>Tips</Text>

                    <Text style={styles.line}>The numbers inside an open field are the mines around</Text>
                </View>

                <View style={[styles.container, styles.controlContainer]}>
                    <TouchableOpacity style={styles.closeButton} onPress={props.onClose}>
                        <Text style={styles.closeButtonLabel}>Close</Text>
                    </TouchableOpacity>
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
        width: '90%',
        backgroundColor: '#EEE',
        justifyContent: 'center',
        padding: 15
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    line: {
        flexWrap: 'wrap',
        paddingBottom: 5
    },
    button: {
        marginTop: 10,
        padding: 5
    },
    buttonLabel: {
        fontSize: 20,
        color: '#EEE',
        fontWeight: 'bold'
    },
    controlContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    closeButton: {
        padding: 10,
        backgroundColor: '#00CC00',
        borderRadius: 10
    },
    closeButtonLabel: {
        color: '#FFF'
    }
})

export default Rules