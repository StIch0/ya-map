import React, { useRef, useState } from 'react';

import { ViewProps } from '@app/ui/components/View';
import { Pressable, SafeAreaView, requireNativeComponent } from 'react-native';
import { arr } from './constants';
import { RCTCustomView } from '../exampleScreen';
import { Text } from 'react-native';
// import { ArrItem, arr } from './constants';

const ExampleScreenFull = () => {
  const ref = useRef(null);

  const [list, setList] = useState(arr);

  // const setCenter = (point: ArrItem['pos'], zoom: number) => {
  //   UIManager.dispatchViewManagerCommand(
  //     findNodeHandle(ref.current),
  //     UIManager.getViewManagerConfig('YaMapVC').Commands.setCenter,
  //     [point, zoom],
  //   );
  // };

  // useEffect(() => {
  //   if (zoom >= 9) {
  //     setList((prev) => prev.concat(secondPart));
  //   } else if (zoom >= 12) {
  //     setList((prev) => prev.concat(thridtPart));
  //   }
  // }, [zoom]);
  console.log(list.length);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Pressable
        onPress={() => {
          setList((prevState) => prevState.filter((_, index) => index % 2));
        }}
        style={{
          position: 'absolute',
          left: 10,
          top: 10,
          zIndex: 2,
          padding: 10,
          backgroundColor: 'red',
        }}
      >
        <Text>Reset Apartment</Text>
      </Pressable>
      <RCTCustomView
        ref={ref}
        onCameraPositionChangedEnd={(a) => {
          console.log('a', a.nativeEvent);
        }}
        style={{ flex: 1 }}
        pointsJson={JSON.stringify(list)}
        zoom={12}
        markerType="apartments"
        onPressMarker={(a) => {
          console.log(a.nativeEvent);
        }}
      />
    </SafeAreaView>
  );
};

export { ExampleScreenFull };
