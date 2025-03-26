import { NavigationContainer } from '@react-navigation/native'; //container de navegacion
import { createNativeStackNavigator } from '@react-navigation/native-stack'; //el objeto para navegar
import Inicio from './src/views/Inicio'; //se importa el modulo 
import Menu from './src/views/Menu';
import Alfabeto from './src/views/Alfabeto';
import Buscar from './src/views/Buscar';
import Categorias from './src/views/Categorias';
import Practicas from './src/views/Practicas'
import Letras from './src/models/Letras';
import Palabra from './src/models/Palabra';
import CategoriaPalabras from './src/models/CategoriaPalabras'

const stack = createNativeStackNavigator(); //se crea el objeto para navegar

function App() {
  return (
    //lista de pantallas: (con nombre y el componente designado de cada pantalla)
    <NavigationContainer>
      <stack.Navigator initialRouteName="Inicio" /*pantalla inicial*/>
        <stack.Screen name="Inicio" component={Inicio} />
        <stack.Screen name="Menu" component={Menu} />
        <stack.Screen name="Alfabeto" component={Alfabeto} />
        <stack.Screen name="Buscar" component={Buscar} />
        <stack.Screen name="Categorias" component={Categorias} />
        <stack.Screen name="Practicas" component={Practicas} />
        <stack.Screen name="Letras" component={Letras} />
        <stack.Screen name="Palabra" component={Palabra} />
        <stack.Screen name="CategoriaPalabras" component={CategoriaPalabras} />
      </stack.Navigator>
    </NavigationContainer>
  );
}

export default App; //exportar la funcion app

