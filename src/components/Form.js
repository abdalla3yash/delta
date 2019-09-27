import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Dimensions from 'Dimensions';
import { Input } from 'react-native-elements';
import {
  StyleSheet,
  KeyboardAvoidingView,
  View,
  ActivityIndicator,
  TouchableOpacity,
  Image,
  Text,
} from 'react-native';

import UserInput from './UserInput';

const Form =({firstInput,secodndInput, thirdpart})=>{
  
 
      return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
          <UserInput
            placeholder={firstInput}
            autoCapitalize={'none'}
            returnKeyType={'done'}
            autoCorrect={false}
          />
          <Text style={styles.text}> {thirdpart}</Text>
         
         
          <UserInput
            placeholder= {secodndInput}
            returnKeyType={'done'}
            autoCapitalize={'none'}
            autoCorrect={false}
          />
         
        </KeyboardAvoidingView>
      );
    
  
};


const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: "flex-start",
    position:'relative',
  },
  text: {
    color: 'white',
    fontSize:14,
    backgroundColor: 'transparent',
    marginTop: 5,
    paddingBottom:10,
    paddingLeft:25,
  },

   
});
export default Form;