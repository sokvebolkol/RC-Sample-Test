import React from 'react';
import {StyleSheet, View, Text, Image, ScrollView} from 'react-native';
import colors from '../../common/colors';

const DeliveryDetailScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container}>
        <View style={styles.driverProfile}>
          <Image
            style={styles.image}
            source={{
              uri:
                'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR_BSXPlBjoBeJruSaCamv7kQuMNjoIIWX0CITXUVoapFCbRM9g',
            }}
          />
          <View style={{paddingHorizontal: 20}}>
            <Text style={{fontSize: 13}}>Leonel Messi</Text>
            <Text style={{fontSize: 10, color: colors.placeholder}}>
              Honda Dream 2021
            </Text>
          </View>
        </View>
        <View style={{backgroundColor: '#fff', height: 210}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              backgroundColor: '#fff',
            }}>
            <View
              style={{
                padding: 15,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: colors.placeholder,
                  fontSize: 12,
                  paddingVertical: 5,
                }}>
                Delivery Fee
              </Text>
              <Text style={{fontWeight: 'bold'}}>$1.00</Text>
            </View>
            <View
              style={{
                padding: 15,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: colors.placeholder,
                  fontSize: 12,
                  paddingVertical: 5,
                }}>
                Taxi/Bus Fee
              </Text>
              <Text style={{fontWeight: 'bold'}}>$0.6.00</Text>
            </View>
            <View
              style={{
                padding: 15,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: colors.placeholder,
                  fontSize: 12,
                  paddingVertical: 5,
                }}>
                Cash on Delivery
              </Text>
              <Text style={{fontWeight: 'bold'}}>$.20.00</Text>
            </View>
          </View>
          <Image
            style={styles.package}
            source={{
              uri:
                'https://static.highsnobiety.com/thumbor/fIuRY1m-OfEfs7LvmjQzgYHHAX0=/1600x1067/static.highsnobiety.com/wp-content/uploads/2021/02/12163548/air-jordan-1-university-blue-release-info-02.jpg',
            }}
          />
        </View>
        <View
          style={{
            width: '100%',
            height: 140,
            padding: 10,
            backgroundColor: '#fff',
          }}>
          <Text style={{color: 'orange', paddingVertical: 10}}>
            Receiver Information
          </Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{justifyContent: 'space-evenly'}}>
              <Text
                style={{
                  fontSize: 12,
                  color: colors.placeholder,
                  paddingVertical: 5,
                }}>
                Remark
              </Text>
              <Text>.....</Text>
              <Text
                style={{
                  fontSize: 12,
                  color: colors.placeholder,
                  paddingVertical: 5,
                }}>
                Location
              </Text>
              <Text style={{fontWeight: 'bold'}}>Toul Kork</Text>
            </View>
            <View style={{justifyContent: 'center'}}>
              <Text
                style={{
                  fontSize: 12,
                  color: colors.placeholder,
                  paddingVertical: 5,
                }}>
                Phone Number
              </Text>
              <Text>090292922</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: 140,
            padding: 10,
            backgroundColor: '#fff',
          }}>
          <Text style={{color: 'orange', paddingVertical: 10}}>
            Sender Information
          </Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{justifyContent: 'space-evenly'}}>
              <Text style={{fontSize: 12, color: colors.placeholder}}>
                Remark
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  color: colors.placeholder,
                  paddingVertical: 5,
                }}>
                Real Madrid shop
              </Text>
              <Text style={{fontWeight: 'bold'}}>Toul Kork</Text>
            </View>
            <View style={{justifyContent: 'center'}}>
              <Text
                style={{
                  fontSize: 12,
                  color: colors.placeholder,
                  paddingVertical: 5,
                }}>
                Phone Number
              </Text>
              <Text>090222922</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: 110,
            padding: 10,
            backgroundColor: '#fff',
          }}>
          <Text style={{color: 'orange', paddingVertical: 10}}>
            Date && Time
          </Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{justifyContent: 'space-evenly'}}>
              <Text
                style={{
                  fontSize: 12,
                  color: colors.placeholder,
                  paddingVertical: 5,
                }}>
                Create Delivery at
              </Text>
              <Text style={{fontWeight: 'bold'}}>31 Jun 2021 09:01 AM</Text>
            </View>
            <View style={{justifyContent: 'center'}}>
              <Text
                style={{
                  fontSize: 12,
                  color: colors.placeholder,
                  paddingVertical: 5,
                }}>
                Phone Number
              </Text>
              <Text>090293922</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default DeliveryDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  driverProfile: {
    backgroundColor: 'white',
    padding: 10,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderColor: colors.placeholder,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 2,
    borderColor: colors.primary,
  },
  package: {
    width: 100,
    height: 100,
    borderRadius: 15,
    marginHorizontal: 15,
  },
});
