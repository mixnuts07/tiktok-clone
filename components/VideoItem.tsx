import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Video from "react-native-video";

const VideoItem = ({ data }) => {
  const { uri, caption, channelName, musicName, likes, comments, avatarUri } =
    data;
  return <Video source={{ uri }} style={styles.video} resizeMode="cover" />;
};

const styles = StyleSheet.create({
  video: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
});
export default VideoItem;
