import React, { Component } from 'react';
import Storage from 'react-native-storage';
import AsyncStorage from '@react-native-community/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DirView from './src/screens/DirView';
// import StorageCRUD from './src/components/StorageCRUD';

import ReactTest from './src/screens/ReactTest';



//画面遷移関係
// const CRUD = new StorageCRUD
const Stack = createStackNavigator();

export default class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      memoData: [],
      CRUDdata:{
        key: 'note',
        id: 1,
        data:'test',
      }
    };
    // CRUD.save(this.state.CRUDdata)
  }

  render(){
    const memoData = this.state.memoData
    return(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Reacttest' options={{title: '練習'}}>
            {props => <ReactTest {...props} />}
          </Stack.Screen>
          <Stack.Screen name="DirView" options={{title: '一覧'}}>
            {props => <DirView {...props} memoData={memoData} />}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    )
  }


}