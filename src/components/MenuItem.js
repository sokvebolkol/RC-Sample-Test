import React, { memo, ElementType } from 'react';
import { View, Image, TouchableOpacity, StyleSheet, ImageURISource,Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import colors from '../common/colors';

export interface MenuItemProps {
  leadingImage: ImageURISource;
  title: string;
  hasDividerLine: boolean;
  onPress?: () => void;
}

const MenuItem: ElementType<MenuItemProps> = memo(({ leadingImage, title, hasDividerLine, onPress }) => {

  return (
    <View style={[styles.container, hasDividerLine && styles.line]}>
      <TouchableOpacity style={styles.touch} onPress={onPress}>
        <Image source={leadingImage} resizeMode="contain" style={styles.leadingImage} />
        <Text style={styles.titleText} numberOfLines={1}>
          {title}
        </Text>
        <Icon name="md-chevron-forward" style={styles.arrowIcon} />
      </TouchableOpacity>
    </View>
  );
});

export default MenuItem;

const styles = StyleSheet.create({
  container: {
    height: 50,
    paddingHorizontal: 16,
    backgroundColor:'#fff'
  },
  touch: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleText: {
    marginStart: 37,
    marginEnd: 10,
    flexGrow: 1,
    flexShrink: 1,
  },
  leadingImage: {
    width: 24,
    height: 24,
  },
  line: {
    borderTopWidth: 1,
    borderTopColor: colors.dividerLine,
  },
  arrowIcon: {
    fontSize: 18,
    color: colors.placeholder,
    marginLeft: 13,
  },
});
