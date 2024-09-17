import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";


export default function Practicas() {

    return (
        <View style={style.container}>
            <Text style={{ fontSize: 50, color: "#ffff" }}>
                PRACTICAS
            </Text>
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

});