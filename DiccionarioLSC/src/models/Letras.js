import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { Text, View, StyleSheet, Image, TouchableOpacity, SafeAreaView, FlatList } from "react-native";


export default function Letras({ route }) {
    const { letraSeleccionada } = route.params;
    const navegacion = useNavigation();

    //console.log("letra seleccionada: " + letraSeleccionada);
    const datosPalabras = [
        {
            id: "G01",
            palabra: "Gracias",
            img: require("../img/GraciasImg.png"),
            explicacion: "Posición de la Mano: Coloca la punta de los dedos de una mano (generalmente la mano dominante) en el mentón o cerca de la boca. \n\nMovimiento: Luego, mueve la mano hacia afuera y ligeramente hacia adelante, alejándola de la cara. Este movimiento debe ser suave y fluido."
        },
        {
            id: "H01",
            palabra: "Hola",
            img: require("../img/letras/Blanco.png"),
            explicacion: "----Explicacion de Hola----"
        },
        {
            id: "H02",
            palabra: "Ejemplo",
            img: require("../img/letras/Blanco.png"),
            explicacion: "----Explicacion de ejemplo----"
        },
        {
            id: "H03",
            palabra: "Ejemplo1",
            img: require("../img/letras/Blanco.png"),
            explicacion: "----Explicacion de ejemplo----"
        },
        {
            id: "H04",
            palabra: "Ejemplo2",
            img: require("../img/letras/Blanco.png"),
        },
        {
            id: "H05",
            palabra: "Ejemplo3",
            img: require("../img/letras/Blanco.png"),
            explicacion: "----Explicacion de ejemplo----"
        },
        {
            id: "H06",
            palabra: "Ejemplo4",
            img: require("../img/letras/Blanco.png"),
            explicacion: "----Explicacion de ejemplo----"
        },
        {
            id: "H07",
            palabra: "Ejemplo5",
            img: require("../img/letras/Blanco.png"),
            explicacion: "----Explicacion de ejemplo----"
        },
        {
            id: "H08",
            palabra: "Ejemplo6",
            img: require("../img/letras/Blanco.png"),
            explicacion: "----Explicacion de ejemplo----"
        },
        {
            id: "H09",
            palabra: "Ejemplo7",
            img: require("../img/letras/Blanco.png"),
            explicacion: "----Explicacion de ejemplo----"
        },
        {
            id: "H10",
            palabra: "Ejemplo8",
            img: require("../img/letras/Blanco.png"),
            explicacion: "----Explicacion de ejemplo----"
        }
    ]

    const Item = ({ palabra, img, explicacion }) => (
        //Boton y estilo original (el modelo para todos) 
        <TouchableOpacity style={style.opcionBtn}
            onPress={() => {
                //Se manda a la otra pantalla y se envia la variable letra del data:
                navegacion.navigate("Palabra", { palabraSeleccionada: palabra, imgSeleccionada: img, explicacionSeleccionada: explicacion })
            }
            }
        >
            <Image
                style={style.imagenOpcion}
                source={img}
            />
            <Text style={style.textoOpcion}>{palabra}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={style.container}>

            <Text style={style.titulo}>Palabras por la letra: {letraSeleccionada}</Text>

            <SafeAreaView>
                <FlatList
                    data={datosPalabras}
                    numColumns={2}
                    renderItem={({ item }) =>
                        <Item
                            img={item.img}
                            palabra={item.palabra}
                        />}
                    keyExtractor={item => item.id}
                />
            </SafeAreaView>

            <StatusBar style="auto" />
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
    }

});