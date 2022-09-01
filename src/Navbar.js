import React from "react";
import { StyleSheet, View, Text } from "react-native";

export const Navbar = ({title}) => {
    return (
        <View style={styles.navbar}>
            <Text style={styles.text}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    navbar: {
        height: 100,
        alignItems: "center",
        justifyContent: "flex-end",
        backgroundColor: '#3949AB',
        paddingBottom: 10
    },
    text: {
        color: '#fff',
        fontSize: 30
    }
})