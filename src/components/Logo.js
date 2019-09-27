import React, {Component} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

const Logo =({subtitle})=>{
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to</Text>
      <Text style={styles.textCo}>DELTA-GROUP</Text>
      <Text style={styles.textmail}> {subtitle} </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    alignItems:"flex-start",
    justifyContent: 'center',
    padding: 25,
  },
  text: {
    color: 'white',
    fontSize:20,
    backgroundColor: 'transparent',
    marginTop: 10,
  },
  textCo: {
    color: 'white',
    fontSize:30,
    backgroundColor: 'transparent',
    marginTop: 5,
  },
  textmail: {
    color: 'white',
    fontSize:12,
    backgroundColor: 'transparent',
  },
});
export default Logo;