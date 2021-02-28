//react-native-storageでロードした内容をカラム内容で分岐さることができた！
//ただ、どうしてもreact-native-storageをうまく扱えなかったため使用をあきらめた。

import React, { Component } from 'react';
import Storage from 'react-native-storage';
import AsyncStorage from '@react-native-community/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DirView from './src/screens/DirView3';

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
      data: [        
        {
        dirNameOrFileContent : 'stock',
        dirOrFile : 'd',
        belong : 'Home',
        displayOrder : 1
        },
        {
          dirNameOrFileContent : 'IT',
          dirOrFile : 'd',
          belong : 'Home',
          displayOrder : 1
        },
        {
          dirNameOrFileContent : 'company',
          dirOrFile : 'd',
          belong : 'Home',
          displayOrder : 1
        },
        {
          dirNameOrFileContent : 'long',
          dirOrFile : 'f',
          belong : 'Stock',
          displayOrder : 1
        },
        {
          dirNameOrFileContent : 'short',
          dirOrFile : 'f',
          belong : 'Stock',
          displayOrder : 1
        }
      ],
      expires: null
    })
    
    storage.load({
      key: 'memoData',
    }).then(ret => {
      //ロードに成功したら
      console.log('1time')
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
    console.log('hey')
    console.log(memoData[0])
    return(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="DirView" options={{title: '一覧'}}>
            {props => <DirView {...props} memoData={memoData} />}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    )
  }


}