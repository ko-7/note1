import React, { Component } from 'react';
import {
  SafeAreaView,
  FlatList,
  View,
  Text,
  StyleSheet,
  Button
} from 'react-native';

/* テストデータ */
const todoList = [
  { todo: '買い物', memo: '今日の午後６時まで' },
  { todo: '掃除', memo: '今日は必ずやる' }
];

export default class Home extends Component {
  render() {
    const { navigation, todoList } = this.props
    return (
      <SafeAreaView style={styles.container}>
        <Button
          title="登録画面へ"
          onPress={() => navigation.navigate('Form')}
        />
        <FlatList
          style={styles.listBox}
          data={todoList}
          renderItem={({ item }) => {
            return (
              <View style={styles.listItem}>
                <Text>{item.todo}</Text>
                <Text>{item.memo}</Text>
              </View>
            );
          }}
          keyExtractor={item => item.todo}
        />
        {/* <Button title="Formへ" onPress={() => navigation.navigate('Form')} /> */}
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
  listItem: {
    height: 64,
    width: 200,
    marginTop: 16,
    padding: 16,
    borderColor: 'gray',
    borderWidth: 1,
  }
});