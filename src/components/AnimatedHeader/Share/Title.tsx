import React from 'react';
import {Text, Animated, TextStyle} from 'react-native';
import useFadeAnimation from '../hooks/useFadeAnimation';

import styles from '../styles';

interface IProps {
  title: string;
  style?: TextStyle;
}

const Title = (props: IProps) => {
  const {title, style} = props;

  const {titleOpacity} = useFadeAnimation();

  return (
    <Animated.View style={{opacity: titleOpacity}}>
      <Text style={style || styles.title}>{title}</Text>
    </Animated.View>
  );
};

export default Title;
