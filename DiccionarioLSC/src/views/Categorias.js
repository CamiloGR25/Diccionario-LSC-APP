import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, SafeAreaView, FlatList } from "react-native";
import { db } from "../data/firebaseConfig";
import { getDocs, collection } from 'firebase/firestore';

export default function Categorias() {

    const navegacion = useNavigation();

    // Estado para almacenar los datos de Firestore
    const [categorias, setCategorias] = useState([]);
    const [loading, setLoading] = useState(true);

    //los datos de la categoria:
    const cargarDatos = async () => {
        try {
            const datos = await getDocs(collection(db, "categoria"));
            const categoriaDatos = datos.docs.map(doc => doc.data());
            //console.log("La base de datos es: ", categoriaDatos);
            setCategorias(categoriaDatos); //cargar los datos
        } catch (error) {
            console.error("Error al obtener los documentos: ", error);
        } finally {
            setLoading(false); // cuando termina, ya no esta cargando
        }
    };

    useEffect(() => {
        cargarDatos(); // llamamos a la función para obtener los datos
    }, []);

    if (loading) {
        return (
            <View style={style.container}>
                <Text style={style.loadingText}>Cargando...</Text>
            </View>
        );
    }

    //mostrar datos por consola
    /*categorias.map((categoria) => (
        console.log("mostrar:" + categoria.titulo) 
    ));*/

    const Item = ({ categoria, img }) => (
        //Boton y estilo original (el modelo para todos) 
        <TouchableOpacity style={style.opcionBtn}
            onPress={() => {
                //Se manda a la otra pantalla y se envia la variable categoria del data:
                navegacion.navigate("CategoriaPalabras", { categoriaSeleccionada: categoria });
            }
            }
        >
            <Image
                style={style.imagenOpcion}
                source={{ uri: img }}
            />
            <Text style={style.textoOpcion}>{categoria}</Text>
        </TouchableOpacity>
    );

    return (
        //Poner todos los flatlist depende el modelo definido y los datos
        <View style={style.container}>
            <SafeAreaView>
                <FlatList
                    data={categorias}
                    numColumns={2}
                    renderItem={({ item }) =>
                        <Item
                            img={item.img}
                            categoria={item.titulo}
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
        textShadowColor: "#000",
        textShadowOffset: { width: 2, height: 2 },//que tanto se muestra la sombra
        textShadowRadius: 2 //el radio de la sombra
    },
    loadingText: {
        flex: 1,
        textAlign: "center",
        marginTop: "10%",
        fontWeight: "bold",
        fontSize: 40,
        color: "white",
        textShadowColor: "#000",
        textShadowOffset: { width: 2, height: 2 },//que tanto se muestra la sombra
        textShadowRadius: 2 //el radio de la sombra
    }

});