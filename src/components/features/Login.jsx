// src/components/Login.js
import React from 'react';
import { View, Text, StyleSheet, TextInput, Pressable } from 'react-native';

const Login = () => {
  return (
    <View style={styles.container}>
      <View style={styles.overlay}>
        <Text style={styles.title}>Welcome to One to One</Text>
        <Text style={styles.subtitle}>
          Enter your email below to login to your account
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#aaa"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#aaa"
          secureTextEntry
        />

        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </Pressable>

        <Text style={styles.forgot}>Forgot Password?</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  overlay: {
    width: '90%',
    maxWidth: 400,
    backgroundColor: 'rgba(0, 0, 0, 0.1)', // Semi-transparent overlay
    borderRadius: 15,
    padding: 30,
    alignItems: 'center',
    // Optional: Add subtle border
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#ccc',
    textAlign: 'center',
    marginBottom: 30,
    lineHeight: 20,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.1)', // Transparent white
    borderRadius: 10,
    paddingHorizontal: 16,
    color: '#fff',
    marginBottom: 16,
    fontSize: 16,
    // Optional: Add border
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    // Optional: Add shadow effect
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
  forgot: {
    marginTop: 20,
    color: '#bbb',
    fontSize: 14,
  },
});

export default Login;
