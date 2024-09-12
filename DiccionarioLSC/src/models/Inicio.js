import { StatusBar } from 'expo-status-bar'; //para controlar el stado o estilo
import { useNavigation } from '@react-navigation/native';
import { Text, StyleSheet, View } from 'react-native'; //importar los componentes usados en el codigo

export default function Inicio() {
    //const navigation = useNavigation(); //navegacion a otras pantallas

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Inicioaaaa</Text>

            <StatusBar style="auto" />
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "blue",
        alignItems: 'center',
        //justifyContent: 'center',
    },
    titulo: {
        fontSize: 60,
        fontWeight: "bold",
        color: "white",
        //borderWidth: 2,
        //borderColor: "black",
    }
});