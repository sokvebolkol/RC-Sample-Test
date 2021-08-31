import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

const ReadMoreScreen = () => {
    return (
        <View style={{flex: 1}}>
             <WebView source={{ uri: 'https://sokvebol-kol.netlify.app/' }} />
        </View>
    )
}
export default ReadMoreScreen;
