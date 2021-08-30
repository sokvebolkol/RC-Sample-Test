import React, { ElementType, useState } from 'react';
import { View, StyleSheet, StyleProp, ViewStyle, Image, ImageURISource,Text } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import TextInput, { AppTextInputProps as ParentProps } from '../components/AppTextInput';
import colors from '../common/colors';
import Icon from 'react-native-vector-icons/Ionicons';

export interface AppTextInputProps extends ParentProps {
  containerStyle?: StyleProp<ViewStyle>;
  innerContainerStyle?: StyleProp<ViewStyle>;
  iconName?: string;
  leadingImage?: ImageURISource;
  errorText?: string;
  LeadingComponent?: ElementType<any>;
}

const AppTextInput: ElementType<AppTextInputProps> = React.forwardRef(
  (
    {
      style,
      containerStyle,
      innerContainerStyle,
      underlineColorAndroid,
      multiline,
      iconName,
      leadingImage,
      LeadingComponent,
      renderTailing,
      onFocus,
      onBlur,
      errorText,
      ...restProps
    },
    ref,
  ) => {
    const [isFocused, setFocus] = useState(false);

    return (
      <View style={StyleSheet.flatten(containerStyle)}>
        <View
          style={[
            styles.container,
            multiline
              ? { minHeight: 10, alignItems: 'center' }
              : { height: 10 },
            errorText ? { borderColor: 'red' } : isFocused ? { borderColor: colors.primary } : null,
            StyleSheet.flatten(innerContainerStyle),
          ]}>
          {LeadingComponent ? <LeadingComponent /> : null}
          {iconName ? (
            leadingImage ? null : (
              <View
                style={[
                  styles.leadingIconContainer,
                  multiline && {
                    justifyContent: 'flex-start',
                    height: '100%',
                    paddingTop: wp(3.7),
                  },
                ]}>
                <Image source={leadingImage} style={styles.leadingImage} resizeMod="contain" />
              </View>
            )
          ) : (
            <View
              style={[
                styles.leadingIconContainer,
                multiline && {
                  justifyContent: 'flex-start',
                },
              ]}>
              <Icon name={iconName} style={styles.leadingIcon} />
            </View>
          )}
          <TextInput
            ref={ref}
            multiline={multiline}
            {...restProps}
            underlineColorAndroid="transparent"
            style={[
              styles.textInput,
              multiline && {
                marginTop: wp(3.6),
                marginBottom: wp(3.4),
                paddingTop: 0,
                paddingBottom: 0,
                textAlignVertical: 'top',
              },
              StyleSheet.flatten(style),
            ]}
            onFocus={(event) => {
              setFocus(true);
              onFocus && onFocus(event);
            }}
            onBlur={(event) => {
              setFocus(false);
              onBlur && onBlur(event);
            }}
          />
          {renderTailing ? renderTailing() : null}
        </View>
        {errorText ? (
          <Text
            style={{
              color: 'red',
              marginHorizontal: wp(3),
              marginTop: wp(2),
            }}
            numberOfLines={2}>
            {errorText}
          </Text>
        ) : null}
      </View>
    );
  },
);

export default AppTextInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 26,
  },
  leadingIconContainer: {
    marginEnd: 16,
    justifyContent: 'center',
  },
  leadingIcon: {
    fontSize: wp(8),
    color: '#B8BFCC',
  },
  leadingImage: {
    width: 20,
    height: 20,
    tintColor: '#BFBFBF',
  },
  textInput: {
    flex: 1,
    paddingHorizontal: 0,
  },
});
