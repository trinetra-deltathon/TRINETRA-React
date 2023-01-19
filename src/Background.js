import * as React from 'react';
import {View, ImageBackground, StyleSheet, Text} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


const Background = ({ children }) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff2',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  return (
    <View>
    <ImageBackground source={require("./assets/Frame3.png")} style={{ height: '100%' }} />
    <View style={{ position: "absolute" }}>
      {children}
    </View>
  </View>
  );
}

export default Background;
