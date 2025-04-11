import React from "react";
import PostListItem from "../../../components/post-list-item";

import posts from "../../../../assets/data/posts.json";
import { FlatList, View } from "react-native";

export default function index() {
  const post = posts[0];

  return (
    <View>
      <FlatList
        data={posts}
        renderItem={({ item }) => <PostListItem post={item} />}
      />
    </View>
  );
}
