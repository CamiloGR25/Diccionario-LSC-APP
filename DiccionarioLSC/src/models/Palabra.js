import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { Text, View, StyleSheet, Image, TouchableOpacity, SafeAreaView, FlatList } from "react-native";

export default function Palabra({ route }) {
    const { palabraSeleccionada } = route.params;
    const { imgSeleccionada } = route.params;
    const { explicacionSeleccionada } = route.params
    console.log("la explicacion: " + explicacionSeleccionada);
    return (
        <View style={style.container}>
            <Text style={style.titulo}>{palabraSeleccionada}</Text>
            <View style={{ alignItems: "center" }}>
                <Image source={imgSeleccionada} />
            </View>
            <Text style={style.subtitulo}>EXPLICACIÓN:</Text>
            <Text style={style.texto}>{explicacionSeleccionada}</Text>
            <Text style={style.texto}>Posición de la Mano: Coloca la punta de los dedos de una mano (generalmente la mano dominante) en el mentón o cerca de la boca.{'\n'}{'\n'}
                Movimiento: Luego, mueve la mano hacia afuera y ligeramente hacia adelante, alejándola de la cara. Este movimiento debe ser suave y fluido.</Text>
            <Text style={style.subtitulo}>VIDEO EXPLICATIVO:</Text>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1, //ocupa toda la pantalla
        backgroundColor: "#0e1788",
        position: "relative",
        //alignItems: 'center',
    },
    titulo: {
        fontFamily: "Roboto",
        fontSize: 38,
        textAlign: "center",//centrar el texto 
        fontWeight: "bold", //bold
        color: "white",
        textShadowColor: "#000",//negro
        textShadowOffset: { width: 5, height: 5 },//que tanto se muestra la sombra
        textShadowRadius: 10, //el radio de la sombra
        //fontStyle: "italic", //que el texto se incline
        marginTop: "10%",
        bottom: "2%"
    },
    subtitulo: {
        fontSize: 23,
        textAlign: "left",//centrar el texto 
        fontWeight: "bold", //bold
        color: "white",
        textShadowColor: "#000",//negro
        textShadowOffset: { width: 5, height: 5 },//que tanto se muestra la sombra
        textShadowRadius: 10,
        marginTop: "10%",
        marginLeft: "5%"
    },
    texto: {
        fontSize: 17,
        textAlign: "left",
        color: "white",
        marginLeft: "4%",
        marginRight: "4%"

    }
});