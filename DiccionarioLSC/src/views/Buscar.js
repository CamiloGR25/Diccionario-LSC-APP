import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, TextInput, View, StyleSheet, Image, TouchableOpacity, SafeAreaView, FlatList } from "react-native";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../data/firebaseConfig";

export default function Buscar() {

    const [palabras, setPalabras] = useState([]);
    const [busqueda, setBusqueda] = useState("");
    const [filtradas, setFiltradas] = useState([]);

    const navegacion = useNavigation();

    const cargarPalabras = async () => {
        //se cargan los datos de la colleccion palabras
        const palabrasRef = await getDocs(collection(db, "palabra"));
        const data = palabrasRef.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setPalabras(data);
        setFiltradas(data);
    };

    useEffect(() => {
        cargarPalabras();
    }, []);

    useEffect(() => {
        //se realiza la busqueda que incluya
        const texto = busqueda.toLowerCase();
        const resultado = palabras.filter(item => item.titulo.toLowerCase().includes(texto));
        setFiltradas(resultado);
    }, [busqueda]);

    const Item = ({ palabra, img, posicion, movimiento, imgExplicacion, video }) => (
        <TouchableOpacity
            style={style.opcionBtn}
            onPress={() => {
                navegacion.navigate("Palabra", {
                    palabraSeleccionada: palabra,
                    imgSeleccionada: imgExplicacion,
                    posicionSeleccionada: posicion,
                    movimientoSeleccionado: movimiento,
                    videoSeleccionado: video
                });
            }}
        >
            <Image style={style.imagenOpcion} source={{ uri: img }} />
            <Text style={style.textoOpcion}>{palabra}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={style.container}>
            <SafeAreaView>

                <Text style={style.titulo}>Buscar palabra</Text>
                <TextInput
                    placeholder="Palabra..."
                    placeholderTextColor={"gray"}
                    style={style.input}
                    value={busqueda}
                    onChangeText={setBusqueda}
                />

                <FlatList
                    data={filtradas}
                    numColumns={2}
                    renderItem={({ item }) => (
                        <Item
                            img={item.img}
                            palabra={item.titulo}
                            posicion={item.posicion}
                            movimiento={item.movimiento}
                            imgExplicacion={item.imgExplicacion}
                            video={item.video}
                        />
                    )}
                    keyExtractor={item => item.id}
                />
            </SafeAreaView>
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
        fontSize: 32,
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
    input: {
        borderWidth: 5,//tamaño del borde
        backgroundColor: "white", //color del fondo input
        borderColor: "black",
        padding: 10, //margen dentro 
        paddingStart: 25,//margen para escribir
        //width: "100%",
        height: 50,
        borderRadius: 20,
    },
    opcionBtn: {
        width: 150,
        height: 165,
        borderWidth: 3,
        borderColor: "white",
        borderRadius: 20,
        marginRight: 10,//anchos del cuadrado
        marginLeft: 10,
        marginTop: "5%",
        marginBottom: "7%",
        backgroundColor: "#42baf9",
        alignItems: "center", //centrar el contenido dentro de los btn
    },
    imagenOpcion: {
        flex: 1,
        resizeMode: "contain",
        width: "100%"
    },
    textoOpcion: {
        fontWeight: "bold",
        fontSize: 22,
        color: "white",
        textShadowColor: "#000",//negro
        textShadowOffset: { width: 2, height: 2 },//que tanto se muestra la sombra
        textShadowRadius: 2 //el radio de la sombra
    },
});