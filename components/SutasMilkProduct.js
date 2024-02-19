import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";

const SutasMilkProduct = ({ navigation }) => {
  // const [count, setCount] = useState(0);

  // const increment = () => {
  //     setCount(count + 1);
  // };

  // const decrement = () => {
  //     if (count > 0) {
  //         setCount(count - 1);
  //     }
  //     else if (count <= 0) {
  //         setCount(count * 0)
  //     }
  // }
  // const result = () => {
  //     if (count > 0) {
  //         setCount(count - 1);
  //     }
  // }

  return (
    <View>
      <View
        style={{ width: "100%", height: "30%", backgroundColor: "#101621" }}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("MigrosBuyScreen")}
        >
          <AntDesign
            style={{ marginTop: "12%", marginLeft: "5%" }}
            name="left"
            size={24}
            color="#FFBF58"
          />
        </TouchableOpacity>
      </View>
      <View style={{ width: "100%", height: "70%", backgroundColor: "white" }}>
        <Image
          style={{ marginLeft: "29%", marginTop: "-40%" }}
          source={require("../images/sutasMilkProduct.png")}
        />
        {/* <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity style={styles.button} onPress={decrement}>
                        <Text style={styles.buttonText}>-</Text>
                    </TouchableOpacity>
                    <Text style={styles.counterText}>{count}</Text>
                    <TouchableOpacity style={styles.button} onPress={increment}>
                        <Text style={styles.buttonText2}>+</Text>
                    </TouchableOpacity>
                </View> */}
        <TouchableOpacity
          onPress={() => navigation.navigate("ShoppingScreen")}
          style={{
            width: "40%",
            height: "10%",
            backgroundColor: "#FFBF58",
            borderRadius: 20,
            justifyContent: "center",
            alignItems: "center",
            marginLeft: "30%",
            marginTop: "5%",
          }}
        >
          <Text style={{ fontSize: 20 }}>Add to Basket</Text>
        </TouchableOpacity>
        <View>
          <Text style={{ fontSize: 20, fontWeight: "bold", marginLeft: "5%" }}>
            Sütaş
          </Text>
          <Text style={{ fontSize: 15, marginLeft: "5%", marginTop: "2%" }}>
            Semi-skimmed milk 1lt
          </Text>
          <Text
            style={{ fontWeight: "bold", marginLeft: "5%", marginTop: "5%" }}
          >
            Information
          </Text>
          <Text style={{ fontSize: 10, marginLeft: "5%", marginTop: "2%" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </View>
      </View>
      <View style={{ height: "0%" }}>
        <View
          style={{
            bottom: 0,
            position: "absolute",
            width: "100%",
            backgroundColor: "#FFBF58",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("BuyScreen")}
            style={{ margin: 30 }}
          >
            <AntDesign name="home" size={35} color="black" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("ShoppingScreen")}
            style={{ margin: 30 }}
          >
            <AntDesign name="shoppingcart" size={35} color="#ff4d6d" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Profil")}
            style={{ margin: 30 }}
          >
            <AntDesign name="user" size={35} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SutasMilkProduct;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "gray",
    borderRadius: 10,
    width: "10%",
    height: "45%",
    alignItems: "center",
    margin: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 30,
  },
  buttonText2: {
    fontSize: 30,
    backgroundColor: "#FFBF58",
    color: "#fff",
    width: "100%",
    borderRadius: 10,
    textAlign: "center",
  },

  counterText: {
    fontSize: 30,
    marginTop: "5%",
    margin: "1%",
  },
});
