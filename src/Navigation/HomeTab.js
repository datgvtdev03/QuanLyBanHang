import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from "../Home/HomeScreen";
import InforScreen from "../Infor/InforScreen";
import ManagerScreen from "../Manager/ManagerScreen";
const Tab = createBottomTabNavigator();


const homeName = "Home";
const inforName2 = "Profile";
const managerName2 = "Manager";
const addScreen2 = "AddScreen";

export default function HomeTab() {
    return ( 
    < Tab.Navigator initialRouteName = { homeName }
        screenOptions = {
            ({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    let rn = route.name;

                    if (rn === homeName) {
                        iconName = focused ? 'home' : 'home-outline';

                    } else if (rn === inforName2) {
                        iconName = focused ? 'list' : 'list-outline';

                    } else if (rn === managerName2) {
                        iconName = focused ? 'settings' : 'settings-outline';
                    }

                    // You can return any component that you like here!
                    return <Ionicons name = { iconName }
                    size = { size }
                    color = { color }
                    />;
                },
            })
        }
        tabBarOptions = {
            {
                activeTintColor: 'tomato',
                inactiveTintColor: 'grey',
                labelStyle: { paddingBottom: 10, fontSize: 10 },
                style: { padding: 10, height: 70 }
            }
        } >

        <Tab.Screen name = { homeName }
        component = { HomeScreen }
        options = {
            { headerShown: false }
        }/> 
        <Tab.Screen name = { inforName2 }
        component = { InforScreen }
        options = {
            { headerShown: false }
        }/>
         <Tab.Screen name = { managerName2 }
        component = { ManagerScreen }
        options = {
            { headerShown: false }
        }
        />

        </Tab.Navigator>
    )
}