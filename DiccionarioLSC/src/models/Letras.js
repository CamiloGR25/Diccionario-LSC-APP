import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { Text, View, StyleSheet, Image, TouchableOpacity, SafeAreaView, FlatList } from "react-native";


export default function Letras({ route }) {
    const { letraSeleccionada } = route.params;
    console.log(letraSeleccionada);
}