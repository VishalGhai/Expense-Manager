import React from 'react'
import { useState } from 'react'
import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput, } from 'react-native'
import DatePicker from 'react-native-date-picker'
import { Picker } from '@react-native-picker/picker';

const AddEntryComponent = () => {

    const [date, setDate] = useState(new Date())
    const [category, selectCategory] = useState('Category')
    const [paymentMethod, setPaymentMethod] = useState('C-1111')

    return (
        <View style={styles.mainContainer}>

            <View style={styles.buttonGroupRow}>
                <View style={styles.ExpenseBtnContainer}>
                    <TouchableOpacity style={styles.ExpenseBtn} >
                        <Text style={styles.BtnInnerText}>EXPENSE</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.IncomeBtnContainer}>
                    <TouchableOpacity style={styles.IncomeBtn} >
                        <Text style={styles.BtnInnerText}>INCOME</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* <View style={styles.ExpenseTabContainer}>
                <View style={{ ...styles.FlexByRow }}>
                    <TextInput style={{ ...styles.InputBoxStyle, flex: 5 }} >hello</TextInput>
                    <TextInput style={{ ...styles.InputBoxStyle, flex: 3 }} >hello</TextInput>
                </View>
                <View style={{ ...styles.FlexByRow, }}>
                    <TextInput style={{ ...styles.InputBoxStyle, flex: 1 }} >hello</TextInput>
                </View>
                <View style={{ ...styles.FlexByRow, alignItems: 'center', justifyContent: 'center', maxHeight: 100, overflow: 'hidden' }}>
                    <DatePicker
                        date={date}
                        onDateChange={setDate}
                        mode={'datetime'}
                    />
                </View>

                <View style={{ ...styles.FlexByRow, borderWidth: 1, borderColor: 'lightgrey', margin: 10, borderRadius: 10, marginHorizontal: 20 }}>
                    <Picker
                        style={{ flex: 1, color: 'black' }}
                        selectedValue={category}
                        onValueChange={(value, index) => selectCategory(value)}
                    >
                        <Picker.Item style={{ color: 'white' }} label="Food" value="Food" />
                        <Picker.Item style={{ color: 'white' }} label="Grocery" value="Grocery" />
                    </Picker>
                </View>

                <View style={{ ...styles.FlexByRow }}>
                    <View style={{ ...styles.FlexByRow, flex: 2, borderWidth: 1, borderColor: 'lightgrey', margin: 10, borderRadius: 10, marginHorizontal: 20 }}>
                        <Picker
                            style={{ flex: 1, color: 'black' }}
                            selectedValue={paymentMethod}
                            onValueChange={(value, index) => setPaymentMethod(value)}
                        >
                            <Picker.Item style={{ color: 'white' }} label="C-1111" value="C-1111" />
                            <Picker.Item style={{ color: 'white' }} label="Wallet" value="Wallet" />
                        </Picker>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'column' }}>
                        <Text style={{ textAlign: 'right', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 1, color: 'grey', paddingHorizontal: 20, marginTop: 10, marginBottom: -10 }} >Curr. Bal.</Text>
                        <Text style={{ textAlign: 'right', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 1, color: 'grey', paddingHorizontal: 20, marginTop: -10 }} >5,00,00,000</Text>
                    </View>
                </View>

                <View style={{ ...styles.FlexByRow }}>
                    <TouchableOpacity style={{ flex: 1, backgroundColor: 'black', margin: 10, padding: 10, borderRadius: 10 }}>
                        <Text style={{ textAlign: 'center', fontWeight: '700', color: 'white' }}>ADD EXPENSE</Text>
                    </TouchableOpacity>
                </View>

            </View> */}



            <View style={styles.IncomeTabContainer}>
                <View style={{ ...styles.FlexByRow }}>
                    <TextInput style={{ ...styles.InputBoxStyle, flex: 1 }} >Amount</TextInput>
                </View>
                <View style={{ ...styles.FlexByRow, }}>
                    <TextInput style={{ ...styles.InputBoxStyle, flex: 1 }} >Description</TextInput>
                </View>
                <View style={{ ...styles.FlexByRow, alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                    <DatePicker
                        date={date}
                        onDateChange={setDate}
                        mode={'datetime'}
                    />
                </View>



                <View style={{ ...styles.FlexByRow }}>
                    <View style={{ ...styles.FlexByRow, flex: 2, borderWidth: 1, borderColor: 'lightgrey', margin: 10, borderRadius: 10, marginHorizontal: 20 }}>
                        <Picker
                            style={{ flex: 1, color: 'black' }}
                            selectedValue={paymentMethod}
                            onValueChange={(value, index) => setPaymentMethod(value)}
                        >
                            <Picker.Item style={{ color: 'white' }} label="C-1111" value="C-1111" />
                            <Picker.Item style={{ color: 'white' }} label="Wallet" value="Wallet" />
                        </Picker>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'column' }}>
                        <Text style={{ textAlign: 'right', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 1, color: 'grey', paddingHorizontal: 20, marginTop: 10, marginBottom: -10 }} >Curr. Bal.</Text>
                        <Text style={{ textAlign: 'right', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 1, color: 'grey', paddingHorizontal: 20, marginTop: -10 }} >5,00,00,000</Text>
                    </View>
                </View>

                <View style={{ ...styles.FlexByRow }}>
                    <TouchableOpacity style={{ flex: 1, backgroundColor: 'black', margin: 10, padding: 10, borderRadius: 10 }}>
                        <Text style={{ textAlign: 'center', fontWeight: '700', color: 'white' }}>ADD EXPENSE</Text>
                    </TouchableOpacity>
                </View>

            </View>


        </View>
    )
}

export default AddEntryComponent

const styles = StyleSheet.create({
    mainContainer: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: 300,
        overflow: 'hidden',
        margin: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'grey'
    },
    InputBoxStyle: {
        color: 'black',
        borderWidth: 1,
        borderColor: 'lightgrey',
        margin: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 10
    },
    FlexByRow: {
        display: 'flex',
        flexDirection: 'row'
    },
    FlexByColumn: {
        display: 'flex',
        flexDirection: 'column'
    },
    buttonGroupRow: {
        display: 'flex',
        flexDirection: 'row',
    },
    ExpenseBtnContainer: {
        flex: 1,
        padding: 10,
        paddingHorizontal: 20
    },
    IncomeBtnContainer: {
        flex: 1,
        padding: 10,
        paddingHorizontal: 20
    },
    ExpenseBtn: {
        backgroundColor: 'black',
        padding: 7,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'white'
    },
    IncomeBtn: {
        backgroundColor: 'black',
        padding: 7,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'white'
    },
    BtnInnerText: {
        color: 'white',
        textAlign: 'center'

    },
    ExpenseTabContainer: {
        display: 'flex',
        flexDirection: 'column',
    },
    IncomeTabContainer: {
        display: 'flex',
        flexDirection: 'column',
    }
})
