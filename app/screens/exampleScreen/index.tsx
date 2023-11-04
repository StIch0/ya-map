import React, { useEffect, useRef, useState } from 'react';

import { ExampleView } from './components/ExampleView';

import {
  Pressable,
  SafeAreaView,
  Text,
  UIManager,
  findNodeHandle,
  requireNativeComponent,
} from 'react-native';
import { ViewProps } from '@app/ui/components/View';
import { ArrItem, arr, partners } from './constants';

export const RCTCustomView = requireNativeComponent<
  ViewProps & { pointsJson?: string; statusA?: boolean }
>('YaMapVC');

const ExampleScreen = ({ navigation }) => {
  const ref = useRef(null);

  const setCenter = (point: ArrItem['pos'], zoom: number) => {
    UIManager.dispatchViewManagerCommand(
      findNodeHandle(ref.current),
      UIManager.getViewManagerConfig('YaMapVC').Commands.setCenter,
      [point, zoom],
    );
  };

  // useEffect(() => {
  //   if (zoom >= 9) {
  //     setList((prev) => prev.concat(secondPart));
  //   } else if (zoom >= 12) {
  //     setList((prev) => prev.concat(thridtPart));
  //   }
  // }, [zoom]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Pressable
        onPress={() => {
          navigation.navigate('ExampleScreenFull');
        }}
        style={{
          padding: 10,
          backgroundColor: 'red',
          zIndex: 1,
          position: 'absolute',
          top: 10,
          left: 10,
        }}
      >
        <Text>Apartments</Text>
      </Pressable>
      <RCTCustomView
        ref={ref}
        onCameraPositionChangedEnd={(a) => {}}
        style={{ flex: 1 }}
        pointsJson={JSON.stringify(partners)}
        zoom={12}
        markerType="partners"
        onPressMarker={(a) => {
          console.log(a.nativeEvent);
        }}
      />
    </SafeAreaView>
  );
};

export { ExampleScreen };
