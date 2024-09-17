import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";

//inicio de la funcion llamada para mostrar en pantalla
export default function Menu() {
    const navegacion = useNavigation();//navegacion a otras pantallas

    return (
        <View style={style.container}>

            <Image
                style={style.logoimg}
                source={require("../img/Logo2.png")}
            />

            <Text style={style.titulo}>
                MENÚ
            </Text>

            <View style={{ flexDirection: "row" /*alineacion de elementos*/ }}>
                <TouchableOpacity
                    onPress={() => {
                        alert("Entrando a la pantalla buscar")
                    }}
                >
                    <View style={style.opcionBtn}>
                        <Image
                            style={style.imagenOpcion}
                            //source={require("../img/Logo2.png")}
                            source={{ uri: "https://media-public.canva.com/mbVQ4/MADwTymbVQ4/1/tl.png" }}
                        />
                        <Text style={style.textoOpcion}>
                            BUSCAR
                        </Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        alert("Entrando a la pantalla categoria")
                    }}
                >
                    <View style={style.opcionBtn}>
                        <Image
                            style={style.imagenOpcion}
                            //source={require("../img/Logo2.png")}
                            source={{ uri: "https://media-public.canva.com/mbVQ4/MADwTymbVQ4/1/tl.png" }}
                        />
                        <Text style={style.textoOpcion}>
                            CATEGORIAS
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={{ flexDirection: "row" /*alineacion de elementos*/ }}>

                <TouchableOpacity
                    onPress={() => {
                        alert("Entrando a la pantalla Alfabeto")
                    }}
                >
                    <View style={style.opcionBtn}>
                        <Image
                            style={style.imagenOpcion}
                            //source={require("../img/Logo2.png")}
                            source={{ uri: "https://media-public.canva.com/mbVQ4/MADwTymbVQ4/1/tl.png" }}
                        />
                        <Text style={style.textoOpcion}>
                            ALFABETO
                        </Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        alert("Emtrando a la pantalla practicar")
                    }}
                >
                    <View style={style.opcionBtn}>
                        <Image
                            style={style.imagenOpcion}
                            //source={require("../img/Logo2.png")}
                            source={require("../img/LupaNegra.png")}
                        />
                        <Text style={style.textoOpcion}>
                            PRACTICAR
                        </Text>
                    </View>

                </TouchableOpacity>


            </View>

            <TouchableOpacity style={style.boton}
                onPress={() => {//cambio de pantalla
                    navegacion.navigate("Inicio")
                }}
            >
                <Text style={style.textoBoton}>
                    Volver
                </Text>
            </TouchableOpacity>

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
        /*flexDirection: 'row',
        justifyContent: 'flex-end',*/

    },
    logoimg: {
        width: "80%",//ancho
        height: 130,//alto
        resizeMode: 'contain',//que se adapte uniformemente u no se corte la img
        position: 'absolute',
        top: 30,
        right: "40%"
    },
    titulo: {
        fontFamily: "Roboto",
        fontSize: 55,
        textAlign: "center",//centrar el texto 
        fontWeight: "bold", //bold
        color: "white",
        //fontStyle: "italic", //que el texto se incline
        marginTop: "42%",
        bottom: "2%"
    },
    boton: {
        backgroundColor: "#f0ee4c",
        padding: 8,
        width: "85%",
        borderRadius: 30,
        alignItems: "center", //alinea horizontal
        justifyContent: "center",//alinea vertical
        position: 'absolute', //posicion absoluta del objeto
        bottom: 30, //margen que tendra el objeto

    },
    textoBoton: {
        //color: "white",
        fontWeight: "bold",
        fontSize: 22,
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
        color: "white"
    }

});