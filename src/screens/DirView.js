import React, { Component } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default class DirView extends Component {
  constructor(props){
    super(props)
    this.state = {
      allKeys: [],          //全てのkeyを管理する変数
      allData: [],          //全データを管理する配列
      key: '',              //各データのkey
      nameOrContent: '',    //「ディレクトリの名前」か「ファイルの内容」を格納
      D_or_F: '',           //ディレクトリ(D)かファイル(F)か
      belong: '',           //どのディレクトリに内にあるか。所属する親ディレクトリのkeyを入れる
      displayOrder: '',     //ディレクトリ開いた時の表示順序
      test: '',
    } 
  }


  

  render(){
    const { navigation} = this.props
    return(
      <SafeAreaView style={styles.container}>
        <Text>{this.state.allData}</Text>
        <FlatList
          data={this.state.allData}
          renderItem={({ item }) => {
            let D_or_F
            item.D_or_F === 'd' ? D_or_F = 'folder' : D_or_F = 'file';

            return(<View style={styles.listItem}>
                {/* <Icon name={D_or_F} style={styles.icon} size={28} /> */}
                <Text style={styles.text}>{item}</Text>
            </View>);
          }}
        />
          <Button onPress={this.createData} />
      </SafeAreaView>
    );
  }
}

//-----------------------------------------------------------------------------------------
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  listItem: {
    flexDirection: 'row',
    marginTop: 0,
    padding: 10,
    borderBottomColor: '#DDD',
    borderBottomWidth: 1,
  },
  icon: {
    marginRight: 10,
  },
  text: {
    fontSize: 18,
  }
});