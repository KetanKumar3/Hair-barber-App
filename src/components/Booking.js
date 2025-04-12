import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Booking = () => {
  return (
  <View style={{backgroundColor:"white",flex:1,}}>
  <Text style={{textAlign:"center",fontSize:22,fontWeight:"bold",marginTop:30}}>My Bookings</Text>
    <View style={styles.container}>

      <View style={styles.serviceContainer}>
        <Text style={styles.serviceLabel}>Service</Text>
        <View style={styles.serviceDetails}>
          <Text style={styles.serviceValue}>Classic Mens Haircut</Text>
          <View style={styles.successContainer}>
            <Text style={styles.successText}>Booking Successful</Text>
          </View>
        </View>
      </View>

      <View style={styles.confirmationContainer}>
        <View style={styles.dateTimeContainer}>
          <Text style={styles.label}>Date & Time</Text>
          <Text style={styles.value}>Thursday, 10 April</Text>
        </View>

        <View style={styles.specialistContainer}>
          <Text style={styles.label}>Specialist</Text>
          <Text style={styles.value}>Ronald Richard</Text>
        </View>

        <View style={styles.bookingIdContainer}>
          <Text style={styles.label}>Booking ID</Text>
          <Text style={styles.value}>#1234567890</Text>
        </View>
      </View>
    </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop:20,
    padding: 20,
    borderWidth:3,

    borderColor: '#E0E3E7',
    borderRadius: 20,
    margin:10,
  },
  serviceContainer: {
    marginBottom: 20,
  },
  serviceLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  serviceDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  serviceValue: {
    fontSize: 16,
  },
  successContainer: {
    backgroundColor: 'green',
    padding: 8,
    borderRadius: 5,
  },
  successText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize:12,
  },
  confirmationContainer: {
    flexDirection:'row',
    justifyContent:'space-between',
  },
  dateTimeContainer: {
    flexDirection:'column',
  },
  specialistContainer: {
    flexDirection:'column',
  },
  bookingIdContainer: {
    flexDirection:'column',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  value: {
    fontSize: 13,
  },
});

export default Booking;