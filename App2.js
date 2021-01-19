// 参考：https://www.npmjs.com/package/react-native-storage
// Appではローカルストレージの使い方がわかる！
//データ保存～画面表示まで

import React, { Component } from 'react';
import Storage from 'react-native-storage';
import AsyncStorage from '@react-native-community/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screens/Home2';

//ローカルストレージ
const storage = new Storage({
  size: 1000,                       //最大容量、1000がデフォルト
  storageBackend: AsyncStorage,       //storageBackendをセットしないとリロードでデータが消える
  defauleExpires: 1000 * 3600 * 24,   //キャッシュの期限　nullにすると無期限にできる
  enableCache: true,                  //メモリにキャッシュするかどうか。デフォルトはtrue
  sync:{                              //リモートシンクの設定？
  }
});

//画面遷移関係
const Stack = createStackNavigator();

export default class App extends Component{
  constructor(props){
　　super(props)
    this.state = {
      memoData: [],
    };
    storage.save({
      key: 'memoData',
      data: {
        // 'dirNameOrFileContent' : 'stock',
        // 'dirOrFile' : 'd',
        // 'belong' : '0',
        // 'displayOrder' : '1'
        dirNameOrFileContent : 'stock',
        dirOrFile : 'd',
        belong : 0,
        displayOrder : 1
      },
      expires: null
    })
    
    storage.load({
      key: 'memoData',
    }).then(ret => {
      //ロードに成功したら
      console.log(ret);
      this.setState({memoData: ret})
      console.log(this.state.memoData)
    }).catch(err => {
      //ロードに失敗したら
      console.warn(err.message);
      switch (err.name){
        case 'NotFoundError':
          //見つからなかった場合の処理を書く
          break;
        case 'ExpiredError':
          //キャッシュ切れの場合の処理を書く
          break;
      }
    })
  }

  render(){
    const memoData = this.state.memoData
    return(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" options={{title: '一覧'}}>
            {props => <Home {...props} memoData={memoData} />}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    )
  }


}