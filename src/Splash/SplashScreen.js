import React from "react";
import { View, StyleSheet, Image } from "react-native";

export default function Splash({navigation}) {
  //thoi gian chuyen margin: 
  setTimeout(() => {
    navigation.navigate('HomeTab');
  }, 4000)

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/download.png')} />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});