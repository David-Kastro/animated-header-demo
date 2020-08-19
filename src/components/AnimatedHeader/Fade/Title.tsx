import React from 'react';
import {Text, Animated} from 'react-native';
import useFadeAnimation from '../hooks/useFadeAnimation';
import {ITitleProps} from '../types';

import styles from '../styles';

interface IProps extends ITitleProps {}

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
