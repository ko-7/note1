//AsyncStorageも扱いきれず使用を断念。

import React, { Component } from 'react';
import Storage from 'react-native-storage';
import AsyncStorage from '@react-native-community/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DirView from './src/screens/DirView4';

import TestAsyncStorage from './src/screens/TestAsyncStorage'
import TestReactNativeStorage from './src/screens/TestReactNativeStorage';



//画面遷移関係
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
  }

  render(){
    const memoData = this.state.memoData
    return(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="DirView" options={{title: '一覧'}}>
            {props => <DirView {...props} memoData={memoData} />}
          </Stack.Screen>
          <Stack.Screen name='TestAsyncStorage' options={{title: 'AsyncStorage'}}>
            {props => <TestAsyncStorage {...props} />}
          </Stack.Screen>
          <Stack.Screen name='Reacttest' options={{title: '練習'}}>
            {props => <TestReactNativeStorage {...props} />}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    )
  }


}