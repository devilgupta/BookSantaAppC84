import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import CustomSideBarMenu from './CustomSideBarMenu';
import {AppTabNavigator} from './AppTabNavigator';
import SettingScreen from '../screens/SettingScreen';
import NotificationScreen from '../screens/NotificationScreen';
import MyDonationScreen from '../screens/MyDonationsScreen';

export const AppDrawerNavigator= createDrawerNavigator({
    Home:{
        screen:AppTabNavigator
    },
    Notifications:{
        screen:NotificationScreen
    },
    Setting:{
        screen:SettingScreen
    },
    MyDonations:{
    screen:MyDonationScreen
},
},
    {
        contentComponent:CustomSideBarMenu
    },
    {
        initialRouteName:'Home'
})