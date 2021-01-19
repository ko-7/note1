//参考：https://irisash.github.io/react_native/use_props/
//App0では以下がわかる！
//props,state,Flatlist,コンポーネント化,inputFormの使い方がわかる

import React,{Component} from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput,
  Button,
  FlatList,
  SafeAreaView
 } from 'react-native';
 import FormInput from './src/components/FormInput0'

export default class App extends Component {
  // constructorはコンポーネントが作成されるときに一度だけ呼び出される
  // constructorでstateを初期化する
  constructor(props){
    super(props);
    this.state = {
      todoValue: "",
      memoValue: "",
      todoList: [],
    }
  }

  render(){
    // renderの中と外では同じ名前でも別の変数！　外の変数にはthis.がつく！
    const { todoValue,memoValue,todoList } = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <FormInput
          label="やること"
          value={todoValue}
          placeholder="何かやること"
          onChangeText={v => this.setState({ todoValue: v })}
        />
        <FormInput
          label="メモ"
          value={memoValue}
          placeholder="何かメモ"               // ↓ memoValueにInput内容を代入してる
          onChangeText={v => this.setState({ memoValue: v })}
        />
        <Button
          title="登録"
          onPress={() => {
            const newList = todoList.concat({ todo: todoValue, memo: memoValue });
            this.setState({
              todoValue: "",
              memoValue: "",
              todoList: newList
            });
          }}
        />

        <FlatList 
          style={styles.listBox}
          data={todoList}
                      // ↓ itemにはdataの値がそのまま入る(ここではtodoList={todo: todoValue, memo: memoValue})
          renderItem={({ item }) => {
            return(
              <View style={styles.listItem}>
                <Text>{item.todo}</Text>
                <Text>{item.memo}</Text>
              </View>
            );
          }}
          keyExtractor={item => item.todo}
        />
      </SafeAreaView>
    );
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
  formGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  formLabel: {
    paddingRight: 16,
  },
  formControl: {
    height: 40,
    width: 160,
    padding: 8,
    borderColor: 'gray',
    borderWidth: 1
  },
  listItem: {
    height: 64,
    width: 200,
    flexDirection: 'row',
    marginBottom: 16,
    padding: 16,
    borderColor: 'gray',
    borderWidth: 1,
  }
})