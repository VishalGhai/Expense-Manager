import React, { useState } from 'react'
import { Image, ImageBackground, Keyboard, KeyboardAvoidingView, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

const SignUpScreen = () => {


    return (
        <TouchableWithoutFeedback style={{ flex: 1 }} onPress={Keyboard.dismiss}>
            <ImageBackground style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} source={require('../Assets/Images/LogInScreenBG.png')}>
                <Image source={require('../Assets/Icons/MainAppIcon.png')} style={{ width: 100, height: 100 }} />
                <View style={styles.InputContainer}>
                    <TextInput style={styles.Input} placeholder="Enter Username" placeholderTextColor="lightgrey" ></TextInput>
                    <TextInput style={styles.Input} placeholder="Enter Email" placeholderTextColor="lightgrey" ></TextInput>
                    <TextInput style={styles.Input} placeholder="Enter Password" placeholderTextColor="lightgrey" ></TextInput>
                </View>
                <TouchableOpacity style={{ width: 180, height: 60 }}>
                    <ImageBackground style={{ width: '100%', height: '100%' }} source={require('../Assets/Images/SignUpBtnActive.png')} />
                </TouchableOpacity>
                <View style={{ display: 'flex', flexDirection: 'row', marginTop: 50 }}>
                    <TouchableOpacity style={{ width: 150, height: 60 }}>
                        <ImageBackground style={{ width: '100%', height: '100%' }} source={require('../Assets/Images/LogInBtn.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ width: 150, height: 60 }}>
                        <ImageBackground style={{ width: '100%', height: '100%' }} source={require('../Assets/Images/GoogleSignInBtn.png')} />
                    </TouchableOpacity>

                </View>
            </ImageBackground>
        </TouchableWithoutFeedback>
    )
}

export default SignUpScreen

const styles = StyleSheet.create({
    InputContainer: {
        width: '80%',
        marginTop: 40,
        marginBottom: 20
    },
    Input: {
        width: '100%',
        height: 45,
        borderColor: 'grey',
        borderRadius: 15,
        paddingHorizontal: 20,
        marginVertical: 15,
        fontSize: 22,
        color: 'black',
        elevation: 3,
        backgroundColor: 'white'
    }
})
