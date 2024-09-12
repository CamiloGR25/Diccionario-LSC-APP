import { StatusBar } from 'expo-status-bar'; //para controlar el stado o estilo
import { useNavigation } from '@react-navigation/native';
import { Text, StyleSheet, View, Image, TouchableOpacity, Alert } from 'react-native'; //importar los componentes usados en el codigo

export default function Inicio() {
    //const navigation = useNavigation(); //navegacion a otras pantallas

    return (
        <View style={styles.container}>

            <Image
                style={styles.logoImg}
                source={require("../img/Logo2.png")}
            />

            <Text style={styles.titulo}>DICCIONARIO LSC</Text>

            <Image
                style={styles.inicioImg}
                source={require("../img/ImgInicio.png")}
            />

            <TouchableOpacity style=
                {styles.boton}
                onPress={() => {
                    alert("Boton Iniciar")
                }}
            >
                <Text style={styles.textoBoton}>INICIAR</Text>
            </TouchableOpacity>

            <StatusBar style="auto" />
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, //ocupa toda la pantalla
        backgroundColor: "#0e1788",
        alignItems: 'center',
    },

    titulo: {
        fontFamily: "Roboto",
        fontSize: 56,
        textAlign: "center",//centrar el texto 
        fontWeight: "bold", //bold
        color: "white",
        textDecorationLine: "underline", //linea
        fontStyle: "italic",
        marginTop: "2%",
        bottom: "2%"
    },

    logoImg: {
        width: "90%", //ancho
        height: "40%", //alto
        resizeMode: "contain", //que se adapte uniformemente u no se corte la img
        bottom: "2%"
    },

    inicioImg: {
        width: "50%", //ancho
        height: "30%", //alto
        resizeMode: "contain", //que se adapte uniformemente u no se corte la img
        marginTop: "2%",
        bottom: "3%"
    },

    boton: {
        backgroundColor: "#4fc2ff",
        padding: 8,
        width: "85%",
        borderRadius: 30,
        alignItems: "center", //alinea horizontal
        justifyContent: "center",//alinea vertical
    },

    textoBoton: {
        //color: "white",
        fontWeight: "bold",
        fontSize: 22,
    }

});