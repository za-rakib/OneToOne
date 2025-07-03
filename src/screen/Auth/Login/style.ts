import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  mainWapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondartwapper: {
    height: 439,
    width: 486,
    backgroundColor: 'rgba(10, 10, 10, 0.4)',
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
  loginButton: {
    height: 44,
    width: 406,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 45,
    marginLeft: 40,
  },
  loginButtonText: {
    fontSize: 16,
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

export default styles;
