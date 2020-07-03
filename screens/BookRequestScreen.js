import React,{Component} from 'react';
import {View,Text, KeyboardAvoidingView,TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import MyHeader from '../components/MyHeader';
import firebase from 'firebase';
import db from '../config';

export default class BookRequestScreen extends Component{
    constructor(){
        super();
        this.state={
            userId:firebase.auth().currentUser.email,
            bookName:'',
            reasonToRequest:''
        }
    }

    createUniqueId(){
        return Math.random().toString(36).substring(7);
    }

    addRequest=(bookName,reasonToRequest)=>{
        var userId=this.state.userId
        var randomUniqueId=this.createUniqueId();
        db.collection('requestedBooks').add({
            "user_Id":userId,
            "book_name":bookName,
            "reason_request":reasonToRequest,
            "request_Id":randomUniqueId
        })
        this.setState({
            bookName:'',
            reasonToRequest:''
        })
    }
    render(){
        return(
            <View style={{
                flex:1
            }}>
                <MyHeader title="Request Book"/>
                <KeyboardAvoidingView style={styles.keyBoardStyles}>
                    <TextInput
                    style={styles.formTextInput}
                    placeholder={"Enter Book Name"}
                    onChangeText={(text)=>{
                        this.setState({
                            bookName:text
                        })
                    }}
                    value={this.state.bookName}
                    ></TextInput>
                    <TextInput
                    style={[styles.formTextInput,{height:300}]}
                    placeholder={"Why do you want this book?"}
                    multiline={true}
                    numberOfLines={10}
                    onChangeText={(text)=>{
                        this.setState({
                            reasonToRequest:text
                        })
                    }}
                    value={this.state.reasonToRequest}
                    >   
                    </TextInput>

                    <TouchableOpacity
                     style={styles.button}
                     onPress={()=>{
                        this.addRequest(this.state.bookName,this.state.reasonToRequest)
                     }}
                    >
                        <Text>Request</Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    formTextInput:{
        width:"75%",
        height:35,
        alignSelf:'center',
    borderColor:'red',
    borderRadius:10,
    borderWidth:1.5,
    marginTop:20,
    padding:10
    },
    button:{
        width:"75%",
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        backgroundColor:'#ff5722',
        shadowColor:'#000',
        shadowOffset:{
            width:0,
            height:8
        },
        shadowOpacity:0.44,
        shadowRadius:10.32,
        elevation:16,
        marginTop:20
    },
    keyBoardStyles:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})