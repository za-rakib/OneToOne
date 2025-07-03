import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import Theme from '../../Theme/Theme';
import UserIcon from '../../Icon/UserIcon';
import FaceIdIcon from '../../Icon/FaceIdIcon';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../navigation/types';
import { useNavigation } from '@react-navigation/native';


type OtpandFaceScreenNavigationProp = NativeStackNavigationProp<AuthStackParamList,'otpandFace'>

const OtpandFaceScreen = () => {

  const navigation = useNavigation<OtpandFaceScreenNavigationProp>();
  return (
    <Theme>
      <View style={styles.mainContainerWrapper}>
        {/* ===========otp========== */}
        <TouchableOpacity onPress={()=>navigation.navigate('otpScreen')} style={styles.otpContainer}>
          <Text style={styles.otpText}>OTP Verification</Text>
          <View style={styles.circle}>
            <UserIcon />
          </View>
        </TouchableOpacity>
        {/* ===============face============= */}
        <TouchableOpacity style={styles.otpContainer}>
          <Text style={styles.otpText}>Face Recognition</Text>
          <View style={styles.circle}>
            <FaceIdIcon />
          </View>
        </TouchableOpacity>
      </View>
    </Theme>
  );
};

export default OtpandFaceScreen;

const styles = StyleSheet.create({
  mainContainerWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 46,
  },
  otpContainer: {
    height: 385,
    width: 390,
    backgroundColor: 'rgba(10, 10, 10, 0.4)',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    padding: 10,
  },
  otpText: {
    fontSize: 18,
    fontWeight: '700',
    marginVertical: 10,
    color: 'rgba(255, 255, 255, 1)',
    textAlign: 'center',
  },
  circle: {
    height: 227,
    width: 227,
    borderRadius: 120,
    backgroundColor: 'rgba(115, 114, 114, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
