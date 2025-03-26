import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { Text, View, StyleSheet, Image, TouchableOpacity, SafeAreaView, FlatList } from "react-native";
import LetrasDatos from "../data/LetrasDatos";

export default function Alfabeto() {

    const navegacion = useNavigation();

    const Item = ({ letra, img }) => (
        //Boton y estilo original (el modelo para todos) 
        <TouchableOpacity style={style.opcionBtn}
            onPress={() => {
                //Se manda a la otra pantalla y se envia la variable letra del data:
                navegacion.navigate("Letras", { letraSeleccionada: letra });
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
                    data={LetrasDatos}
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