import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function InforScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://www.bootdey.com/image/900x400/FF7F50/000000' }}
        style={styles.coverImage}
      />
      <View style={styles.avatarContainer}>
        <Image
          source={{ uri: 'https://www.bootdey.com/img/Content/avatar/avatar1.png' }}
          style={styles.avatar}
        />
        <Text style={[styles.name, styles.textWithShadow]}>Giáp Văn Thành Đạt</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>Email:</Text>
          <Text style={styles.infoValue}>Datgvtph20617@fpt.edu.vn</Text>
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>Mã sinh viên:</Text>
          <Text style={styles.infoValue}>PH20617</Text>
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>Đại chỉ:</Text>
          <Text style={styles.infoValue}>Bắc Giang</Text>
        </View>
      </View>

      <View style={{alignSelf: 'center', marginTop: 20}}>
        <TouchableOpacity  
          style={styles.button}
          onPress={() => navigation.navigate('Manager')}>
            <Text style={{color: "#ffffff", alignSelf: 'center'}}>Quản lý cửa hàng</Text>
        </TouchableOpacity>
      </View>
      

    </View>
  );

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  coverImage: {
    height: 200,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  avatarContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    color:'white'
  },
  content: {
    marginTop: 20,
  },
  infoContainer: {
    marginTop: 20,
  },
  infoLabel: {
    fontWeight: 'bold',
  },
  infoValue: {
    marginTop: 5,
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
});
