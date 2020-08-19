import React from 'react';
import {Text, Animated, TextStyle} from 'react-native';
import {useScroller} from '../ScrollContext';

import styles from './styles';

interface IProps {
  title: string;
  style?: TextStyle;
}

const Title = (props: IProps) => {
  const {title, style} = props;

  const {opacity} = useScroller();

  return (
    <Animated.View style={{opacity: 1 - opacity}}>
      <Text style={style || styles.title}>{title}</Text>
    </Animated.View>
  );
};

export default Title;
