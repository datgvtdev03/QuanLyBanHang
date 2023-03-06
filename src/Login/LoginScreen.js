import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Image, TextInput , TouchableOpacity, Alert} from 'react-native';
import { useEffect, useState } from 'react';


// useState dung de luu gia tri tam thoi

export default function LoginScreen({navigation}) {

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

    const validate = () => {
      var isCorrect = false;
      if(username == "A" && password == "a") {
        isCorrect = true;
      }
      if(isCorrect) {
        navigation.replace('HomeTab', {
          user: {
            name: username,
            pass: password,
            fullName: "Giáp Văn Thành Đạt",
            msv: "PH20617",
          },
        })
        
      } else {
        Alert.alert("Đăng nhập không thành công");
      }
      
    }

  return (
    <View style={styles.container}>
      <Text style = {styles.text}>ĐĂNG NHẬP</Text>
      <TextInput
      
      style = {styles.input}
      placeholder='Tài khoản'
      onChangeText={(text) => {
        setUsername(text);
        console.log(username, "username")
      }}
      />

      <TextInput
      style = {styles.input}
      onChangeText={(text) => {
        setPassword(text);
        console.log(password, "password")
      }}
      placeholder="Mật khẩu"
      secureTextEntry={true}
      keyboardType=""
      />

      <TouchableOpacity style={styles.button}
        onPress={() => {
          validate();
        }}>
        <Text style={{color: "#ffffff", alignSelf: 'center', fontSize: 20}}>Đăng nhập</Text>
      </TouchableOpacity>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 20,
    justifyContent: 'center',
  },

  text: {
    color: "black",
    fontSize: 30,
    fontWeight: "bold",
  },

  input: {
    width: 300,
    height: 40,
    borderRadius: 20, 
    borderColor: '#c4c4c4', 
    borderWidth: 1, 
    paddingLeft: 8,
    marginTop: 20,
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
  }
});
