import React, {useEffect, useState} from 'react';
import {View, Text, Animated, Easing, TextStyle, ViewStyle} from 'react-native';
import {useScroller} from '../ScrollContext';

import styles from '../styles';

interface IProps {
  title: string;
  options?: IOptions;
}

interface IOptions {
  headerStyle?: ViewStyle;
  headerTitleStyle?: TextStyle;
}

const AnimatedHeader = (props: IProps) => {
  const {title, options} = props;

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
        ...(options?.headerStyle || styles.header),
        shadowOpacity: opacity,
        elevation: opacity * 6,
      }}>
      <Animated.View style={{opacity: titleFade}}>
        <Text style={options?.headerTitleStyle || styles.headerTitle}>
          {title}
        </Text>
      </Animated.View>
    </View>
  );
};

export default AnimatedHeader;
