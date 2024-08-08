import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface TouchableOpacityButtonProps {
  onPress: () => void;
  title: string;
}

export const TouchableOpacityButton: React.FC<TouchableOpacityButtonProps> = ({ onPress, title }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    margin: 10,
    backgroundColor: 'blue',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
});
