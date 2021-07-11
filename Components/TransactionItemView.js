import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const TransactionItemView = () => {
    return (
        <View style={styles.ItemViewContainer}>
            <View style={{ ...styles.FlexByColumn, flex: 5 }}>
                <View style={{ ...styles.FlexByRow, flex: 1 }}>
                    <Text style={{ flex: 2, fontSize: 18, fontWeight: '500', padding: 5 }} numberOfLines={1}>Heading</Text>
                    <Text style={{ flex: 3, padding: 5, overflow: 'hidden', color: 'lightgrey' }} numberOfLines={1}>Description</Text>
                    <Image source={require('../Assets/Images/DownArrowRed.png')} style={{ flex: 1, padding: 5, overflow: 'hidden', maxHeight: 20, maxWidth: 20, marginTop: 5, marginRight: 5 }} />
                </View>
                <View style={{ ...styles.FlexByRow, flex: 1 }}>
                    <Text style={{ flex: 3, padding: 5, overflow: 'hidden', color: 'lightgrey' }} numberOfLines={1}>Time</Text>
                </View>
            </View>
            <View style={{ ...styles.FlexByColumn, flex: 3 }}>
                <Text style={{ flex: 1, fontSize: 18, fontWeight: '500', padding: 5, textAlign: 'right', marginBottom: -10 }} numberOfLines={1}>Date</Text>
                <Text style={{ flex: 1, padding: 5, overflow: 'hidden', color: 'lightgrey', textAlign: 'right', marginTop: -10 }} numberOfLines={1}>Time</Text>
            </View>
        </View >
    )
}

export default TransactionItemView

const styles = StyleSheet.create({
    ItemViewContainer: {
        display: 'flex',
        flexDirection: 'row',
        minHeight: 70,
        paddingHorizontal: 10
    },
    FlexByRow: {
        display: 'flex',
        flexDirection: 'row'
    },
    FlexByColumn: {
        display: 'flex',
        flexDirection: 'column'
    }
})
