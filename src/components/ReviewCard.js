import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ReviewCard = ({ imageSource, name, description, rating }) => {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Image source={imageSource} style={styles.image} />
        <View style={styles.nameRating}>
          <Text style={styles.name}>{name}</Text>
          <View style={styles.rating}>
            <Text style={styles.ratingText}>⭐ {rating}</Text>
          </View>
        </View>
      </View>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f0f0f0', // Light background for the card
    borderRadius: 8,
    padding: 16,
    marginRight: 10, // Space between cards
    width: 300, // Adjust width as needed
  },
  header: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 8,
  },
  nameRating: {
    flex: 1,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  rating: {
    backgroundColor: '#e0e0e0', // Light background for rating
    borderRadius: 4,
    padding: 4,
    alignSelf: 'flex-start', // Align to the start of the container
  },
  ratingText: {
    fontSize: 14,
  },
  description: {
    fontSize: 14,
  },
});

export default ReviewCard;