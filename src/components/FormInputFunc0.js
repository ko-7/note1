//関数でFormInputを書き換えたもの

const FormInput = ({
  label = "",
  value = "",
  placeholder = "",
  onChangeText = _v => null
}) => (
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

export default FormInput;
    