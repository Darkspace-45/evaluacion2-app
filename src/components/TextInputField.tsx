import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

interface Props {
    placeholder: string;
    value: string;
    onChangeText: (text: string) => void;
}

export const TextInputField: React.FC<Props> = (props) => {
  return <TextInput style={styles.input} {...props} />;
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: '#747474',
    borderWidth: 1,
    margin: 10,
    paddingHorizontal: 10,
  },
});
