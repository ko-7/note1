//React練習用のコンポーネント

import React, { Component } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View
} from 'react-native'
import Storage from 'react-native-storage';
import AsyncStorage from '@react-native-community/async-storage';
import StorageCRUD from '../components/StorageCRUD'
import callTest from '../components/StorageCRUD';

// StorageCRUD({name:'testName',content:'testContent'})

export default class ReactTest extends Component{
  constructor(props){
    super(props)
    // this.state = {
    // };
  }
  render(){
    return(
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={this.onPress}
        >
          <Text>Click me</Text>
        </TouchableOpacity>
          <View>
            <Text>
              You clicked  times
            </Text>

          </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginBottom: 10
  }
})
