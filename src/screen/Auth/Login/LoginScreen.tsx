import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import React, { FC, useState } from 'react';
import Theme from '../../../Theme/Theme';
import { useDispatch } from 'react-redux';
import { increment } from '../../../redux/actions/counter.actions';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../../navigation/types';
import ClearButtonIcon from '../../../assets/icons/ClearButtonIcon';
import CustomExpandedButton from '../../../components/buttons/CustomExpandedButton/CustomExpandedButton';
import styles from './style';

type LoginScreenNavigationProp = NativeStackNavigationProp<AuthStackParamList, 'Login'>;

const LoginScreen: FC = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const increase = () => {
    dispatch(increment());
  };

  return (
    <Theme>
      {/* ================ Header ================ */}
      <View style={styles.mainWapper}>
        <View style={styles.secondartwapper}>
          <Text style={styles.headertxt}>Welcome to One to One</Text>
          <Text style={styles.headertxtsecondary}>
            Enter your email below to login to your account
          </Text>

          {/* ================ Text Inputs ================ */}
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

          {/* ================ Login button ================ */}
          <CustomExpandedButton
            title="Login"
            onPress={() => {
              navigation.navigate('otpandFace');
              increase();
            }}
            viewStyle={styles.loginButton}
            textStyle={styles.loginButtonText}
          ></CustomExpandedButton>

          {/* ================ Forget Password ================ */}
          <TouchableOpacity style={styles.forgetPasswapper}>
            <Text style={styles.forgettxt}>Forgot Password? </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Theme>
  );
};

export default LoginScreen;
