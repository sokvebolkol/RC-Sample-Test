import React from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import BrandingHeadBar from '../components/BrandingHeadBar';
import color from '../common/colors';
import colors from '../utils/Colors';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <BrandingHeadBar />
        <View style={styles.bottomContainer}>
          <Text style={styles.txtFee}>1$</Text>
          <Text style={styles.text}>Promotion for everywhere</Text>
          <TouchableOpacity style={styles.btnReadMore}>
            <Text style={styles.readMore}>Read More</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    paddingHorizontal: 17,
  },
  bottomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor:color.readed,
    borderBottomWidth:0.5,
    paddingBottom: 13,
    paddingTop: 4,
  },
  text: {
    flex: 1,
    fontSize: 14,
    color: colors.ORANGE,
    fontStyle: 'italic',
    lineHeight: 18,
    marginLeft: 11,
  },
  txtFee: {
    fontSize: 39,
    color: 'orange',
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
  btnReadMore: {
    width: 150,
    height: 40,
    borderWidth: 1,
    borderColor: color.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  readMore: {
    color: color.primary,
    fontWeight: 'bold',
  },
});
