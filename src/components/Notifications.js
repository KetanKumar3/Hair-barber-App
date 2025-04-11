import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Notifications = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.notificationItem}>
        <Ionicons name="notifications" size={24} color="blue" style={{marginTop:4}} />
        <View style={styles.notificationText}>
          <Text style={styles.title}>Booking Confirmation</Text>
          <Text style={styles.message}>
            Your appointment for haircut is confirmed for 10 April 2025 at 10:00 AM
          </Text>
        </View>
      </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor:"white",
  },
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 16,
    padding: 20,
    borderWidth:3,
    borderColor: '#E0E3E7',
    borderRadius: 20,
  },
  notificationText: {
    marginLeft: 10,
    flex: 1, // Allow text to take up remaining space
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  message: {
    fontSize: 16,
  },
});

export default Notifications;