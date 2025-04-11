import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const experts = [
  { id: 1, name: 'Ketan Kumar', image: require('../assets/image.png') },
  { id: 2, name: 'Alice Smith', image: require('../assets/image.png') },
  { id: 3, name: 'John Doe', image: require('../assets/image.png') },
  { id: 4, name: 'Ketan Kumar', image: require('../assets/image.png') },
  { id: 5, name: 'Alice Smith', image: require('../assets/image.png') },
  { id: 6, name: 'John Doe', image: require('../assets/image.png') },

];

const MeetOurExperts = ({ navigation }) => { // Receive navigation prop
  const [selectedExpertId, setSelectedExpertId] = useState(null);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {experts.map((expert) => {
          const isSelected = selectedExpertId === expert.id;
          return (
            <TouchableOpacity
              key={expert.id}
              style={[
                styles.expertContainer,
                isSelected && styles.expertContainerSelected,
              ]}
              onPress={() => setSelectedExpertId(expert.id)}
            >
              <Image source={expert.image} style={styles.image} />
              <Text style={styles.name}>{expert.name}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      <View style={{ height: screenHeight * 0.11, backgroundColor: 'white' }}>
      <TouchableOpacity
        onPress={() => navigation.navigate('SelectedTimeSlot')} // Use navigation
        style={styles.bookNowButton}
      >

        <Text style={styles.bookNowText}>Continue</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Take up the full screen
    backgroundColor:"white",
  },
  scrollContent: {
    padding: 20,
    paddingBottom: screenHeight * 0.11 + 20, // Add padding for button height + margin
    alignItems: 'center',
  },
  expertContainer: {
    width: '100%',
    alignItems: 'center',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#ccc',
    padding: 15,
    marginBottom: 20,
    flexDirection: 'row',
  },
  expertContainerSelected: {
    borderColor: 'blue',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  bookNowButton: {
    backgroundColor: 'blue',
    padding: 15,
    alignItems: 'center',
    width: screenWidth - 40,
    marginHorizontal: 20,
    borderRadius: 20,
    position: 'absolute',
    bottom: 20, // Adjust bottom margin as needed
  },
  bookNowText: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
});

export default MeetOurExperts;