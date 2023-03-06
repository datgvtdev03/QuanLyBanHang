import React from "react";
import { View, Text, FlatList , StyleSheet, Image, TouchableOpacity, Alert} from "react-native";
import { useState, useEffect} from "react";
import { API_STORE } from "../Helper/Api";
import { useIsFocused } from "@react-navigation/native";

export default function ManagerScreen(props) {

  const navigation = props.navigation;

  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

//khai bao bien trang thai hien thi
  const isFocused = useIsFocused();
  // console.log(JSON.stringify(dataStore));

  const getListDataFromApi = async() => {
    await fetch(API_STORE)
    .then((response) => response.json())
    .then((json) => {
      setList(json);
      setIsLoading(false);
      // console.log(list)
    })
    .catch((error) => {
      console.log("Loi ket noi: ", error);
    })
  }

  const onDelete = (deleteId) => {
    //goi api + deleteid
    fetch(API_STORE + '/' + deleteId, {
      method: 'DELETE'
    })
    .then((json) => {
      console.log("Xoa thanh cong");
      if(json.status == 200) {
        getListDataFromApi();
      }
    })
    .catch((error) => {
      console.log(error);
    })
  }

  const onEdit = (editId) => {
    // Call API lấy dữ liệu chi tiết ở đây rồi gửi sang
    fetch(API_STORE + '/' + editId)
    .then((res) => res.json())
    .then(data => navigation.navigate('Chỉnh sửa', {
        editId: data
    }));
  };


  useEffect(() => {
    getListDataFromApi();
  }, [isFocused]);

  // const onDelete = (deleteId) => {
  //   const newList = list.filter(item => item.id !== deleteId)
  //   setList(newList);
  // };

  const showAlert = (deleteId) => {
    Alert.alert(
        'Thông báo',
        'Bạn có chắc chắn muốn xóa thành phần này không?',
        [
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            },
            { text: 'OK', onPress: () => onDelete(deleteId) },
        ],
        { cancelable: false }
    );
  };

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', marginTop: 50, marginHorizontal: 10, marginBottom: 15}}>
        <View style={{flex: 7}}>
          <Text style={{alignSelf: 'center',  fontSize: 22, fontWeight: 'bold', marginLeft: 40}}>DANH SÁCH CỬA HÀNG</Text>
        </View>

        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', alignSelf: 'center'}}>
          <TouchableOpacity  
            onPress={() => navigation.navigate('Thêm cửa hàng')}>
            <Image source={require('../../assets/more.png')} style={{width: 30, height: 30}}/>
          </TouchableOpacity>
        </View>
      </View >
      
      {isLoading ? <Text style={{fontSize: 30, color: 'red'}}>Đang tải dữ liệu. Vui lòng chờ...</Text>
        :<FlatList
        data={list}
        renderItem={({item}) => 

        <View style={styles.item}>

            <View style={styles.viewImg}>
              <Image style={{width: 90, height: 90, borderRadius: 8}} source={{uri: item.logo}}/>
            </View>

            <View style={[styles.viewText, {flexDirection: 'column'}]}>

              <View style={{flex: 1, flexDirection: "row"}}>
                <Text style={{fontWeight: 'bold', marginRight: 5}}>ID:</Text>
                <Text>{item.id}</Text>
              </View>

              <View style={{flex: 1, flexDirection: "row"}}>
                <Text style={{fontWeight: 'bold', marginRight: 5}}>Tên cửa hàng:</Text>
                <Text>{item.nameStore}</Text>
              </View>

              <View style={{flex: 1,  flexDirection: "row"}}>
                <Text style={{fontWeight: 'bold', marginRight: 5}}>Địa chỉ:</Text>
                <Text>{item.address}</Text>
              </View>

              <View style={{flex: 1,  flexDirection: "row"}}>
                <Text style={{fontWeight: 'bold', marginRight: 5}}>SĐT:</Text>
                <Text>{item.phoneNumver}</Text>
              </View>

              <View style={{flex: 1,  flexDirection: "row"}}>
                <Text style={{fontWeight: 'bold', marginRight: 5}}>Trạng thái:</Text>
                <Text>{item.status ? '1' :'0'}</Text>
              </View>
            </View>

            <View style={styles.viewActions}>
              <View style={styles.viewColumn1}>
                <TouchableOpacity  
                  style={{alignItems: 'center', justifyContent: 'center'}}
                  onPress={() => showAlert(item.id)}>
                  <Image source={require('../../assets/delete.png')} style={{width: 25, height: 25, marginTop: 15}}/>
                </TouchableOpacity>
              </View>

              <View style={styles.viewColumn2}>
                <TouchableOpacity  
                  style={{alignItems: 'center', justifyContent: 'center'}}
                  onPress={() => onEdit(item.id)}>
                  <Image source={require('../../assets/edit.png')} style={{width: 25, height: 25}}/>
                </TouchableOpacity>
              </View>

            </View>

        </View>
        }

        keyExtractor={(item) => item.id}
        />

      }

        
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CFCFCF',
    padding: 10,
  },
  item: {
    backgroundColor: '#FDF5E6',
    padding: 2,
    marginVertical: 5,
    marginHorizontal: 12,
    flexDirection: 'row',
    borderRadius: 10,
  },
  viewImg: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 8,

    shadowColor: "#000",
    shadowOffset: {
	  width: 0,
	  height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,
elevation: 5,

  },
  viewText: {
    flex: 5,
    padding: 10
  },
  viewActions: {
    flex: 1,
    flexDirection: 'column',
  },
  viewColumn1: {
    flex: 1,
  },
  viewColumn2: {
    flex: 1,
  },
})