import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { styles } from '../../Theme/apptheme';

interface NumberInputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
}

export const NumberInput: React.FC<NumberInputProps> = ({ value, onChangeText, placeholder }) => {
  return (
    <TextInput
      style={styles.input}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      keyboardType="numeric"
    />
  );
};

export const Screen4: React.FC = () => {
  const [num1, setNum1] = useState<string>('');
  const [num2, setNum2] = useState<string>('');
  const [result, setResult] = useState<string>('');

  const handleGreaterThan = () => {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);
  
    if (number1 < number2) {
      setResult('El primer número es menor que el segundo número.');
    } else if (number1 > number2) {
      setResult('El segundo número es menor que el primer número.');
    } else if (number1 === number2) {
      setResult('Los dos números son iguales.');
    } else {
      setResult('Por favor, ingresa ambos números.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textprimary}>Llene los siguientes campos:</Text>
      <NumberInput value={num1} onChangeText={setNum1} placeholder="Primer Número" />
      <NumberInput value={num2} onChangeText={setNum2} placeholder="Segundo Número" />
      <Button title="Comparar Números" onPress={handleGreaterThan} />
      <Text style={styles.resultText}>Resultado: </Text>
      <Text style={styles.result}>{result}</Text>
    </View>
  );
};


