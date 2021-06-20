import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const CardProf = ({title}) => {
    return (
        <>
        <TouchableOpacity style={styles.page}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.icon}>></Text>
           
        </TouchableOpacity>
         <View style={styles.border}></View>
         </>
       
    )
}

export default CardProf;

const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        justifyContent:'space-between',
        paddingTop: 25
    },
    title: {
        fontFamily: 'Poppins-Bold',
        fontSize: 16
    },
    desc: {
        fontFamily: 'Poppins-Bold',
        fontSize: 16
    },
    border: {
        borderWidth: 1,
        borderColor: '#D5D3D3',
       marginTop: 13
      },
})
