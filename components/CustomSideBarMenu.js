import React,{Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {DrawerItems} from 'react-navigation-drawer';
import firebase from 'firebase';
import db from '../config';

export default class CustomSideBarMenu extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.drawerItemsContainer}>
                <DrawerItems {...this.props}>

                </DrawerItems>
                </View>
                <View style={styles.logoutContainer}>
            <TouchableOpacity 
            style={styles.logoutButton} 
            onPress={()=>{
                this.props.navigation.navigate('WelcomeScreen')
                firebase.auth().signOut()
            }}>
                <Text style={styles.logOutText}>Logout</Text>
            </TouchableOpacity>
                </View>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    container:{
        flex:1
    },
    drawerItemsContainer:{
        flex:0.0,
    },
    logoutContainer:{
        flex:0.2,
        justifyContent:'flex-end',
        paddingBottom:30,
    },
    logoutButton:{
        height:30,
        width:'100%',
        justifyContent:'center',
        padding:10
    },
    logOutText:{
        fontSize:30,
        fontWeight:'bold'
    }
})