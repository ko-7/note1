//参考：https://irisash.github.io/react_native/use_react_navigation/
//App1では以下がわかる
//react-navigation,画面遷移時の値の受け渡し(state,propsを使用)
//画面遷移時の値受け渡し方法は2通り！➀state,propsを使う　➁Context(ReactNativeのデータ管理機能)を使う

import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screens/Home1';
import Form from './src/screens/Form1'

const Stack = createStackNavigator();

export default class App extends Component {
　constructor(props){
　　super(props)
    this.state = {
      todoListt: [],
    };
  }

  addNewItem(todoList){
    this.setState({ todoList })
  }

  render() {
    const { todoList } = this.state;
    return (
      //NavigationContainer:遷移の構成や状態など全体を管理するコンポーネント
      <NavigationContainer>
                 {/* initialRouteName:アプリ起動時に最初に表示される画面を設定する。（指定しなければ一番上の物が表示される） */}
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" options={{title: '一覧'}} >
            {/* <Home /> */}
            {props => <Home {...props} todoList={todoList} />}
          </Stack.Screen>
          <Stack.Screen name="Form" options={{title: '登録'}} >
            {props => <Form {...props} todoList={todoList} addNewItem={v => this.addNewItem(v)} />}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}