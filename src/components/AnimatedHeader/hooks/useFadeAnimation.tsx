import {useEffect, useState} from 'react';
import {Animated, Easing} from 'react-native';
import {useScroller} from '../ScrollContext';

export interface IFadeAnimation {
  headerTitleOpacity: Animated.Value;
  headerTitlePosY: Animated.Value;
  headerShadowOpacity: number;
  headerElevation: number;
  titleOpacity: number;
}

export default function useFadeAnimation(): IFadeAnimation {
  const {titleShowing, interpolation} = useScroller();

  const [headerTitleOpacity] = useState<Animated.Value>(new Animated.Value(0));
  const [headerTitlePosY] = useState<Animated.Value>(new Animated.Value(-30));

  useEffect(() => {
    titleShowing &&
      Animated.parallel([
        Animated.timing(headerTitleOpacity, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
          easing: Easing.sin,
        }),
        Animated.timing(headerTitlePosY, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
          easing: Easing.sin,
        }),
      ]).start();

    !titleShowing &&
      Animated.parallel([
        Animated.timing(headerTitleOpacity, {
          toValue: 0,
          duration: 100,
          useNativeDriver: true,
          easing: Easing.sin,
        }),
        Animated.timing(headerTitlePosY, {
          toValue: 5,
          duration: 100,
          useNativeDriver: true,
          easing: Easing.sin,
        }),
      ]).start();
  }, [titleShowing, headerTitleOpacity, headerTitlePosY]);

  return {
    headerTitleOpacity,
    headerTitlePosY,
    headerShadowOpacity: interpolation,
    headerElevation: interpolation * 6,
    titleOpacity: 1 - interpolation,
  };
}
