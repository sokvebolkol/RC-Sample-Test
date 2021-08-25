import React from 'react';
import MapView, { PROVIDER_GOOGLE, MapViewProps } from 'react-native-maps';
import { useTheme } from '@react-navigation/native';
import colors from '../../common/colors';

const CustomMapView: React.ElementType<MapViewProps> = React.forwardRef(({ children, ...props }, ref) => {
  const { mapStyle } = useTheme();

  const  initialMapRegion = {
    latitude: 11.558121,
    longitude: 104.908976,
    // latitudeDelta,
    // longitudeDelta,
  };

  return (
    <MapView
      ref={ref}
      provider={PROVIDER_GOOGLE}
      initialRegion={initialMapRegion}
      customMapStyle={mapStyle}
      followsUserLocation={false}
      showsMyLocationButton={false}
      showsBuildings={false}
      showsTraffic={false}
      toolbarEnabled={false}
      pitchEnabled={false}
      showsCompass={false}
      showsIndoors={false}
      showsPointsOfInterest={false}
      loadingEnabled
      loadingIndicatorColor={colors.primary}
      {...props}>
      {children}
    </MapView>
  );
});

export default CustomMapView;
