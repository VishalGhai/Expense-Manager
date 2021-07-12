import React from 'react'
import TitleBar from '../Components/TitleBar'

import { Button, ScrollView, StyleSheet, Text, View } from 'react-native'
import HomeScreenStats from '../Components/HomeScreenStats'
import AddEntryComponent from '../Components/AddEntryComponent'
import RecentTransactionsHomeView from '../Components/RecentTransactionsHomeView'
import ScheduledTransactionsContainer from '../Components/ScheduledTransactionsContainer'

const HomeScreen = ({ navigation, data }) => {
    return (

        <ScrollView showsVerticalScrollIndicator={false} style={styles.mainContainerOfApp}>
            <View style={styles.TitleBarContainer}>
                <TitleBar />
            </View>
            <View style={styles.StatsContainer}>
                <HomeScreenStats />
            </View>
            <View style={styles.AddEntryContainer}>
                <AddEntryComponent />
            </View>
            <View style={styles.RecentTransactionsContainer}>
                <RecentTransactionsHomeView />
            </View>
            <View style={styles.ScheduledTransactionsContainer}>
                <ScheduledTransactionsContainer />
            </View>
        </ScrollView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    mainContainerOfApp: {
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
    },
    TitleBarContainer: {
        flex: 1,
        backgroundColor: 'white'
    },
    StatsContainer: {
        flex: 2
    },
    AddEntryContainer: {
        flex: 10,
        fontWeight: '700',
    },
    RecentTransactionsContainer: {
        minHeight: 280,
        padding: 10
    },
    ScheduledTransactionsContainer: {
        flex: 1,
        height: 200,
        borderColor: 'black',
        borderWidth: 1
    }
})
