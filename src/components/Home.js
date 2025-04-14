import React from 'react';
import Screen1 from './Screen1';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

function Home() {
  const navigation = useNavigation();

  const categories = [
    { text: 'Apple', image: require('../assets/haircut.png') },
    { text: 'Banana', image: require('../assets/haircut.png') },
    { text: 'Cherry', image: require('../assets/haircut.png') },
  ];

  const serviceData = {
    image: require('../assets/haircut.png'),
    title: "Classic Men's Cut",
    rating: 4.5,
    price: 25,
  };

  const data = [
    { id: '1', name: 'Ketan Kumar', image: require('../assets/haircut.png') },
    { id: '2', name: 'Alice Smith', image: require('../assets/haircut.png') },
    { id: '3', name: 'Bob Johnson', image: require('../assets/haircut.png') },
    { id: '4', name: 'Emily Davis', image: require('../assets/haircut.png') },
    { id: '5', name: 'David Wilson', image: require('../assets/haircut.png') },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.image3} />
      <Text style={styles.name}>{item.name}</Text>
    </View>
  );

  return (
    <ScrollView>
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <Screen1 />

        {/* Categories Section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Categories</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Category')}>
            <Text style={styles.viewAllText}>View all</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.container4}>
          {categories.map((category, index) => (
            <View key={index} style={styles.categoryWrapper}>
              <View style={styles.categoryContainer}>
                <Image source={category.image} style={styles.image} />
              </View>
              <Text style={styles.categoryText}>{category.text}</Text>
            </View>
          ))}
        </View>

        {/* Popular Services Section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Popular Services</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Category')}>
            <Text style={styles.viewAllText}>View all</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.popularServicesContainer}>
          <View style={styles.serviceItem}>
            <Image source={serviceData.image} style={styles.serviceImage} />
            <Text style={styles.serviceTitle}>{serviceData.title}</Text>
            <View style={styles.serviceDetails}>
              <Text style={styles.serviceRating}>
                <Entypo name="star" size={18} color="yellow" /> {serviceData.rating}
              </Text>
              <Text style={styles.servicePrice}>
                ${serviceData.price}
              </Text>
            </View>
          </View>

          <View style={styles.serviceItem}>
            <Image source={serviceData.image} style={styles.serviceImage} />
            <Text style={styles.serviceTitle}>{serviceData.title}</Text>
            <View style={styles.serviceDetails}>
              <Text style={styles.serviceRating}>
                <Entypo name="star" size={18} color="yellow" /> {serviceData.rating}
              </Text>
              <Text style={styles.servicePrice}>
                 ${serviceData.price}
              </Text>
            </View>
          </View>
        </View>

        {/* meet our expert start */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Meet Our Experts</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Category')}>
            <Text style={styles.viewAllText}>View all</Text>
          </TouchableOpacity>
        </View>

        <View style={{ marginLeft: 20, marginBottom: 120, marginVertical: 10 }}>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.listContent}
          />
        </View>
        {/* meet our expert end */}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  viewAllText: {
    fontSize: 16,
    color: 'black',
  },
  container4: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
  },
  categoryWrapper: {
    width: '30%',
    marginHorizontal: '1.5%',
    marginVertical: '2.5%',
    alignItems: 'center',
  },
  categoryContainer: {
    width: '100%',
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 100,
    borderRadius: 20,
    borderColor: "#e0e0e0",
    borderWidth: 2,
  },
  image: {
    width: '70%',
    height: '70%',
    resizeMode: 'contain',
  },
  categoryText: {
    marginTop: 5,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  popularServicesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
    marginTop: 20,
  },
  serviceItem: {
    width: '45%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
  },
  serviceImage: {
    width: '100%',
    height: 150,
    borderRadius: 8,
  },
  serviceTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  serviceDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  serviceRating: {
    fontSize: 14,
    flexDirection:'row',
    alignItems:'center'
  },
  servicePrice: {
    fontSize: 14,
    fontWeight: 'bold',
    flexDirection: 'row',
    alignItems: 'center',
  },
  listContent: {},
  itemContainer: {
    padding: 15,
    marginRight: 16,
    alignItems: 'center',
    borderRadius: 20,
    borderColor: "#e0e0e0",
    borderWidth: 2,
    marginTop: 10,
  },
  image3: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  name: {
    marginTop: 8,
    fontSize: 16,
  },
});

export default Home;