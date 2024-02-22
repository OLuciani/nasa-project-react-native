import React, { FC } from "react";
import { Text, View, StyleSheet, Image, Button, Pressable} from 'react-native';

import { PostImage } from "../../types";

const TodayImage: FC<PostImage>= ({date, title, url }) => {
  return (
    <View style={styles.container}>
        <Image source={{uri: url }} style={styles.image} />
       
        <Text style={styles.title}>{title}</Text>

        <Text style={styles.date}>{date}</Text>

        {/* <View style={styles.buttonContainer}>
            <Button title="View" />
        </View> */}

        <Pressable style={styles.buttonContainer}>
            <Text style={styles.button}>
                View
            </Text>
        </Pressable>
        
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#2c449d",
        marginVertical: 10,
        marginHorizontal: 24,
        borderRadius: 32,
        padding: 16,
    },
    image: {
        width: "100%",
        height: 190,
        borderRadius: 32,
        borderWidth: 2,
        borderColor: "#fff",
    },
    title: {
        color: "#fff",
        fontSize: 20, 
        marginVertical: 12,
        fontWeight: "bold",
    },
    date: {
        color: "#fff",
        fontSize: 14,
        marginVertical: 16,
    },
    buttonContainer: {
        alignItems: "flex-end",
        
    }, 
    button: {
        color: "lightblue"
    }
});

export default TodayImage;
