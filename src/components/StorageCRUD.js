import React, { Component } from 'react'
import Storage from 'react-native-storage';
import AsyncStorage from '@react-native-community/async-storage';

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


export default function StorageCRUD(props){

  switch(props.processing){

    //Createの処理
    case 'C':
      console.log('called Create');
      storage.save({
        key: props.key,
        id: props.id,
        data: {
          D_or_F: props.D_or_F,
          belogn: props.belong,
          displayOrder: props.displayOrder,
        }
      })
      break;

    //Readの処理
    case 'R':
      console.log('called Read');
      storage.load({
        key: props.key,
        id: props.id
      }).then(ret => {
        console.log(ret)
        return ret
      })
      break;

    //Deleteの処理
    case 'D':
      console.log('called Delete');
      storage.remove({
        key: props.key,
        id: props.id
      })
      break;
      
    //全レコード取得の処理
    case 'A':
      console.log('called all recode');
      storage.getIdsForKey('localData').then(ret => {
        return ret
      })
  }
}

//CRUD({processing:'C',key:'localData',id:'1',D_or_F:'d',belong:'Home',displayOrder:1})