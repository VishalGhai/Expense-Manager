import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const TitleBar = () => {
    return (
        <View style={styles.titleContainer}>
            <View style={styles.IconImageView}>
                <Image
                    style={styles.sideBarMenuIconImage}
                    source={require('../Assets/Images/SideBarMenuIcon.png')}
                />
            </View>
            <Text style={styles.title}>Expense Manager</Text>
            <View style={styles.IconImageView}>
                <Image
                    style={{ ...styles.sideBarMenuIconImage, marginBottom: -5 }}
                    source={require('../Assets/Images/TransactionsIcon.png')}
                />
            </View>
            <View style={styles.IconImageView}>
                <Image
                    style={styles.sideBarMenuIconImage}
                    source={require('../Assets/Images/UserProfileIcon.png')}
                />
            </View>
        </View>
    );
};

export default TitleBar;

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: '700',
        flex: 3,
    },
    titleContainer: {
        display: 'flex',
        flexDirection: 'row',
        paddingTop: 15
    },
    sideBarMenuIconImage: {
        width: 30,
        height: 30,
        flex: 1,
    },
    IconImageView: {
        marginHorizontal: 10
    }
});
