import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet
} from 'react-native';

export default class FormInput extends Component {
  render() {
    const {
      label,
      value,
      placeholder,
      onChangeText
    } = this.props;

    return (
      <View style={styles.formGroup}>
        <Text style={styles.formLabel}>{label}</Text>
        <TextInput
          style={styles.formControl}
          value={value}
          placeholder={placeholder}
          onChangeText={v => onChangeText(v)}
        />
      </View>
    );
  }
}

//propsの初期値を指定している（該当するプロパティの値が渡されなかった場合defaultPropsで指定した値が使われる。
FormInput.defaultProps = {
  label: "",
  value: "",
  placeholder: "",
  onChangeText: _v => null
};

const styles = StyleSheet.create({
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
  }
});