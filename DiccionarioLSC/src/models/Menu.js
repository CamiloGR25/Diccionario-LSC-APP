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

            <View style={style.contenedorOpciones}>

                <Text style={style.titulo}>
                    MENÚ
                </Text>

                <View style={{ flexDirection: "row" /*alineacion de elementos*/ }}>
                    <TouchableOpacity
                        //BUSCAR
                        onPress={() => {
                            //console.log("Entrando a la pantalla buscar");
                            navegacion.navigate("Buscar");
                        }}
                    >
                        <View style={style.opcionBtn}>
                            <Image
                                style={style.imagenOpcion}
                                source={require("../img/LupaNegra.png")}
                            />
                            <Text style={style.textoOpcion}>
                                BUSCAR
                            </Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        //CATEGORIA
                        onPress={() => {
                            //console.log("Entrando a la pantalla categoria");
                            navegacion.navigate("Categorias");
                        }}
                    >
                        <View style={style.opcionBtn}>
                            <Image
                                style={style.imagenOpcion}
                                //source={require("../img/Logo2.png")}
                                source={{ uri: "https://media-public.canva.com/EKKdc/MAEGkaEKKdc/1/tl.png" }}
                            />
                            <Text style={style.textoOpcion}>
                                CATEGORIAS
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={{ flexDirection: "row" /*alineacion de elementos*/ }}>

                    <TouchableOpacity
                        //ALFABETO
                        onPress={() => {
                            //console.log("Entrando a la pantalla Alfabeto");
                            navegacion.navigate("Alfabeto");
                        }}
                    >
                        <View style={style.opcionBtn}>
                            <Image
                                style={style.imagenOpcion}
                                //source={require("../img/Logo2.png")}
                                source={{ uri: "https://media-public.canva.com/8mHSM/MAE6UG8mHSM/1/tl.png" }}
                            />
                            <Text style={style.textoOpcion}>
                                ALFABETO
                            </Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        //PRACTICAR
                        onPress={() => {
                            //console.log("Emtrando a la pantalla practicar");
                            navegacion.navigate("Practicas");
                        }}
                    >
                        <View style={style.opcionBtn}>
                            <Image
                                style={style.imagenOpcion}
                                //source={require("../img/Logo2.png")}
                                source={{ uri: "https://media-public.canva.com/nei8U/MAEFiOnei8U/1/tl.png" }}
                            />
                            <Text style={style.textoOpcion}>
                                PRACTICAS
                            </Text>
                        </View>
                    </TouchableOpacity>

                </View>
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
        top: 20,
        right: "40%"
    },
    titulo: {
        fontFamily: "Roboto",
        fontSize: 55,
        textAlign: "center",//centrar el texto 
        fontWeight: "bold", //bold
        color: "white",
        textShadowColor: "#000",//negro
        textShadowOffset: { width: 5, height: 5 },//que tanto se muestra la sombra
        textShadowRadius: 10, //el radio de la sombra
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
    contenedorOpciones: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: "28%"
    },
    textoBoton: {
        //color: "white",
        fontWeight: "bold",
        fontSize: 22,
        /*textShadowColor: "#ffffff",
        textShadowOffset: { width: 2, height: 2 },//que tanto se muestra la sombra
        textShadowRadius: 1*/
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