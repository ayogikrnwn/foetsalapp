import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const CardJam = ({label, onPress}) => {

    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.title}>{label}</Text>
        </TouchableOpacity>
    )
}

export default CardJam;

const styles = StyleSheet.create({
    container: {
        width: 89,
        height: 33,
        marginLeft: 10,
        marginTop: 5,
        backgroundColor: '#E5E5E5'
    },
    title: {
        fontFamily: 'Poppins-Medium',
        textAlign: 'center'
    }
})
