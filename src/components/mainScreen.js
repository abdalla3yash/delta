import React, {Component} from 'react';
import PropTypes, { any } from 'prop-types';
import Dimensions from 'Dimensions';
import {StyleSheet, Text,Image, ImageBackground, View,SafeAreaView,ScrollView} from 'react-native';
import bgSrc from '../images/top.png';
import {createDrawerNavigator, DrawerItems} from 'react-navigation'; 
import profile from './profile'; 
import messages from './messages';
import billing from './billing';
import notifications from './notifications'; 
import {Header, Left ,Right,Icon} from 'native-base';
import { AuthSession } from 'expo';


export default class mainScreen extends Component {
  render() {
    return (
      <>
    <View >
    <ImageBackground style={styles.picture} source={bgSrc}>
        {this.props.children}
      </ImageBackground>
    </View>
    <AppDrawerNavigation/>
     </>
    );
  }
}
const customDrawerComponent = (props) =>(
  <SafeAreaView style={{flex:1}}>
    <ImageBackground source={require('../images/drawer.png')} style={{height:DEVICE_HEIGHT,}}>
    <View style={{height:200,alignItems:'center',paddingTop:20, flexDirection: 'column',justifyContent:'center'}}>

      <Image source={require('../images/user.png')} style={{height:120,paddingTop:20,width:120,borderRadius:50}}/>

      <Text style={{fontSize:24,color:'#808080',paddingTop:10}}>Ahmed Gamal</Text>
    </View>
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
    </ImageBackground>
  </SafeAreaView>
)

const AppDrawerNavigation = createDrawerNavigator({
  Notifications: notifications,
  Profile: profile,
  Message: messages,
  Billing: billing,
},{
  contentComponent: customDrawerComponent,
  contentOptions:{
    activeTintColor:'white'
  } 
})



const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  picture: {
    flex: 2,
    width: DEVICE_WIDTH,
    top:-60,
    height: DEVICE_HEIGHT-300,
  },
  text: {
    top: DEVICE_HEIGHT / 2,
    alignSelf:'center',
    alignContent:'center',
    alignItems:'center',
    fontSize:14,
  },
});
