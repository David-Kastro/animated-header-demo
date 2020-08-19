import React from 'react';
import {View, Text, Animated} from 'react-native';
import useFadeAnimation from '../hooks/useFadeAnimation';
import {IHeaderProps} from '../types';

import styles from '../styles';

interface IProps extends IHeaderProps {}

const Header = (props: IProps) => {
  const {title, style, titleStyle} = props;

  const {
    headerTitleOpacity,
    headerTitlePosY,
    headerElevation,
    headerShadowOpacity,
  } = useFadeAnimation();

  return (
    <View
      style={{
        ...(style || styles.header),
        shadowOpacity: headerShadowOpacity,
        elevation: headerElevation,
      }}>
      <Animated.View
        style={{
          opacity: headerTitleOpacity,
          transform: [{translateY: headerTitlePosY}],
        }}>
        <Text style={titleStyle || styles.headerTitle}>{title}</Text>
      </Animated.View>
    </View>
  );
};

export default Header;
