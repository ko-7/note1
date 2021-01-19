import { NavigationContainer } from '@react-navigation/native';
import React, { Component } from 'react';
import {
  SafeAreaView,
  Button,
  StyleSheet,
} from 'react-native';
import FormInput from '../components/FormInput1';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoValue: "",
      memoValue: "",
    };
  }

  render() {
    const { todoValue, memoValue } = this.state;
    const { navigation, todoList } = this.props;

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
          placeholder="何かメモ"
          onChangeText={v => this.setState({ memoValue: v })}
        />
        <Button
          title="登録"
          onPress={() => {
            const newList = [{ todo: 'asd', memo: 'memo1'  }]
            // const newList = todoList.concat({ todo: todoValue, memo: memoValue })
            this.setState({
              todoValue: "",
              memoValue: "",
            });
            this.props.addNewItem(newList);
            navigation.goBack();
          }}
        />
        {/* <Button title="Homeへ" onPress={() => navigation.navigate('Home')} /> */}
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
  }
});