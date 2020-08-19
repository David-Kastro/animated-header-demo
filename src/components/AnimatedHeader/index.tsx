import React from 'react';
import {View, SafeAreaView, TextStyle, ViewStyle} from 'react-native';
import {ScrollContextProvider, ScrollView} from './ScrollContext';
import Header from './Header';
import Title from './Title';

import styles from './styles';

interface IProps {
  title: string;
  animation?: String;
  backAction?: () => void;
  icon?: String;
  options?: IOptions;
  children?: React.ReactNode;
}

interface IOptions {
  containerStyle?: ViewStyle;
  contentStyle?: ViewStyle;
  titleStyle?: TextStyle;
  headerTitleStyle?: TextStyle;
  headerStyle?: ViewStyle;
}

const AnimatedHeader = (props: IProps) => {
  const {title, options, children} = props;

  return (
    <ScrollContextProvider>
      <SafeAreaView style={styles.flexView}>
        <Header
          title={title}
          style={options?.headerStyle}
          titleStyle={options?.headerTitleStyle}
        />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={options?.containerStyle || styles.container}>
          <Title title={title} style={options?.titleStyle} />
          <View style={options?.contentStyle || styles.content}>
            {children}
          </View>
        </ScrollView>
      </SafeAreaView>
    </ScrollContextProvider>
  );
};

export default AnimatedHeader;
