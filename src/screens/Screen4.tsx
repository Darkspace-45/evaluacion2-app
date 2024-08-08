import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { NumberInput } from '../components/NúmerosMayores';
import { styles } from '../../Theme/apptheme';

export const Screen4: React.FC = () => {
  const [num1, setNum1] = useState<string>('');
  const [num2, setNum2] = useState<string>('');
  const [result, setResult] = useState<string>('');

  const handleGreaterThan = () => {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    if (number1 > number2) {
      setResult('El primer número es mayor que el segundo número.');
    } else if (number1 < number2) {
      setResult('El segundo número es mayor que el segundo número.');
    } else if (number1 === number2) {
        setResult('Los dos números son iguales.');
    } else {
      setResult('Por favor, ingresa ambos números.');
    }
  };

  return (
    <View style={styles.container}>
        <Text style={styles.formulariotext}>Formulario Mayor que</Text>
      <Text style={styles.textprimary}>Llene los siguientes campos:</Text>
      <NumberInput value={num1} onChangeText={setNum1} placeholder="Primer Número" />
      <NumberInput value={num2} onChangeText={setNum2} placeholder="Segundo Número" />
      <Button title="Comparar" onPress={handleGreaterThan} />
      <Text style={styles.resultText}>Resultado: </Text>
      <Text style={styles.result}>{result}</Text>
    </View>
  );
};

