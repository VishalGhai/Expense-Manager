import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import TitleBar from '../Components/TitleBar'

const Transactions = ({ route }) => {

    // const params = navigation.getParam('title', 'default')

    console.log(route.params?.title)

    return (
        <View>
            <TitleBar />
            <TitleBar />
            <TitleBar />
        </View>
    )
}

export default Transactions

const styles = StyleSheet.create({})
