import React, { Component } from 'react';
import {
  SafeAreaView,
  FlatList,
  View,
  Text,
  StyleSheet,
  Button
} from 'react-native';

const memoTest = {
  dirNameOrFileContent : 'test1',
  dirOrFile : 'd',
  belong : '0',
  displayOrder : '1'
}

export default class Home extends Component{
  render(){
    const { navigation, memoData } = this.props

    return(
      <SafeAreaView style={styles.container}>
        <View>
          <Text>practice</Text>
          <Button title='もっとHOMEへ' onPress={()=> navigation.push('Home')} />
          <Text>{memoData.belong}</Text>
          <Text>{memoData.dirOrFile}</Text>
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  listItem: {
    height: 64,
    width: 200,
    marginTop: 16,
    padding: 16,
    borderColor: 'gray',
    borderWidth: 1,
  }
});