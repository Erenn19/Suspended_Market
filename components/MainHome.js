import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { FIREBASE_AUTH } from "../FireBaseConfig";

const MainHome = ({ navigation }) => {
    return (
        <View>
            <View style={{ height: "32%" }}>
                <Image
                    style={{
                        margin: "2%",
                        marginLeft: "29%",
                        width: 210,
                        height: 190,
                        marginTop: 111,
                    }}
                    source={require("../images/Group.png")}
                />
            </View>
            <TouchableOpacity
                onPress={() => navigation.navigate("BuyScreen")}
                style={{ width: "50%", marginLeft: "28%" }}
            >
                <Text
                    style={{
                        backgroundColor: "#FFBF58",
                        marginTop: 45,
                        textAlign: "center",
                        padding: "12%",
                        fontWeight: "bold",
                        height: 70,
                        justifyContent: "center",
                    }}
                >
                    Add to Basket
                </Text>
            </TouchableOpacity>
            <View style={{ height: "40%", marginBottom: "50%" }}>
                <Image
                    style={{ marginLeft: "30%", width: 200, height: 200, marginTop: 10 }}
                    source={require("../images/put.png")}
                />
                <TouchableOpacity
                    onPress={() => navigation.navigate("GetFromBasket")}
                    style={{ width: "50%", marginLeft: "27%" }}
                >
                    <Text
                        style={{
                            backgroundColor: "#FFBF58",
                            textAlign: "center",
                            padding: "12%",
                            fontWeight: "bold",
                            height: 70,
                            justifyContent: "center",
                            marginTop: 20,
                        }}
                    >
                        Get from Basket
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default MainHome;

const styles = StyleSheet.create({});
