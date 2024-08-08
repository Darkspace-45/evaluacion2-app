import { createStackNavigator } from "@react-navigation/stack";
import { Screen1 } from "../screens/Screen1";
import { Screen2 } from "../screens/Screen2";
import { Screen3 } from "../screens/Screen3";
import { Screen4 } from "../screens/Screen4";
import { Screen5 } from "../screens/Screen5";

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Inicio" component={Screen1} />
      <Stack.Screen name="Imagen 1" component={Screen2} />
      <Stack.Screen name="Imagen 2" component={Screen3} />
      <Stack.Screen name="Formulario mayor que" component={Screen4} />
      <Stack.Screen name="Formulario menor que" component={Screen5} />
    </Stack.Navigator>
  );
};
