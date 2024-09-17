import { NavigationContainer } from '@react-navigation/native'; //container de navegacion
import { createNativeStackNavigator } from '@react-navigation/native-stack'; //el objeto para navegar
import Inicio from './src/models/Inicio'; //se importa el modulo 
import Menu from './src/models/Menu';

const stack = createNativeStackNavigator(); //se crea el objeto para navegar

function App() {
  return (
    //lista de pantallas: (con nombre y el componente designado de cada pantalla)
    <NavigationContainer>
      <stack.Navigator initialRouteName="Inicio" /*pantalla inicial*/>
        <stack.Screen name="Inicio" component={Inicio} />
        <stack.Screen name="Menu" component={Menu} />
      </stack.Navigator>
    </NavigationContainer>
  );
}

export default App; //exportar la funcion app

