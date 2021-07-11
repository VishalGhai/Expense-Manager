import React, { useState } from 'react'
import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import IncomeStatsBG from '../Assets/Images/IncomeStatsBG.png'
import ExpenseStatsBG from '../Assets/Images/ExpenseStatsBG.png'
import { Picker } from '@react-native-picker/picker';

const HomeScreenStats = () => {

    const [selectedValue, setSelectedValue] = useState();

    return (
        <View style={styles.StatsContainer}>
            <View style={styles.ExpenseStatsContainer}>
                <ImageBackground source={ExpenseStatsBG} style={styles.ExpenseStatsCard} imageStyle={{ borderRadius: 15, transform: [{ scale: .99 }], marginBottom: 5 }}>
                    <Text style={styles.ExpenseStatsHeader}>Expense</Text>
                    <Text style={{ fontWeight: '700', fontSize: 20, margin: 5 }} numberOfLines={1}>5,00,00,000</Text>
                    <View style={{ display: 'flex', flexDirection: 'row', flex: 2 }}>
                        <Picker style={{
                            flex: 1,
                            width: '80%', transform: [{ scaleX: 0.77 }, { scaleY: 0.77 }],
                            left: -25,
                            top: -5,
                            position: 'absolute',
                            color: 'black',
                        }}
                            selectedValue={selectedValue}
                            onValueChange={(itemValue, itemIndex) =>
                                setSelectedValue(itemValue)
                            }>
                            <Picker.Item style={{ color: 'white' }} label="Wallet" value="java" />
                            <Picker.Item style={{ color: 'white' }} label="C-1168" value="js" />
                        </Picker>
                        <Text numberOfLines={2} style={{ flex: 1, textAlign: 'right', marginTop: 10, marginRight: 5, fontWeight: '700', fontSize: 14, color: 'white' }} ellipsizeMode='tail'> 5,00,00,000</Text>

                    </View>
                </ImageBackground>
            </View>
            <View style={styles.IncomeStatsContainer}>
                <ImageBackground source={IncomeStatsBG} style={styles.IncomeStatsCard} imageStyle={{ borderRadius: 15, transform: [{ scale: .99 }], marginBottom: 5 }}>
                    <Text style={styles.IncomeStatsHeader}>Income</Text>
                    <Text style={{ fontWeight: '700', fontSize: 20, margin: 5 }} numberOfLines={1}>5,00,00,00,000</Text>
                    <View style={{ display: 'flex', flexDirection: 'row', flex: 2 }}>
                        <Picker style={{
                            width: '80%', transform: [{ scaleX: 0.77 }, { scaleY: 0.77 }],
                            top: -5,
                            left: -25,
                            position: 'absolute',
                            color: 'black',
                        }}
                            selectedValue={selectedValue}
                            onValueChange={(itemValue, itemIndex) =>
                                setSelectedValue(itemValue)
                            }>
                            <Picker.Item style={{ color: 'white' }} label="Wallet" value="java" />
                            <Picker.Item style={{ color: 'white' }} label="C-1168" value="js" />
                        </Picker>
                        <Text numberOfLines={1} style={{ flex: 1, textAlign: 'right', marginTop: 10, marginRight: 5, fontWeight: '700', fontSize: 14, color: 'white' }} > 5,00,00,000</Text>
                    </View>
                </ImageBackground>
            </View>
        </View>
    )
}

export default HomeScreenStats

const styles = StyleSheet.create({
    StatsContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        flex: 1,
        maxHeight: 125,
        minHeight: 125,
    },
    ExpenseStatsContainer: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column'
    },
    IncomeStatsContainer: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column'
    },
    ExpenseStatsCard: {
        resizeMode: 'center',
        flex: 1,
        margin: 5,
        padding: 5,
        borderWidth: 2,
        borderRadius: 15,
        borderColor: 'lightgrey',
        flex: 1,
    },
    IncomeStatsCard: {
        resizeMode: 'center',
        flex: 1,
        margin: 5,
        padding: 5,
        borderWidth: 2,
        borderRadius: 15,
        borderColor: 'lightgrey',
        flex: 1,
    },
    ExpenseStatsHeader: {
        fontWeight: '700',
        backgroundColor: '#A30000',
        width: 70,
        color: 'white',
        textAlign: 'center',
        padding: 5,
        borderRadius: 50,
        flex: 1,
    },
    IncomeStatsHeader: {
        fontWeight: '700',
        backgroundColor: '#16981B',
        width: 70,
        color: 'white',
        textAlign: 'center',
        padding: 5,
        borderRadius: 50,
        flex: 1,
    }
})
