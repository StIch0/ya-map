import React, { useCallback, useEffect, useRef } from 'react';

import {
  PermissionsAndroid,
  UIManager,
  findNodeHandle,
  requireNativeComponent,
} from 'react-native';
import { ArrItem, arr } from './constants';

const RCTCustomView = requireNativeComponent('YaMapVC');

const requestCameraPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Location Permission',
        message: 'App needs access to your location ',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
    } else {
    }
  } catch (err) {
    console.warn(err);
  }
};

const ExampleScreen = () => {
  const nativeRef = useRef(null);

  const setCenter = useCallback((point: ArrItem['pos'], zoom: number) => {
    UIManager.dispatchViewManagerCommand(
      findNodeHandle(nativeRef.current),
      'setCenter',
      [point, zoom],
    );
  }, []);

  useEffect(() => {
    requestCameraPermission();
  }, []);

  useEffect(() => {
    // setCenter(
    //   {
    //     lat: 48.4814433,
    //     lon: 135.0720667,
    //   },
    //   12,
    // );
  }, []);

  return (
    <RCTCustomView
      ref={nativeRef}
      onCameraPositionChangedEnd={(a) => {
        console.log('a', a.nativeEvent);
      }}
      style={{ flex: 1 }}
      pointsJson={JSON.stringify(arr)}
      zoom={12}
      onPressMarker={(a) => {
        console.log(a.nativeEvent);
      }}
      styleJson={JSON.stringify([
        {
          // featureType: 'all',
          stylers: {
            saturation: -1,
            lightness: 0.25,
          },
        },
      ])}
      onMapPressed={() => {
        console.log('onMapPressed');
      }}
    />
  );
};

export { ExampleScreen };
