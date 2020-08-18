import React from 'react';
import {Text, View, SafeAreaView, TextStyle, ViewStyle} from 'react-native';
import Header from './Header';
import {ScrollContextProvider, ScrollView} from './ScrollContext';

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
}

const AnimatedHeader = (props: IProps) => {
  const {title, options, children} = props;

  return (
    <ScrollContextProvider>
      <SafeAreaView style={styles.flexView}>
        <Header title={title} />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={options?.containerStyle || styles.container}>
          <Text style={options?.titleStyle || styles.title}>{title}</Text>
          <View style={options?.contentStyle || styles.content}>
            {children}
          </View>
        </ScrollView>
      </SafeAreaView>
    </ScrollContextProvider>
  );
};

export default AnimatedHeader;
