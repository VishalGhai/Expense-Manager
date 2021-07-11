import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import TransactionItemView from './TransactionItemView'

const RecentTransactionsHomeView = () => {
    return (
        <View style={styles.RecentTransactionsHomeViewContainer}>

            <Text style={{ fontSize: 22, fontWeight: '700', padding: 10 }}>Recent Transactions</Text>
            <View style={styles.TransactionContainer}>
                {/* <Text style={{ textAlign: 'center', padding: 10 }}>No Transactions Yet...</Text> */}
                <TransactionItemView />
                <TransactionItemView />
                <TransactionItemView />
            </View>
            <TouchableOpacity style={{ textAlign: 'center' }}>
                <Text style={{ textAlign: 'center', marginHorizontal: 135, backgroundColor: 'white', padding: 5, paddingLeft: -5, borderRadius: 20, borderWidth: 1, borderColor: 'grey' }} >SHOW MORE</Text>
            </TouchableOpacity>
        </View>
    )
}

export default RecentTransactionsHomeView

const styles = StyleSheet.create({
    RecentTransactionsHomeViewContainer: {
        display: 'flex',
        flexDirection: 'column'
    },
    TransactionContainer: {
        minHeight: 50
    }
})
