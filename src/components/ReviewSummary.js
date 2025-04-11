import React, {useState} from 'react';
import { Text, View, StyleSheet, Dimensions, TouchableOpacity, ScrollView, } from 'react-native';
import Modal from 'react-native-modal';
import BottomSheet from './BottomSheet';
import {useNavigation} from '@react-navigation/native';
const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

const ReviewSummary = () => {
  const name = "Ketan Kumar";

  const [visible, setVisible] = useState(false);

  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.container}>
          <View style={styles.reviewText}>
            <Text style={styles.label}>Name </Text>
            <Text style={styles.value}>{name}</Text>
          </View>
          <View style={styles.reviewText}>
            <Text style={styles.label}>Phone </Text>
            <Text style={styles.value}>1234567890</Text>
          </View>
          <View style={styles.reviewText}>
            <Text style={styles.label}>Services </Text>
            <Text style={styles.value}>Hair Cut</Text>
          </View>
          <View style={styles.reviewText}>
            <Text style={styles.label}>Booking Date </Text>
            <Text style={styles.value}>Thursday, 10 April</Text>
          </View>
          <View style={styles.reviewText}>
            <Text style={styles.label}>Booking Hours </Text>
            <Text style={styles.value}>8:00PM</Text>
          </View>
          <View style={styles.reviewText}>
            <Text style={styles.label}>Specialist </Text>
            <Text style={styles.value}>Peter Parker</Text>
          </View>
          <View style={styles.reviewText}>
            <Text style={styles.label}>Price </Text>
            <Text style={styles.value}>$25</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "flex-end", marginTop: 8, marginRight: 20 }}>
        <TouchableOpacity onPress={() => setVisible(true)}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'blue' }}>Booking For Someone?</Text>
        </TouchableOpacity>
        </View>
        <View style={{ backgroundColor: "white" }}>
        </View>
      </ScrollView>
      <View style={styles.bookNowContainer}>
        <TouchableOpacity  style={styles.bookNowButton}>
          <Text style={styles.bookNowText}>Continue</Text>
        </TouchableOpacity>
      </View>

      <Modal style={{width:"100%",marginLeft:0,marginBottom:0}} isVisible={visible} onBackdropPress={() => setVisible(false)}>
       <BottomSheet navigateToReview={() => navigation.navigate("ReviewSummary")} />
            </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth:3,
    borderColor:"#E0E3E7",
    borderRadius: 20,
    margin: 20,
    padding: 25,
    gap: 8,
  },
  reviewText: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 5,
  },
  value: {
    fontSize: 20,
  },
  bookNowContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: 'white',
    height:100,
  },
  bookNowButton: {
    backgroundColor: 'blue',
    padding: 15,
    marginTop:15,
    alignItems: 'center',
    width: screenWidth - 40,
    marginHorizontal: 20,

    borderRadius: 20,
  },
  bookNowText: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
});

export default ReviewSummary;