import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { NumberInput } from '../components/NúmerosMayores';
import { styles } from '../../Theme/apptheme';

export const Screen5: React.FC = () => {
  const [num1, setNum1] = useState<string>('');
  const [num2, setNum2] = useState<string>('');
  const [result, setResult] = useState<string>('');

  const menorque = () => {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    if (number1 < number2) {
      setResult('El primer número es menor que el segundo número.');
    } else if (number1 > number2) {
      setResult('El segundo número es menor que el segundo número.');
    } else if (number1 === number2) {
        setResult('Los dos números son iguales.');
    } else {
      setResult('Por favor, ingresa ambos números.');
    }
  };

  return (
    <View style={styles.container}>
        <Text style={styles.formulariotext}>Formulario Menor que</Text>
      <Text style={styles.textprimary}>Completa los campos para {'\n'}      realizar la operación:</Text>
      <NumberInput value={num1} onChangeText={setNum1} placeholder="Primer Número" />
      <NumberInput value={num2} onChangeText={setNum2} placeholder="Segundo Número" />
      <Button title="Comparar" onPress={menorque} />
      <Text style={styles.resultText}>Resultado: </Text>
      <Text style={styles.result}>{result}</Text>
    </View>
  );
};

