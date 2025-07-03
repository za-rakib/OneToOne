import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React, { FC, useRef, useState } from 'react';
import Theme from '../../Theme/Theme';

const OtpVarificationScreen: FC = () => {
  const input = useRef<Array<TextInput | null>>([]);
  const [otp, setOtp] = useState<string[]>(['', '', '', '']);

  const handleOnchangeText = (index: number, text: string) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);
    if (text && index < input.current.length - 1) {
      input.current[index + 1]?.focus();
    } else if (!text && index > 0) {
      input.current[index - 1]?.focus();
    }
  };

  return (
    <Theme>
      <View style={styles.mainWapper}>
        <View style={styles.secondartwapper}>
          <Text style={styles.otptxt}>OTP Verification</Text>
          <View style={styles.smswapper}>
            <Text style={styles.smstxt}>We are automatically detecting a SMS</Text>
            <Text style={styles.nmbrtxt}>send to your mobile number *********7331</Text>
          </View>
          {/* ==============otpDesign========== */}
          <View style={styles.otpWriteContainer}>
            {[0, 1].map((item, index) => (
              <TextInput
                key={item}
                ref={ref => {input.current[index] = ref}}
                keyboardType="number-pad"
                maxLength={1}
                style={styles.otpinAll}
                value={otp[index]}
                onChangeText={(text) => handleOnchangeText(index, text)}
              />
            ))}
            <Text style={styles.minustxt}>-</Text>
            {[2, 3].map((item, index) => (
              <TextInput
                key={item}
                ref={ref => {
                  input.current[index + 2] = ref;
                }}
                keyboardType="number-pad"
                maxLength={1}
                style={styles.otpinAll}
                value={otp[index + 2]}
                onChangeText={(text) => handleOnchangeText(index + 2, text)}
              />
            ))}
          </View>
          {/* =================submit Button============= */}
          <TouchableOpacity style={styles.submitButton}>
            <Text style={styles.submitButtonText}>Submit</Text>
          </TouchableOpacity>
          {/* ===================resend otp============ */}
          <View style={styles.resendContainer}>
            <Text style={styles.resendText}>Didn`t Receive The OTP? </Text>
            <TouchableOpacity>
              <Text style={styles.resendLink}>Resend OTP</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Theme>
  );
};

export default OtpVarificationScreen;

const styles = StyleSheet.create({
  mainWapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondartwapper: {
    height: 462,
    width: 487,
    backgroundColor: 'rgba(10, 10, 10, 0.5)',
    borderRadius: 10,
  },
  otptxt: {
    fontSize: 32,
    fontWeight: '700',
    color: 'rgba(255, 255, 255, 1)',
    marginTop: 40,
    marginLeft: 126,
  },
  smstxt: {
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 20,
    fontWeight: '300',
    marginLeft: 15,
  },
  nmbrtxt: {
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 20,
    fontWeight: '300',
  },
  smswapper: {
    marginTop: 40,
    marginLeft: 40,
  },
  otpWriteContainer: {
    flexDirection: 'row',
    marginLeft: 73,
    gap: 15,
    marginTop: 20,
  },
  otpinAll: {
    width: 55,
    height: 65,
    borderRadius: 12,
    backgroundColor: 'rgba(0, 0, 0, 1)',
    color: 'white',
    textAlign: 'center',
    fontSize: 24,
    borderColor: '#555',
  },
  minustxt: {
    fontSize: 90,
    fontWeight: '100',
    color: 'rgba(190, 181, 178, 1)',
    marginHorizontal: 10,
    textAlignVertical: 'center',
    textAlign: 'center',
    lineHeight: 40,
  },
  submitButton: {
    marginTop: 33,
    height: 50,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    alignSelf: 'center',
    width: 340,
  },
  submitButtonText: {
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 1.5,
  },
  resendContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  resendText: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 13,
  },
  resendLink: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontWeight: 'bold',
    fontSize: 13,
  },
});
