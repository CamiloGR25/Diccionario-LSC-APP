import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { Text, View, StyleSheet, Image, TouchableOpacity, SafeAreaView, FlatList } from "react-native";


export default function Alfabeto() {
    const navegacion = useNavigation();
    const letras = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    const datos = [
        {
            id: "l1",
            letra: "A",
            img: require("../img/letras/Letra_A.png")
        },
        {
            id: "l2",
            letra: "B",
            img: require("../img/letras/Letra_A.png")
        },
        {
            id: "l3",
            letra: "C",
            img: require("../img/letras/Letra_A.png")
        },
    ]

    const Item = ({ letra, img }) => (
        <TouchableOpacity style={style.opcionBtn}>
            <Image
                style={style.imagenOpcion}
                source={img}
            />
            <Text style={style.textoOpcion}>{letra}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={style.container}>
            <SafeAreaView>
                <FlatList
                    data={datos}
                    //numColumns={2}
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