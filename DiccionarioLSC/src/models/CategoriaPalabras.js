import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from 'react';
import { useNavigation } from "@react-navigation/native";
import { Text, View, StyleSheet, Image, TouchableOpacity, SafeAreaView, FlatList } from "react-native";
import { db } from "../data/firebaseConfig";
import { getDocs, collection, where, query } from 'firebase/firestore';

export default function Letras({ route }) {
    const { categoriaSeleccionada } = route.params;
    const navegacion = useNavigation();

    // Estado para almacenar los datos de Firestore
    const [palabras, setPalabras] = useState([]);

    const cargarDatos = async () => {
        try {
            // Crear una consulta con filtro           
            const palabrasRef = collection(db, "palabra"); //trae la coleccion
            const q = query(palabrasRef, where("categoria", "==", categoriaSeleccionada)); // campo categoria en tus documentos se hace un query
            const datos = await getDocs(q); //trae los datos de la bd

            const palabraDatos = datos.docs.map(doc => ({ id: doc.id, ...doc.data() })); //mapeo por id de los datos filtrados
            console.log("Palabras filtradas por letra:", categoriaSeleccionada, palabraDatos);

            setPalabras(palabraDatos); // cargar lis datos a palabras

        } catch (error) { console.error("Error al obtener los documentos: ", error); }
    };

    useEffect(() => {
        cargarDatos(); // llamamos a la función para obtener los datos
    }, []);


    const Item = ({ palabra, img, posicion, movimiento }) => (
        //Boton y estilo original (el modelo para todos) 
        <TouchableOpacity style={style.opcionBtn}
            onPress={() => {
                //Se manda a la otra pantalla y se envia la variable letra del data:
                navegacion.navigate("Palabra",
                    {
                        palabraSeleccionada: palabra,
                        imgSeleccionada: img,
                        posicionSeleccionada: posicion,
                        movimientoSeleccionado: movimiento
                    }
                )
            }
            }
        >
            <Image
                style={style.imagenOpcion}
                source={{ uri: img }}
            />
            <Text style={style.textoOpcion}>{palabra}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={style.container}>

            <SafeAreaView>
                <Text style={style.titulo}>{categoriaSeleccionada}</Text>
                <FlatList
                    data={palabras}
                    numColumns={2}
                    renderItem={({ item }) =>
                        <Item
                            img={item.img}
                            palabra={item.titulo}
                            posicion={item.posicion}
                            movimiento={item.movimiento}
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
        alignItems: "center",
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