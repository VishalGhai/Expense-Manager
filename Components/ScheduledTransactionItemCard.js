import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const ScheduledTransactionItemCard = () => {
    return (
        <View style={styles.CardContainer}>

            <View style={styles.Header}>
                <Text style={{ flex: 4, fontWeight: '700', fontSize: 20 }}>Heading</Text>
                <TouchableOpacity style={{ flex: 1, height: 25, width: 25 }}>
                    <Image style={{ width: 25, height: 25 }} source={require('../Assets/Icons/GreenTickIcon.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={{ flex: 1, height: 25, width: 25 }}>
                    <Image style={{ width: 25, height: 25 }} source={require('../Assets/Icons/RedCrossIcon.png')} />
                </TouchableOpacity>
            </View>

            <View style={styles.DescriptionContainer}>
                <Text style={{ color: 'grey' }}>Description</Text>
            </View>

            <View style={styles.Footer}>
                <View style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <Text style={{ color: '#2d2d2d', fontSize: 12, fontWeight: '700' }}>12 JUN 2021</Text>
                    <Text style={{ color: '#2d2d2d', fontSize: 12, fontWeight: '700' }}>12 : 12</Text>
                </View>
                <View style={{ display: 'flex', justifyContent: 'flex-end', flex: 1, alignItems: 'flex-end' }}>
                    <Text style={{ color: '#2d2d2d', fontSize: 20, fontWeight: '700' }}>1200.00</Text>
                </View>
            </View>

        </View>
    )
}

export default ScheduledTransactionItemCard

const styles = StyleSheet.create({
    CardContainer: {
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 10,
        width: 200,
        margin: 10,
        display: 'flex',
        flexDirection: 'column',
        padding: 10,
    },
    Header: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row'
    },
    DescriptionContainer: {
        flex: 1,
    },
    Footer: {
        flex: 1,
        alignItems: 'flex-end',
        display: 'flex',
        flexDirection: 'row'
    }
})
