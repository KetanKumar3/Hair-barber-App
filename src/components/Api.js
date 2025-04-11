import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Api = () => {
  const [data, setData] = useState([]);
  const navigation = useNavigation();

  const Apicall = async () => {
    try {
      let fetdata = await fetch("https://jsonplaceholder.typicode.com/posts");
      let jsonData = await fetdata.json();
      setData(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    Apicall();
  }, []);

  const handleItemPress = (itemId) => {
    navigation.navigate('Details', { itemId: itemId });
  };

  return (
    <ScrollView>
      {data.map((item) => (
        <TouchableOpacity key={item.id} onPress={() => handleItemPress(item.id)}>
          <View style={styles.itemContainer}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.body}>{item.body}</Text>
            <Text style={styles.id}>ID: {item.id}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  body: {
    fontSize: 16,
    marginBottom: 5,
  },
  id: {
    fontSize: 14,
    color: 'gray',
  },
});

export default Api;