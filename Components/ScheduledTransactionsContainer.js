import React from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import ScheduledTransactionsItemCard from './ScheduledTransactionItemCard'

const ScheduledTransactionsContainer = () => {
    return (
        <View style={styles.MainContainer}>
            <Text style={styles.Header}>Scheduled Transactions</Text>
            <View style={{ display: 'flex', flexDirection: 'row' }}>
                <View>
                    <TouchableOpacity style={styles.AddButton}>
                        <Image style={styles.AddBtnIcon} source={require('../Assets/Icons/AddSTBtnIcon.png')} />
                        <Text style={styles.AddBtnText}>ADD</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView showsHorizontalScrollIndicator={false} style={styles.STCardView} horizontal={true}>
                    <ScheduledTransactionsItemCard />
                    <ScheduledTransactionsItemCard />
                </ScrollView>
            </View>
        </View>
    )
}

export default ScheduledTransactionsContainer

const styles = StyleSheet.create({
    MainContainer: {
        display: 'flex',
        flexDirection: 'column',
        padding: 10
    },
    Header: {
        fontWeight: '700',
        fontSize: 20,
        padding: 10
    },
    AddButton: {
        display: 'flex',
        flexDirection: 'column',
        borderWidth: 1,
        height: 120,
        width: 80,
        borderRadius: 15,
        backgroundColor: '#2D2D2D',
        alignItems: 'center',
        justifyContent: 'center'
    },
    AddBtnIcon: {
        width: 40,
        height: 40,
    },
    AddBtnText: {
        color: 'white',
        fontWeight: '700',
        marginTop: 10
    },
    STCardView: {
        display: 'flex',
        flexDirection: 'row',
        marginLeft: 10
    }
})
