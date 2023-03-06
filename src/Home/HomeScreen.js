import React from "react";
import { View, Text, Image, Button, TouchableOpacity, StyleSheet } from "react-native";

export default function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>

      <Image source={require('../../assets/download.png')} />

      <TouchableOpacity  
        style={styles.button}
        onPress={() => navigation.navigate('Profile')}>
          <Text style={{color: "#ffffff", alignSelf: 'center'}}>Thông tin cá nhân</Text>
      </TouchableOpacity>

      <TouchableOpacity  
        style={styles.button}
        onPress={() => navigation.navigate('Manager')}>
          <Text style={{color: "#ffffff", alignSelf: 'center'}}>Quản lý cửa hàng</Text>
      </TouchableOpacity>

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginTop: 20,
    width: 300, 
    height: 40,
    borderRadius: 20,
    alignContent: 'center',
    justifyContent: "center",
    backgroundColor: '#ee0033',
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});

