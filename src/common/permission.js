import { Alert, Platform } from 'react-native';
import { check, request, openSettings, RESULTS, PERMISSIONS } from 'react-native-permissions';

const parseResult = (result) => {
  switch (result) {
    case RESULTS.GRANTED:
      return {
        granted: true,
      };
    case RESULTS.BLOCKED:
      return {
        blocked: true,
      };
    case RESULTS.UNAVAILABLE:
      return {
        invalid: true,
      };
    case RESULTS.DENIED:
      return {
        denied: true,
      };
    default:
      return {};
  }
};

function requestPermission(permission, { blockedMessage } = {}) {
  return new Promise((resolve, reject) => {
    check(permission)
      .then((result) => {
        switch (result) {
          case RESULTS.GRANTED:
            resolve(parseResult(result));
            break;
          case RESULTS.DENIED:
            request(permission)
              .then((result) => {
                resolve(parseResult(result));
              })
              .catch(reject);
            break;
          case RESULTS.BLOCKED:
            if (blockedMessage) {
              Alert.alert(null, blockedMessage, [
                {
                  text: 'Cancel',
                  onPress: () => resolve(parseResult(result)),
                },
                {
                  text: 'OK',
                  onPress: () => {
                    resolve(parseResult(result));
                    requestAnimationFrame(() => {
                      if (Platform.OS == 'ios') {
                        openSettings();
                      } else if (Platform.OS == 'android') {
                        const AndroidOpenSettings = require('react-native-android-open-settings');
                        AndroidOpenSettings.appDetailsSettings();
                      }
                    });
                  },
                },
              ]);
            }
            break;
          case RESULTS.UNAVAILABLE:
            resolve(parseResult(result));
            break;
        }
      })
      .catch(reject);
  });
}

function requestLocationPermission(isRequired = true) {
  return requestPermission(
    Platform.select({
      ios: PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
      android: PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
    }),
    {
      blockedMessage: isRequired ? 'Do you want the app access your location?': null,
    },
  );
}

export { requestPermission, requestLocationPermission };
