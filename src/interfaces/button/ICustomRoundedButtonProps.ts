import { StyleProp, ViewStyle, TextStyle } from 'react-native';

export interface ICustomRoundedButtonProps {
  title?: string;
  onPress: () => void;
  icon?: React.ReactNode;
  viewStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}
