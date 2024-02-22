import React, { FC } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { PostImage as PostImageTypes} from "../../types";
import PostImage from "../PostImage";

const LastFiveDaysImages: FC<{ postImages?: PostImageTypes[]}> = ({postImages}) => {
    console.log(postImages);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Last 5 Days</Text>
      <ScrollView style={styles.content}>
        {postImages?.map(postImage => (
            <PostImage key={`post-image-${postImage.title}`} {...postImage} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 250,
    marginVertical: 8,
  },
  content: {
    paddingHorizontal: 24, 
  },
  title: {
    color: "#fff",
    fontSize: 14,
    marginBottom: 18,
    marginLeft: 16,
  },
});

export default LastFiveDaysImages;
