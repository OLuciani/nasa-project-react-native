import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";

const Header = () => {
  return (
    <View style={styles.container}>
      
        <Text style={styles.title}>Explore</Text>
      
        <Image
          source={require("../../assets/nasa-logo.png")}
          style={styles.image}
        /> 
    </View>
  );
};

const styles= StyleSheet.create({
    container: {
       display: "flex",
       flexDirection: "row",
       justifyContent: "space-between",
       alignItems: "center",
       paddingHorizontal: 16,
       paddingVertical: 10,
    },
    title: {
        fontSize: 20,
        color: "#fff"
    },
    image: {
        width: 60, 
        height: 60,
    }
  
  });


export default Header;

