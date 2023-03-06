import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../Home/HomeScreen';
import InforScreen from '../Infor/InforScreen';
import ManagerScreen from '../Manager/ManagerScreen';
import LoginScreen from '../Login/LoginScreen';
import SplashScreen from '../Splash/SplashScreen';
import HomeTab from './HomeTab';
import AddScreen from '../Manager/AddScreen';
import EditScreen from '../Manager/EditScreen';


//Screen names
const splashName = 'splash';
const loginName = 'Đăng nhập';
const homeName = "Home";
const inforName = "Infor";
const managerName = "Manager1";
const homeTabName = "HomeTab";
const editName = "Chỉnh sửa";
const addName = "Thêm cửa hàng";

const Stack = createNativeStackNavigator();

function MainContainer() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={splashName}>
        <Stack.Screen name={splashName} component={SplashScreen} options = {{ headerShown: false }}/>
        <Stack.Screen name={loginName} component={LoginScreen} options = {{ headerShown: false }}/>
        <Stack.Screen name={homeName} component={HomeScreen} options = {{ headerShown: false }}/>
        <Stack.Screen name={inforName} component={InforScreen} options = {{ headerShown: false }}/>
        <Stack.Screen name={managerName} component={ManagerScreen} options = {{ headerShown: false }}/>
        <Stack.Screen name={homeTabName} component={HomeTab} options = {{ headerShown: false }}/>
        <Stack.Screen name={editName} component={EditScreen} />
        <Stack.Screen name={addName} component={AddScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// screenOptions={{headerShown: true}}

export default MainContainer;