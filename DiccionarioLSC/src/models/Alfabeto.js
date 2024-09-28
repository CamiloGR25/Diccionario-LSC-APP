import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { Text, View, StyleSheet, Image, TouchableOpacity, SafeAreaView, FlatList } from "react-native";


export default function Alfabeto() {
    const navegacion = useNavigation();
    //const letras = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    const datos = [
        {
            id: "La",
            letra: "A",
            img: require("../img/letras/Letra_A.png")
        },
        {
            id: "Lb",
            letra: "B",
            img: require("../img/letras/Letra_B.png")
        },
        {
            id: "Lc",
            letra: "C",
            img: require("../img/letras/Letra_C.png")
        },
        {
            id: "Ld",
            letra: "D",
            img: require("../img/letras/Letra_D.png")
        },
        {
            id: "Le",
            letra: "E",
            img: require("../img/letras/Letra_E.png")
        },
        {
            id: "Lf",
            letra: "F",
            img: require("../img/letras/Letra_F.png")
        },
        {
            id: "Lg",
            letra: "G",
            img: require("../img/letras/Blanco.png")
        },
        {
            id: "Lh",
            letra: "H",
            img: require("../img/letras/Letra_H.png")
        },
        {
            id: "Li",
            letra: "I",
            img: require("../img/letras/Letra_I.png")
        },
        {
            id: "Lj",
            letra: "J",
            img: require("../img/letras/Blanco.png")
        },
        {
            id: "Lk",
            letra: "K",
            img: require("../img/letras/Blanco.png")
        },
        {
            id: "Ll",
            letra: "L",
            img: require("../img/letras/Letra_L.png")
        },
        {
            id: "Lm",
            letra: "M",
            img: require("../img/letras/Letra_M.png")
        },
        {
            id: "Ln",
            letra: "N",
            img: require("../img/letras/Letra_N.png")
        },
        {
            id: "Lñ",
            letra: "Ñ",
            img: require("../img/letras/Letra_N.png")
        },
        {
            id: "Lo",
            letra: "O",
            img: require("../img/letras/Letra_O.png")
        },
        {
            id: "Lp",
            letra: "P",
            img: require("../img/letras/Letra_P.png")
        },
        {
            id: "Lq",
            letra: "Q",
            img: require("../img/letras/Blanco.png")
        },
        {
            id: "Lr",
            letra: "R",
            img: require("../img/letras/Letra_R.png")
        },
        {
            id: "Ls",
            letra: "S",
            img: require("../img/letras/Letra_S.png")
        },
        {
            id: "Lt",
            letra: "T",
            img: require("../img/letras/Blanco.png")
        },
        {
            id: "Lu",
            letra: "U",
            img: require("../img/letras/Letra_U.png")
        },
        {
            id: "Lv",
            letra: "V",
            img: require("../img/letras/Letra_V.png")
        },
        {
            id: "Lw",
            letra: "W",
            img: require("../img/letras/Letra_W.png")
        },
        {
            id: "Lx",
            letra: "X",
            img: require("../img/letras/Blanco.png")
        },
        {
            id: "Ly",
            letra: "Y",
            img: require("../img/letras/Letra_Y.png")
        },
        {
            id: "Lz",
            letra: "Z",
            img: require("../img/letras/Blanco.png")
        },
    ]

    const Item = ({ letra, img }) => (
        //Boton y estilo original (el modelo para todos) 
        <TouchableOpacity style={style.opcionBtn}
            onPress={() => {
                //Se manda a la otra pantalla y se envia la variable letra del data:
                navegacion.navigate("Letras", { letraSeleccionada: letra })
            }
            }
        >
            <Image
                style={style.imagenOpcion}
                source={img}
            />
            <Text style={style.textoOpcion}>{letra}</Text>
        </TouchableOpacity>
    );

    return (
        //Poner todos los flatlist depende el modelo definido y los datos
        <View style={style.container}>
            <SafeAreaView>
                <FlatList
                    data={datos}
                    numColumns={2}
                    renderItem={({ item }) =>
                        <Item
                            img={item.img}
                            letra={item.letra}
                        />}
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
    opcionBtn: {
        width: 150,
        height: 150,
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