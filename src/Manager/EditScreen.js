import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  Alert,
  Switch,
} from "react-native";
import { useState, useEffect } from "react";
import ManagerScreen from "./ManagerScreen";
import { API_STORE } from "../Helper/Api";

export default function EditScreen(props) {
  // khoi tao navigation
  const navigation = props.navigation;
  const routes = props.route.params;
  const info = routes?.editId;

  // console.log("kkk", JSON.stringify({ props }));
  console.log("id", info.id);

  useEffect(() => {
    if (info){
        setInputName(info.nameStore);
        setInputAddress(info.address);
        setInputImage(info.logo);
        setInputStatus(info.status);
        setInputNumber(info.phoneNumver)
    }
}, [info?.id]);

  const [inputName, setInputName] = useState('');
  const [inputAddress, setInputAddress] = useState('');
  const [inputImage, setInputImage] = useState('');
  const [inputStatus, setInputStatus] = useState('');
  const [inputNumber, setInputNumber] = useState('');

  function telephoneCheck(str) {
    var isphone = /([\+84|84|0]+(3|5|7|8|9|1[2|6|8|9]))+([0-9]{8})\b/.test(str);
    if(!isphone) {
      Alert.alert("Số điện thoại sai định dạng!")
    } else {
      onSave()
    }
  }


  const onSave = () => {
    const newObj = {
      nameStore: inputName,
      address: inputAddress,
      phoneNumver: inputNumber,
      logo: inputImage,
      status: inputStatus
    }

    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newObj)
    };

    fetch(API_STORE + '/' + info.id, requestOptions)
    .then((response) => {
      response.json();
      if(response.status == 200) {
        console.log("Sua thanh cong");
      }
      console.log("Status: " , response.status);
    })
    .then((data) => {
      console.log(data);
      navigation.goBack()
    });
  }

  return (
    <View style={styles.container}>
      <Image source={require("../../assets/download.png")} />
      <View style={styles.viewText}>
        <Text style={styles.textTitle}>ID:</Text>
        <TextInput
          style={[styles.input, {color: 'grey'}]}
          underlineColorAndroid="transparent"
          placeholder="Mã cửa hàng"
          placeholderTextColor="#C4C4C4"
          autoCapitalize="none"
          onChangeText={() => {}}
          editable={false}
          defaultValue={String(info.id)}
        />
      </View>
      <View style={styles.viewText}>
        <Text style={styles.textTitle}>Tên cửa hàng:</Text>
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Tên cửa hàng"
          placeholderTextColor="#C4C4C4"
          autoCapitalize="none"
          onChangeText={(text) => setInputName(text)}
          defaultValue={inputName}
        />
      </View>
      <View style={styles.viewText}>
        <Text style={styles.textTitle}>Địa chỉ:</Text>
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Địa chỉ"
          placeholderTextColor="#C4C4C4"
          autoCapitalize="none"
          onChangeText={(text) => setInputAddress(text)}
          defaultValue={inputAddress}
        />
      </View>
      <View style={styles.viewText}>
        <Text style={styles.textTitle}>Số điện thoại:</Text>
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Số điện thoại"
          placeholderTextColor="#C4C4C4"
          autoCapitalize="none"
          keyboardType="numeric"
          onChangeText={(text) => setInputNumber(text)}
          defaultValue={inputNumber}
        />
      </View>

      <View style={styles.viewText}>
        <Text style={styles.textTitle}>Ảnh:</Text>
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Ảnh"
          placeholderTextColor="#C4C4C4"
          autoCapitalize="none"
          onChangeText={(text) => setInputImage(text)}
          defaultValue={inputImage}
        />
      </View>

      <View style={styles.viewText}>
        <Text style={styles.textTitle}>Trạng thái:</Text>
        <Switch 
          value={inputStatus}
          onValueChange={() => setInputStatus(!inputStatus)}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={() =>{
        {
          if (
            inputName == "" ||
            inputAddress == "" ||
            inputImage == "" ||
            inputNumber == "" ||
            inputImage == ""
          ) {
            Alert.alert("Phải nhập đủ các trường!");
          } else {
            telephoneCheck(inputNumber)
          }
        }
      }}>
        <Text style={{ color: "#ffffff", alignSelf: "center", fontSize: 20 }}>
          SỬA
        </Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    marginTop: 5,
    height: 40,
    borderColor: "red",
    borderWidth: 1,
    width: "100%",
    alignSelf: "center",
    padding: 5,
    borderRadius: 10,
  },
  button: {
    marginTop: 20,
    width: 300,
    height: 40,
    borderRadius: 20,
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "#ee0033",
    marginBottom: 20,
  },
  viewText: {
    width: "90%",
    marginTop: 15,
  },
  textTitle: {
    fontSize: 14,
    fontWeight: "bold",
  },
});
