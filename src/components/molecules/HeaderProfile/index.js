import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { pictprof } from '../../../assets'

const HeaderProfile = () => {
    return (
        <View style={styles.container}>
            <Image source={pictprof} style={styles.img} />
            <Text style={styles.name}>Ayogi Kurniawan</Text>
        </View>
    )
}

export default HeaderProfile;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center'
    },
    img: {
        width: 150,
        height: 140
    },
    name: {
        fontFamily: 'Poppins-Bold',
        color: 'white',
        fontSize: 24,
        marginTop: 13
    }
})
