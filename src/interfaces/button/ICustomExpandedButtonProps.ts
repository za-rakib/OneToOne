import { StyleProp, ViewStyle, TextStyle } from 'react-native';

export interface ICustomExpandedButtonProps {
  title: string;
  onPress: () => void;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  disabled?: boolean;
  loading?: boolean;
  viewStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}
