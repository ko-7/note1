import React, { Component } from 'react';
import {
  SafeAreaView,
  FlatList,
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { Icon } from 'react-native-elements'

export default class Home extends Component{
  constructor(props) {
    super(props);
    this.state = {
      status: "Home",
    };
  }
  render(){
    const { navigation, memoData } = this.props
    const status = this.state.status
    return(
      <SafeAreaView style={styles.container}>
        <FlatList
          data={memoData}
          renderItem={({ item }) => {
            let dirOrFile
            item.dirOrFile === 'd' ? dirOrFile = 'folder' : dirOrFile = 'file';
            return(
              <View style={styles.listItem}>
                <Icon name={dirOrFile} style={styles.icon} size={28} />
                <Text style={styles.text}>{item.dirNameOrFileContent}</Text>
              </View>
            );
          }}
        />
      </SafeAreaView>
    );
  }
}

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