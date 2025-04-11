import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';

const Details = ({ route }) => {
  const { itemId } = route.params;
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${itemId}`);
        let data = await response.json();
        setPost(data);
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };

    fetchPost();
  }, [itemId]);

  if (!post) {
    return <Text>Loading...</Text>;
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{post.title}</Text>
      <Text style={styles.body}>{post.body}</Text>
      <Text style={styles.id}>ID: {post.id}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  body: {
    fontSize: 18,
    marginBottom: 10,
  },
  id: {
    fontSize: 16,
    color: 'gray',
  },
});

export default Details;