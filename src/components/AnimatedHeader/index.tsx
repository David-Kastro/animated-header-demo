import React from 'react';
import {View, SafeAreaView} from 'react-native';
import {ScrollContextProvider, ScrollView} from './ScrollContext';
import {IOptions, Animation} from './types';

//Fade
import FadeHeader from './Fade/Header';
import FadeTitle from './Fade/Title';

//Share
import ShareHeader from './Share/Header';
import ShareTitle from './Share/Title';

import styles from './styles';

interface IProps {
  title: string;
  animation?: Animation;
  backAction?: () => void;
  icon?: String;
  options?: IOptions;
  children?: React.ReactNode;
}

const AnimatedHeader = (props: IProps) => {
  const {title, options, children, animation} = props;
  const animationType: Animation = animation || 'Fade';

  function Header() {
    switch (animationType) {
      case 'Fade':
        return (
          <FadeHeader
            title={title}
            style={options?.headerStyle}
            titleStyle={options?.headerTitleStyle}
          />
        );
      case 'Share':
        return (
          <ShareHeader
            title={title}
            style={options?.headerStyle}
            titleStyle={options?.headerTitleStyle}
          />
        );
    }
  }

  function Title() {
    switch (animationType) {
      case 'Fade':
        return <FadeTitle title={title} style={options?.titleStyle} />;
      case 'Share':
        return <ShareTitle title={title} style={options?.titleStyle} />;
    }
  }

  return (
    <ScrollContextProvider>
      <SafeAreaView style={styles.flexView}>
        <Header />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={options?.containerStyle || styles.container}>
          <Title />
          <View style={options?.contentStyle || styles.content}>
            {children}
          </View>
        </ScrollView>
      </SafeAreaView>
    </ScrollContextProvider>
  );
};

export default AnimatedHeader;
