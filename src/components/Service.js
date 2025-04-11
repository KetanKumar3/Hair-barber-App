import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const Service = () => {

const navigation = useNavigation();

  const numContainers = 5;

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
    <View style={{ flex: 1,backgroundColor:"white" }}> {/* Main View to contain all content */}
      <ScrollView style={{ flex: 1 }}> {/* Scrollable content */}
        <View style={styles.container}>
          <View style={styles.imageContainer1}>
            <Image source={require('../assets/image.png')} style={styles.image1} />
          </View>

          <View style={styles.container2}>
            {Array.from({ length: numContainers }).map((_, index) => (
              <View key={index} style={styles.item2}>
                <Image source={require('../assets/image.png')} style={styles.image2} />
              </View>
            ))}
          </View>

          <Text style={styles.title}>Classic Men's Cut</Text>

          <View style={styles.ratingContainer}>
            <Entypo name="star" size={24} color="yellow" />
            <Text style={styles.ratingText}>4.5</Text>
            <Text style={styles.ratingText}>(4.2K reviews)</Text>
          </View>

          <Text style={styles.priceText}>$25</Text>

          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Meet Our Experts</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Category')}>
              <Text style={styles.viewAllText}>View all</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.expertsList}>
            <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.listContent}
            />
          </View>
        </View>
      </ScrollView>
      <View style={{height:screenHeight*0.11,backgroundColor:"white"}}>
      <TouchableOpacity onPress={()=>navigation.navigate("MeetOurExperts")} style={styles.bookNowButton}> {/* Book Now Button */}
        <Text style={styles.bookNowText}>Book Now</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // Styles for the scrollable content
  },
  imageContainer1: {
    height: screenHeight / 2.5,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    borderRadius: 20,
  },
  image1: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  container2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: screenWidth - 40,
    marginHorizontal: 20,
  },
  item2: {
    width: (screenWidth - 40) / 5 - 10,
    height: (screenWidth - 40) / 5 - 10,
    backgroundColor: 'red',
    borderRadius: 15,
  },
  image2: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 20,
    marginTop: 20,
  },
  ratingContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: 5,
    gap: 10,
  },
  ratingText: {
    fontSize: 16,
    fontWeight: 'semi-bold',
  },
  priceText: {
    fontSize: 16,
    fontWeight: 'semi-bold',
    marginHorizontal: 20,
    marginTop: 5,
  },
  itemContainer: {
    padding: 15,
    marginRight: 16,
    alignItems: 'center',
    borderRadius: 20,
    borderColor: '#e0e0e0',
    borderWidth: 2,
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
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 20,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  viewAllText: {
    fontSize: 16,
    color: 'black',
  },
  expertsList: {
    marginLeft: 20,
    marginBottom: 120,
    marginVertical: 10,
  },
  bookNowButton: {
    backgroundColor: 'blue', // Adjust color
    padding: 15,
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    width: screenWidth - 40,
    marginHorizontal:20,
    marginBottom:20,
    borderRadius:20,
  },
  bookNowText: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
});

export default Service;