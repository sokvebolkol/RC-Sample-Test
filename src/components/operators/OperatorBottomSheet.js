import React, {
  useCallback,
  useEffect,
  memo,
  useState,
  useMemo,
  forwardRef,
  useImperativeHandle,
} from 'react';
import {
  ActivityIndicator,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  FlatList,
  Text,
} from 'react-native';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import OperatorListItem, {MAX_HEIGHT as ITEM_HEIGHT} from './OperatorListItem';
import colors from '../../common/colors';

const OperatorBottomSheet = memo(
  forwardRef(({}, ref) => {
    const [selectedId, setSelectedId] = useState(true);
    const [visible, setVisible] = useState(false);
    const {bottom} = useSafeAreaInsets();

    const operators = [
      {
        id: 1,
        name: 'PAPA Deliver',
        phone_number: '070533300',
        operator_code: 'PAP',
        image:
          'https://logos-world.net/wp-content/uploads/2020/06/PSG-emblem.png',
      },
    ];

    const renderItem = useCallback(
      ({item, index}) => {
        return (
          <OperatorListItem
            name={item.name}
            logo={item.logo}
            isSelected={selectedId === item.id}
            onPress={() => {
              setSelectedId(item.id);
            }}
            // showLineDivider={index < operators.length - 1}
          />
        );
      },
      [selectedId, setSelectedId],
    );

    const renderHeader = useCallback(() => {
      return (
        <View style={styles.headerContainer}>
          <Text>Select Agents</Text>
          <Text>Total agents 5</Text>
        </View>
      );
    }, [bottom]);

    const renderContent = useCallback(
      () => (
        <View
          style={{
            backgroundColor: 'white',
            height: 300,
            justifyContent: 'center',
          }}>
          <FlatList
            data={operators}
            keyExtractor={(item, index) => item + index}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={null}
          />
          )
        </View>
      ),
      [bottom, renderItem],
    );

    return (
      <Modal
        visible={visible}
        animationType="none"
        transparent
        onRequestClose={() => {
          setVisible(false);
        }}>
        <View style={styles.container}>
          <TouchableWithoutFeedback
            onPress={() => {
              setVisible(false);
            }}>
            <View style={StyleSheet.absoluteFill} />
          </TouchableWithoutFeedback>
          <SafeAreaView
            style={{
              borderTopLeftRadius: 24,
              borderTopRightRadius: 24,
              backgroundColor: 'white',
              paddingHorizontal: 17,
            }}
            edges={['bottom']}>
            {renderHeader()}
            {renderContent()}
            {/* <PrimaryGradientButton
              text={t('pickup-request.button.book')}
              disabled={!selectedId}
              onPress={_handleBookNow}
              style={{
                marginVertical: 16,
              }}
            /> */}
          </SafeAreaView>
        </View>
      </Modal>
    );
  }),
);

export default OperatorBottomSheet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 62,
    backgroundColor: 'white',
    borderBottomColor: colors.DIVIDER_LINE,
    borderBottomWidth: 1,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
});
