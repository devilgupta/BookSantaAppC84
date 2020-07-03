import React,{Component} from 'react';
import {Header,Icon, Badge} from 'react-native-elements';
import {View,Text,StyleSheet} from 'react-native';
const BellIconWithBadge=(props)=>{
    return(
        <View>
           <Icon name='bell' type='font-awesome' color='#696969' size={25} onPress={()=>
            props.navigation.navigate('Notification')
        }/>
        <Badge value="1"
        containerStyle={{position:'absolute',top:-4,right:-4}}/>
        </View>
    )
}
const MyHeader=props=>{
    return(
        <Header
        leftComponent={<Icon name='bars' type='font-awesome' color='#696969' onPress={()=>
            props.navigation.toogleDrawer()
        }/>}
        centerComponent={{text:props.title,style:{color:'black',fontSize:20,fontWeight:'bold'}}}
        rightComponent={<BellIconWithBadge {...props}/>}
        backgroundColor="yellow"
        >
            
            
        </Header>
    )
}
export default MyHeader;