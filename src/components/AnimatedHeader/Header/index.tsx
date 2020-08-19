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

  useEffect(() => {
    titleShowing === false &&
      Animated.timing(titleFade, {
        toValue: 0,
        duration: 100,
        useNativeDriver: true,
        easing: Easing.sin,
      }).start();

    titleShowing === true &&
      Animated.timing(titleFade, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
        easing: Easing.sin,
      }).start();
  });

  return (
    <View
      style={{
        ...(style || styles.header),
        shadowOpacity: opacity,
        elevation: opacity * 6,
      }}>
      <Animated.View style={{opacity: titleFade}}>
        <Text style={titleStyle || styles.headerTitle}>{title}</Text>
      </Animated.View>
    </View>
  );
};

export default Header;
