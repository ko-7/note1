import React, { Component } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Icon } from 'react-native-elements';


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
    this.dataInit()
    AsyncStorage.clear()
    // this.createData()
  }

  dataInit = async () => {
    //await付けると上から順番に処理し、上の処理の返り値もらって下の非同期処理が始まる？
    await AsyncStorage.getAllKeys().then((responce) => this.setState({allKeys: responce}))
    console.log(this.state.allKeys)
    await AsyncStorage.multiGet(this.state.allKeys).then((responce) => this.setState({allData: responce}))
    let json = this.state.allData
    console.log(json)
    console.log('json')

    let object = []
    console.log(json[0])
    //↓ローカルストレージからのデータを文字列からオブジェクトに変換する　※i=0はデフォルトで入ってる値だからi=1スタート
    for(let i=1; i < json.length; i++){
      let key = json[i][0]
      // object[key] = [JSON.parse(json[i][1])]
    }
    console.log(object) 
    console.log('object')
    this.setState({allData: object})
    console.log(this.state.allData)
  }

  createData = async () =>{
    // try{
    //   const value = {
    //     nameOrContent: 'nameOrContent1',
    //     D_or_F: 'D_or_F1',
    //     belong: 'belong1',
    //     displayOrder: 'displayOrder1',
    //   }
    //   const jsonValue = JSON.stringify(value)
    //   console.log(jsonValue)
    //   await AsyncStorage.setItem(1, jsonValue)
    // }catch(e){
    //   console.log(e.message)
    // }
    // console.log('Done')
    console.log('start')
    for(let i = 1; i > 5; i++){
      console.log(i)
      try{
        const jsonValue = JSON.stringify({
          nameOrContent: 'nameOrContent' + i,
          D_or_F: 'D_or_F' + i,
          belong: 'belong' + i,
          displayOrder: 'displayOrder' + i,
        })
        await AsyncStorage.setItem(i, jsonValue)
        console.log(jsonValue)
      }catch(e){
        console.log(e.message)
      }
      console.log('Done')
    }
    console.log('finish')
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