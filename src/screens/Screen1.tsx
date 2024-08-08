import React from 'react';
import { View,  } from 'react-native';
import { TouchableOpacityButton } from '../components/TouchableOpacityButton';
import { styles } from '../../Theme/apptheme';

export const Screen1 = ({ navigation }: any) => {
  const buttons = [
    { title: 'Imagen 1', screen: 'Imagen 1' },
    { title: 'Imagen 2', screen: 'Imagen 2' },
    { title: '>=', screen: 'Formulario mayor que' },
    { title: '<=', screen: 'Formulario menor que' },
  ];

  const renderButtons = () => {
    return buttons.map((button) => (
      <TouchableOpacityButton
        key={button.title}
        title={button.title}
        onPress={() => navigation.navigate(button.screen)}
      />
    ));
  };

  return (
    <View style={styles.Global}>
      {renderButtons()}
    </View>
  );
};



