import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, Linking, ScrollView } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { useIsFocused } from '@react-navigation/core';
import colors from '../../common/colors';

const NotificationDetailScreen = ({ route }) => {
    // const id = route.params.id;
    const isFocused = useIsFocused();

    return (
        <View style={styles.container}>

            <ScrollView
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                style={styles.scrollView}>
                {/* {notification?.image ? (
                    <Image source={{ uri: notification ? notification.image : null }} style={styles.image} />
                ) : null}
                <Text style={styles.title}>{notification ? notification.title : null}</Text> */}
            </ScrollView>
        </View>
    );
};
export default NotificationDetailScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        paddingBottom: wp(2),
    },
    scrollView: {
        flex: 1,
        paddingHorizontal: wp(5),
    },
    image: {
        width: wp(90),
        height: wp(50),
        resizeMode: 'contain',
        marginTop: wp(2),
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        paddingVertical: wp(5),
    },
});
