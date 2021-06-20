import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const CardHistoryBook = () => {
    return (
        <View style={styles.page}>
            <View style={styles.content}>
            <Text style={styles.txt}>20-06-2021</Text>
            <Text style={styles.txtitle}>Booking Futsal</Text>
            <Text style={styles.txt}>17.00</Text>
            </View>
           
        </View>
    )
}

export default CardHistoryBook;

const styles = StyleSheet.create({
    page: {
        justifyContent: 'center',
       paddingHorizontal: 20,
        width: 301,
        height: 60,
        paddingVertical: 8,
      backgroundColor: '#E5E5E5',
      marginBottom: 15
    },
    content: {
     
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    txt: {
        fontFamily: 'Poppins-Medium'
    },
    txtitle: {
        fontFamily: 'Poppins-Bold'
    }
})
