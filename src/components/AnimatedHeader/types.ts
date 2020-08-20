import { ViewStyle, TextStyle } from 'react-native';

export interface IHeaderProps {
  title: string;
  style?: ViewStyle;
  titleStyle?: TextStyle;
}

export interface ITitleProps {
  title: string;
  style?: TextStyle;
}

export interface IOptions {
  containerStyle?: ViewStyle;
  contentStyle?: ViewStyle;
  titleStyle?: TextStyle;
  headerTitleStyle?: TextStyle;
  headerStyle?: ViewStyle;
}

export type Animation = 'Fade' | 'Share';
