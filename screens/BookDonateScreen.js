import React,{Component} from 'react';
import {View,Text,StyleSheet,TouchableOpacity,FlatList} from 'react-native';
import { ListItem } from 'react-native-elements';
import db from '../config'
import firebase from 'firebase';
import MyHeader from '../components/MyHeader';

export default class BookDonateScreen extends Component{
    constructor(){
        super();
        this.state={
            requestedBooksList:[]
        }
        this.requestRef=null;
    }
    getRequestedBooksList=()=>{
        this.requestRef=db.collection("request_books")
        .onSnapshot((snapshot)=>{
            var requestedBooksList=snapshot.docs.map(document=>document.data());
            this.setState({
                requestedBooksList:requestedBooksList
            })
        })
    }

    componentDidMount(){
        this.getRequestedBooksList();
    }
    componentWillUnmount(){
        this.requestRef();
    }

    keyExtractor=(item,index)=> index.toString(
        renderItem=({item,i})=>{
            return(
                <ListItem 
                key={i}
                title={item.book_name}
                subtitle={item.reason_to_request}
                titleStyle={{tunnel:'black',fontWeight:'bold'}}
                rightElement={
                    
                    <TouchableOpacity style={styles.button}
                    onPress={()=>{
                        this.props.navigation.navigate("RecieverDetails",{"details":item})
                    }}>
                        <Text style={{color:"red"}}>View</Text>
                    </TouchableOpacity>
                }
                bottomDivider
                ></ListItem>
            )
        }
    )
    render(){
        return(
            <View style={{flex:1}}>
                <MyHeader title="Donate Books"/>
             <View style={{flex:1}}>{
                 this.state.requestedBooksList.length===0
                 ?(
                     <View style={styles.subContainer}>
                         <Text style={{fontSize:20}}>List of All Requested Books</Text>
                     </View>
                 ):
                 (
                     <FlatList 
                     keyExtractor={this.keyExtractor}
                     data={this.state.requestedBooksList}
                     renderItem={this.renderItem}
                     ></FlatList>
                 )
        }</View>
            
            </View>
        )
    }
}
const styles=StyleSheet.create({
    button:{
        width:100,
        height:30,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#aaffaa',
        shadowColor:'#000',
        shadowOffset:{
            width:0,
            height:8
        }
    },
    subContainer:{
        flex:1,
        fontSize:20,
        justifyContent:'center',
        alignItems:'center'
    }
})