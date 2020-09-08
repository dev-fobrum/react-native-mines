import React from 'react'
import { View, StyleSheet } from 'react-native'

import Field from './Field'

const MineField = (props) => {
    const rows = props.board.map((row, r) => {
        const columns = row.map((field, c) => {
            return <Field
                {...field}
                key={c}
                onOpen={() => props.onOpenField(r, c)}
                onSelect={() => props.onSelect(r, c)}
            />
        })

        return <View style={{ flexDirection: 'row' }} key={r}>{columns}</View>
    })

    return (
        <View style={styles.container}>
            {rows}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#EEE',
        paddingBottom: 5
    }
})

export default MineField