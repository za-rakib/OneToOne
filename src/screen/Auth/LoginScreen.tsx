import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Theme from '../../Theme/Theme';
import ClearButtonIcon from '../../Icon/ClearButtonIcon';
import { useDispatch } from 'react-redux';
import { increment } from '../../redux/actions/counter.actions';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch()
  const increase = ()=> {
    dispatch(increment())
  }

  return (
    <Theme>
      {/* =============header design================== */}
      <View style={styles.mainWapper}>
        <View style={styles.secondartwapper}>
          <Text style={styles.headertxt}>Welcome to One to One</Text>
          <Text style={styles.headertxtsecondary}>
            Enter your email below to login to your account
          </Text>
          {/* ================TEXT INPUTALL================ */}
          <View style={styles.inputWrapper}>
            <TextInput
              placeholder="Email"
              placeholderTextColor="#aaa"
              style={styles.input}
              value={email}
              onChangeText={setEmail}
            />
            <TouchableOpacity onPress={() => setEmail('')}>
              <ClearButtonIcon />
            </TouchableOpacity>
          </View>
          {/* ===============onno==================== */}
          <View style={styles.inputWrapper}>
            <TextInput
              placeholder="Password"
              placeholderTextColor="#aaa"
              secureTextEntry={true}
              style={styles.input}
              value={password}
              onChangeText={setPassword}
            />
          </View>
          {/* ===============LogInbtn===================== */}
          <TouchableOpacity style={styles.loginBtn} onPress={increase}>
            <Text style={styles.loginBtntxt}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.forgetPasswapper}>
            <Text style={styles.forgettxt}>Forgot Password? </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Theme>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  mainWapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondartwapper: {
    height: 439,
    width: 486,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 10,
  },
  headertxt: {
    fontSize: 32,
    fontWeight: '700',
    color: 'rgba(255, 255, 255, 1)',
    marginLeft: 60,
    marginRight: 40,
    marginTop: 40,
  },
  headertxtsecondary: {
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 16,
    fontWeight: '400',
    marginRight: 40,
    marginLeft: 60,
  },
  inputWrapper: {
    height: 44,
    width: 406,
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    borderRadius: 12,
    borderWidth: 1,
    marginTop: 45,
    marginLeft: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 15,
    paddingRight: 12,
  },
  input: {
    flex: 1,
    height: 48,
    //backgroundColor: 'rgba(0, 0, 0, 0.1)',
    color: '#fff',
  },
  loginBtn: {
    height: 44,
    width: 406,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 45,
    marginLeft: 40,
  },
  loginBtntxt: {
    fontSize: 17,
    fontWeight: '600',
    letterSpacing: 1,
  },
  forgetPasswapper: {
    //borderWidth:3,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 17,
  },
  forgettxt: {
    color: 'rgba(232, 232, 232, 1)',
  },
});
