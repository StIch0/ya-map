import React, { useEffect, useRef, useState } from 'react';

import { ExampleView } from './components/ExampleView';

import {
  UIManager,
  findNodeHandle,
  requireNativeComponent,
} from 'react-native';
import { ViewProps } from '@app/ui/components/View';
import { ArrItem,arr } from './constants';

const RCTCustomView = requireNativeComponent<
  ViewProps & { pointsJson?: string; statusA?: boolean }
>('YaMapVC');

const ExampleScreen = () => {
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
    <RCTCustomView
      ref={ref}
      onCameraPositionChangedEnd={(a) => {
        console.log('a', a.nativeEvent);
      }}
      style={{ flex: 1 }}
      pointsJson={JSON.stringify(arr)}
      zoom={12}
      onPressMarker={(a) => {
        console.log(a.nativeEvent);
      }}
    />
  );
};

export { ExampleScreen };
