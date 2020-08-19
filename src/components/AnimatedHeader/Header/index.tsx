import React, {useEffect, useState} from 'react';
import {View, Text, Animated, Easing, TextStyle, ViewStyle} from 'react-native';
import {useScroller} from '../ScrollContext';

import styles from './styles';

interface IProps {
  title: string;
  style?: ViewStyle;
  titleStyle?: TextStyle;
}

const Header = (props: IProps) => {
  const {title, style, titleStyle} = props;

  const {titleShowing, opacity} = useScroller();

  const [titleFade] = useState(new Animated.Value(0));
  const [titlePosY] = useState(new Animated.Value(-30));

  useEffect(() => {
    titleShowing &&
      Animated.parallel([
        Animated.timing(titleFade, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
          easing: Easing.sin,
        }),
        Animated.timing(titlePosY, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
          easing: Easing.sin,
        }),
      ]).start();

    !titleShowing &&
      Animated.parallel([
        Animated.timing(titleFade, {
          toValue: 0,
          duration: 100,
          useNativeDriver: true,
          easing: Easing.sin,
        }),
        Animated.timing(titlePosY, {
          toValue: 5,
          duration: 100,
          useNativeDriver: true,
          easing: Easing.sin,
        }),
      ]).start();
  }, [titleShowing, titleFade, titlePosY]);

  return (
    <View
      style={{
        ...(style || styles.header),
        shadowOpacity: opacity,
        elevation: opacity * 6,
      }}>
      <Animated.View
        style={{opacity: titleFade, transform: [{translateY: titlePosY}]}}>
        <Text style={titleStyle || styles.headerTitle}>{title}</Text>
      </Animated.View>
    </View>
  );
};

export default Header;
