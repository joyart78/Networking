import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

export default function Main({ navigation }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("Currency")}
            >
                <Text style={styles.buttonText}>Currency</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("Facts")}
            >
                <Text style={styles.buttonText}>Number Facts</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("Food")}
            >
                <Text style={styles.buttonText}>Food Facts</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    button: {
        backgroundColor: "#3498db",
        padding: 10,
        marginVertical: 10,
        borderRadius: 5,
        width: 200,
        alignItems: "center",
    },
    buttonText: {
        color: "#fff",
        fontSize: 18,
    },
});
