//React練習用のコンポーネント
//react-native-storageの練習

import React, { Component } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Button,
  TextInput,
} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';
import Storage from 'react-native-storage';


//ローカルストレージの設定
const storage = new Storage({
  //最大レコード数？
  size: 1000,
  //↓AsyncStorageをRNで使用する宣言。これないとページリロードでデータ消える。
  storageBackend: AsyncStorage,
  //データｎ期限？ null：期限切れ無し
  defaultExpires: null,
})
global.storage = storage;


export default class ReactTest extends Component{
  constructor(props){
    super(props)
    this.state = {
      dataIdNumManage: [], //データ削除などで空いたidを記憶する。
      allKeys: [],      //ページ表示時にローカルストレージの全データのkeyを格納する(ソートのため)
      allData: [],      //ローカルストレージの全データを格納する
      key: 'localData',             //データのkey　idとして使用する。
      id: '',
      // nameOrContent: '',   //「ディレクトリの名前」か「ファイルの内容」を格納
      // D_or_F: '',          //ディレクトリ(D)かファイル(F)か
      // belong: '',          //どのディレクトリの階層にいるか、所属する親ディレクトリのkey(id)を入れる
      // displayOrder: '',     //ディレクトリ開いたときの表示順序を格納
    }

    for(let i = 0; i < 5; i++){
    storage.save({
      key: 'localData',
      data: {
        id: i,
        nameOrContent: 'test',
        D_or_F: 'd',
        belong: 'Home',
        displayOrder: i
      }
    })}
  }

  //欄入力時に動作する関数--------------------------------------------------
  setId = (value) => {
    this.setState({id: value});
  }
  setNameOrContent = (value) => {
    this.setState({nameOrContent: value});
  }

  //ボタン押した時動作する関数----------------------------------------------
  setData = () => {
    storage.save({
      key: this.state.key,
      data: {
        id: this.state.id,
        nameOrContent: this.state.nameOrContent,
        D_or_F: this.state.D_or_F,
        belong: this.state.belong,
        displayOrder: this.state.displayOrder,
      }
    })
  }

  loadData = () => {
    storage.load({
      key: this.state.key
    }).then(ret => {
      console.log(ret);
    }).catch(err => {
      console.log(err.message);
    })
  }

  render(){
    return(
      <View style={styles.container}>
        <Text>Key Id</Text>
        <TextInput style={styles.textInput} autoCapitalize='none' onChangeText={this.setId} />
        <Text>{this.state.id}</Text>

        <Text>nameOrContent</Text>
        <TextInput style={styles.textInput} autoCapitalize='none' onChangeText={this.setNameOrContent} />
        <Text>{this.state.id}</Text>

        <Button title='保存' onPress={this.setData} />
        <Button title='データ全削除' onPress={this.clearAllData} />
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
  textInput: {
    margin: 5,
    height: 30,
    borderWidth: 1,
    backgroundColor: '#fff'
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginBottom: 10
  }
})
