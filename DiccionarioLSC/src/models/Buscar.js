import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { Text, View, StyleSheet, Image, TouchableOpacity, TextInput } from "react-native";

export default function Buscar() {

    return (
        <View style={style.container}>
            <Text style={style.titulo}> BUSCAR PALABRA </Text>
            <TextInput
                placeholder="Palabra..."
                placeholderTextColor={"gray"}
                style={style.input}
            />
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1, //ocupa toda la pantalla
        backgroundColor: "#0e1788",
        position: "relative",
        alignItems: 'center',
    },
    titulo: {
        fontFamily: "Roboto",
        fontSize: 25,
        textAlign: "center",//centrar el texto 
        fontWeight: "bold", //bold
        color: "white",
        textShadowColor: "#000",//negro
        textShadowOffset: { width: 5, height: 5 },//que tanto se muestra la sombra
        textShadowRadius: 10, //el radio de la sombra
        marginTop: "7%",
        bottom: "2%"
    },
    input: {
        borderWidth: 5,//tamaño del borde
        backgroundColor: "white", //color del fondo input
        borderColor: "black",
        padding: 10, //margen dentro 
        paddingStart: 25,//margen para escribir
        width: "90%",
        height: 50,
        borderRadius: 20,
    }
});