import React, { FC } from 'react';
import { ICustomExpandedButtonProps } from '../../../interfaces/button/ICustomExpandedButtonProps';
import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native';
import styles from './style';

const CustomExpandedButton: FC<ICustomExpandedButtonProps> = ({
  title,
  onPress,
  leftIcon,
  rightIcon,
  disabled = false,
  loading = false,
  viewStyle,
  textStyle,
}) => {
  const getActivityIndicatorColor = () => {
    if (textStyle && typeof textStyle === 'object' && 'color' in textStyle) {
      return textStyle.color;
    }
    // Fallback to default color if no color is found in textStyle
    return '#000'; // or any default color you prefer
  };
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      disabled={disabled || loading}
      style={[styles.button, viewStyle, disabled && styles.disabled]}
    >
      {loading ? (
        <ActivityIndicator size={'large'} color={getActivityIndicatorColor()} />
      ) : (
        <View style={styles.content}>
          {leftIcon && <View style={styles.iconPosition}>{leftIcon}</View>}
          <Text style={textStyle}>{title}</Text>
          {rightIcon && <View style={styles.iconPosition}>{rightIcon}</View>}
        </View>
      )}
    </TouchableOpacity>
  );
};

export default CustomExpandedButton;
