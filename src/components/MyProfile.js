import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const MyProfile = () => {
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={styles.imageContainer}>
        <Image source={require('../assets/image.png')} style={styles.image} />
      </View>

      <View style={styles.profileDetails}>
        <View style={styles.detailContainer}>
          <Text style={styles.label}>Name</Text>
          <Text style={styles.value}>Ketan Kumar</Text>
        </View>
      </View>

      <View style={styles.profileDetails}>
              <View style={styles.detailContainer}>
                <Text style={styles.label}>Email</Text>
                <Text style={styles.value}>ketanaryan2004@gmail.com</Text>
              </View>
            </View>

      <View style={styles.profileDetails}>
              <View style={styles.detailContainer}>
                <Text style={styles.label}>Phone Number</Text>
                <Text style={styles.value}>1234567890</Text>
              </View>
            </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: 'center', // Center the image horizontally
    marginTop: 40,
  },
  image: {
    borderRadius: 50,
    width: 100,
    height: 100,
  },
  profileDetails: {
    marginTop: 20, // Add some space between image and details
  },
  detailContainer: {
    padding: 10,
    borderWidth: 2,
    borderColor: '#E0E3E7',
    borderRadius: 20,
    marginHorizontal: 20,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 5,
    fontSize:20,
  },
  value: {
    fontSize: 20,
    fontWeight:"semi-bold",
  },
});

export default MyProfile;