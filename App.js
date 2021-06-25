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

// -----------------------------------------------

// import React, { Component } from "react";
// import { View, Text, Button, Alert, NetInfo, Platform } from "react-native";

// export default class componentName extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }

//   CheckConnectivity = () => {
//     // For Android devices
//     if (Platform.OS === "android") {
//       NetInfo.isConnected.fetch().then(isConnected => {
//         if (isConnected) {
//           Alert.alert("You are online!");
//         } else {
//           Alert.alert("You are offline!");
//         }
//       });
//     } else {
//       // For iOS devices
//       NetInfo.isConnected.addEventListener(
//         "connectionChange",
//         this.handleFirstConnectivityChange
//       );
//     }
//   };

//   handleFirstConnectivityChange = isConnected => {
//     NetInfo.isConnected.removeEventListener(
//       "connectionChange",
//       this.handleFirstConnectivityChange
//     );

//     if (isConnected === false) {
//       Alert.alert("You are offline!");
//     } else {
//       Alert.alert("You are online!");
//     }
//   };

//   render() {
//     return (
//       <View>
//         <Button
//           onPress={() => this.CheckConnectivity()}
//           title="Check Internet Connectivity"
//           color="#841584"
//           accessibilityLabel="Learn more about this purple button"
//         />
//       </View>
//     );
//   }
// }

// -----------------------------------------------

// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */

// import type {Node} from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// const Section = ({children, title}): Node => {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// };

// const App: () => Node = () => {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   return (
//     <SafeAreaView style={backgroundStyle}>
//       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
//       <ScrollView
//         contentInsetAdjustmentBehavior="automatic"
//         style={backgroundStyle}>
//         <Header />
//         <View
//           style={{
//             backgroundColor: isDarkMode ? Colors.black : Colors.white,
//           }}>
//           <Section title="Step One">
//             Edit <Text style={styles.highlight}>App.js</Text> to change this
//             screen and then come back to see your edits.
//           </Section>
//           <Section title="See Your Changes">
//             <ReloadInstructions />
//           </Section>
//           <Section title="Debug">
//             <DebugInstructions />
//           </Section>
//           <Section title="Learn More">
//             Read the docs to discover what to do next:
//           </Section>
//           <LearnMoreLinks />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// // const styles = StyleSheet.create({
// //   sectionContainer: {
// //     marginTop: 32,
// //     paddingHorizontal: 24,
// //   },
// //   sectionTitle: {
// //     fontSize: 24,
// //     fontWeight: '600',
// //   },
// //   sectionDescription: {
// //     marginTop: 8,
// //     fontSize: 18,
// //     fontWeight: '400',
// //   },
// //   highlight: {
// //     fontWeight: '700',
// //   },
// // });

// export default App;
