import React from 'react';
import {Text, View, StyleSheet, Alert, Platform} from 'react-native';
import NetInfo from '@react-native-community/netinfo';

NetInfo.fetch().then(state => {
  if (Platform.OS === 'android') {
    if (state.isConnected) {
      Alert.alert('Your Android phone is online!');
    } else {
      Alert.alert('Your Android phone is offline!');
    }
  }
  if (Platform.OS === 'ios') {
    if (state.isConnected) {
      Alert.alert('Your Iphone is online!');
    } else {
      Alert.alert('Your Iphone is offline!');
    }
  }
});

const App = () => {
  return (
    <View style={styles.message}>
      <Text style={styles.text}>
        Block the internet access and refresh the app to check the message!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  message: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'palevioletred',
  },
  text: {
    fontSize: 24,
    textAlign: 'center',
  },
});

export default App;
