import React, { Component } from 'react';
import Dimensions from 'Dimensions';

import { StyleSheet, Text, ImageBackground, View, SafeAreaView, ScrollView } from 'react-native';
import { Header, Left, Right, Icon } from 'native-base';

export default class messages extends Component {

  static navigationOption = {
    drawerIcon: ({ tintColor }) => (
      <Icon name="home" style={{ fontSize: 24, color: tintColor }} />
    )
  }

  render() {
    return (


      <View style={{marginLeft:20}}>
        <View style={styles.container}>
          <Left style={styles.leftmenu}>
            <Icon name="menu" color='' onPress={() => this.props.navigation.openDrawer()} />
          </Left>
        </View>

        <View style={styles.text}>
          <Text >Messages Screen</Text>
        </View>
      </View>
    );
  }
}

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "flex-start",
    paddingTop: 15
  },
  text: {
    top: DEVICE_HEIGHT / 2,
    alignSelf: 'center',
    alignContent: 'center',
    alignItems: 'center',
    fontSize: 14,
  },
  leftmenu: {
    marginLeft: 10,
    marginTop: 20
  }
});

