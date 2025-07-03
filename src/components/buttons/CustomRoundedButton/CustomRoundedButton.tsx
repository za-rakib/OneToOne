import React, { FC } from 'react';
import { ICustomRoundedButtonProps } from '../../../interfaces/button/ICustomRoundedButtonProps';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './style';

const CustomRoundedButton: FC<ICustomRoundedButtonProps> = ({
  title,
  onPress,
  icon,
  viewStyle,
  textStyle,
}) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7} style={[styles.button, viewStyle]}>
      <View style={styles.content}>
        {icon && <View style={styles.iconPosition}>{icon}</View>}
        {title && <Text style={textStyle}>{title}</Text>}
      </View>
    </TouchableOpacity>
  );
};

export default CustomRoundedButton;
