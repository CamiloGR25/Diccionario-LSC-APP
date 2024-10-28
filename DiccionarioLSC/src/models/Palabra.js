import { Text, View, StyleSheet, Image, TouchableOpacity, SafeAreaView, FlatList } from "react-native";

export default function Palabra({ route }) {
    const { palabraSeleccionada } = route.params;
    const { imgSeleccionada } = route.params;
    const { posicionSeleccionada } = route.params
    const { movimientoSeleccionado } = route.params

    return (
        <View style={style.container}>
            <Text style={style.titulo}>{palabraSeleccionada}</Text>
            <View style={{ alignItems: "center", }}>
                <View style={style.imgContenedor}>
                    <Image style={style.imagen}
                        source={{ uri: imgSeleccionada }} />
                </View>
            </View>
            <Text style={style.subtitulo}>EXPLICACIÓN:</Text>
            <Text style={style.texto}>Posición de la mano: {posicionSeleccionada}</Text>
            <Text style={style.texto}>Movimiento: {movimientoSeleccionado}</Text>
            <Text style={style.subtitulo}>VIDEO EXPLICATIVO:</Text>

        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1, //ocupa toda la pantalla
        backgroundColor: "#0e1788",
        position: "relative",
    },
    titulo: {
        fontSize: 40,
        textAlign: "center",//centrar el texto 
        fontWeight: "bold",
        color: "white",
        textShadowColor: "#000",//negro
        textShadowOffset: { width: 5, height: 5 },//que tanto se muestra la sombra
        textShadowRadius: 10, //el radio de la sombra
        marginTop: "10%",
        bottom: "2%"
    },
    subtitulo: {
        fontSize: 24,
        textAlign: "left",//centrar el texto 
        fontWeight: "bold", //bold
        color: "white",
        textShadowColor: "#000",//negro
        textShadowOffset: { width: 5, height: 5 },//que tanto se muestra la sombra
        textShadowRadius: 10,
        marginTop: "7%",
        marginLeft: "5%",
        marginBottom: "3%"
    },
    texto: {
        fontSize: 18,
        textAlign: "left",
        color: "white",
        marginLeft: "5%",
        marginRight: "4%",
        marginBottom: "3%"
    },
    imgContenedor: {
        width: 250,
        height: 250,
        borderWidth: 3,
        borderColor: "black",
        borderRadius: 10,
        backgroundColor: "white",
        alignItems: "center", //centrar el contenido dentro del contenedor

    },
    imagen: {
        flex: 1,
        resizeMode: "contain",
        width: "100%"
    },
});