import React, { useState } from 'react';
import i18n from '../../util/i18n';
import { StyleSheet, View, Text, TextInput } from 'react-native';

const InputField = props => {
  const { keyName, value, label, onLiveChange } = props;
  const [isFocused, setIsFocused] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false); // Start as false and only invalidate on blur
  return (
    <View style={styles.inputField}>
      <Text
        style={[
          styles.label,
          isFocused ? styles.focusedText : {},
          isEmpty ? styles.emptyText : {}
        ]}
      >
        {i18n.t(label)}
      </Text>
      <TextInput
        style={[
          styles.input,
          isFocused ? styles.focused : {},
          isEmpty ? styles.empty : {}
        ]}
        onChangeText={text => onLiveChange(keyName, text)}
        value={value}
        onFocus={() => {
          setIsFocused(true);
          setIsEmpty(false);
        }}
        onBlur={() => {
          if ((value || '').length === 0) {
            setIsEmpty(true);
          }
          setIsFocused(false);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputField: {
    width: '100%',
    marginTop: 16
  },
  label: {
    marginLeft: 8,
    marginBottom: -24,
    zIndex: 1,
    fontSize: 12
  },
  input: {
    width: '100%',
    height: 64,
    backgroundColor: '#E8E8E8',
    alignSelf: 'center',
    padding: 8,
    paddingTop: 24
  },
  focused: {
    borderBottomColor: '#3351CE',
    borderBottomWidth: 2
  },
  focusedText: {
    color: '#3351CE'
  },
  empty: {
    borderColor: 'red',
    borderWidth: 2
  },
  emptyText: {
    color: 'red'
  }
});

export default InputField;
