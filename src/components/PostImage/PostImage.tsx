import React, { FC } from 'react';
import { Button, Pressable, StyleSheet, Text, View } from 'react-native';
import { PostImage as PostImageTypes } from '../../types';

const PostImage: FC<PostImageTypes>  = ({title, date}) => {
  return (
    <View style={styles.container}>
       <Text style={styles.title}>{title}</Text> 
       <Text style={styles.date}>{date}</Text>

       <Pressable style={styles.buttonContainer}>
          <Text style={styles.buttonTitle}>View</Text>
       </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgba(18,39,133,255)",
        borderRadius: 20,
        marginBottom: 10,
        padding: 16,

    },
    title: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 10,
    },
    date: {
        color: "#fff",
        marginBottom: 10,
        fontSize: 14,

    },
    buttonContainer: {
        alignItems: "flex-end",
    },
    buttonTitle: {
        color: "#fff",
        fontSize: 14
    }
});

export default PostImage;