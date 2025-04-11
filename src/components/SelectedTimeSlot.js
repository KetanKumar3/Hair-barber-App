import React, { useState } from 'react';
import { Calendar } from 'react-native-calendars';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import navigation hook

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const SelectedTimeSlot = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const navigation = useNavigation(); // Initialize navigation

  const handleDayPress = (day) => {
    setSelectedDate(day.dateString);
  };

  const handleTimePress = (time) => {
    setSelectedTime(time);
  };

  const markedDates = selectedDate
    ? {
        [selectedDate]: { selected: true, selectedColor: 'white' },
      }
    : {};

  const timeSlots = Array.from({ length: 14 }, (_, i) => {
    const hour = 8 + i;
    const time = `${hour < 10 ? '0' : ''}${hour}:00 ${hour < 12 ? 'AM' : 'PM'}`;
    return time;
  });

  return (
    <View style={{flex:1,backgroundColor:"white"}}>
      <ScrollView>
        <View style={styles.container}>
          <Calendar
            current={'2025-04-01'}
            minDate={'2023-01-01'}
            maxDate={'2025-12-31'}
            onDayPress={handleDayPress}
            monthFormat={'yyyy MM'}
            hideArrows={false}
            hideExtraDays={true}
            disableMonthChange={false}
            hideDayNames={false}
            showWeekNumbers={false}
            markingType={'dot'}
            markedDates={markedDates}
            style={styles.calendar}
            theme={{
              calendarBackground: 'blue',
              dayTextColor: 'black',
              textDayFontSize: 18,
              textMonthFontSize: 18,
              textDayHeaderFontSize: 16,
              textDayHeaderFontWeight: 'semi-bold',
              textDayHeaderColor: 'black',
              todayTextColor: 'black',
              selectedDayTextColor: 'black',
              selectedDayBackgroundColor: 'white',
              dayContainer: {
                height: 40,
                alignItems: 'center',
                justifyContent: 'center',
              },
            }}
          />
          <Text style={styles.timeSlotsHeader}>Choose Time Slots</Text>
          <View style={styles.timeSlotsGrid}>
            {timeSlots.map((time) => (
              <TouchableOpacity
                key={time}
                style={[
                  styles.timeSlot,
                  selectedTime === time && styles.selectedTimeSlot,
                ]}
                onPress={() => handleTimePress(time)}
              >
                <Text>{time}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>

      <View style={{height:screenHeight*0.11,backgroundColor:"white"}}>
            <TouchableOpacity onPress={()=>navigation.navigate("ReviewSummary")} style={styles.bookNowButton}>
              <Text style={styles.bookNowText}>Continue</Text>
            </TouchableOpacity>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 10,
  },
  calendar: {
    borderRadius: 15,
    height: 350,
    padding: 10,
  },
  timeSlotsHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 20,
    marginLeft: 10,
  },
  timeSlotsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  timeSlot: {
    borderWidth: 2,
    borderColor: '#ccc',
    padding: 10,
    margin: 5,
    borderRadius: 5,
    minWidth: 80,
    alignItems: 'center',
    fontWeight:"bold",
  },
  selectedTimeSlot: {
    backgroundColor: 'blue',
    borderColor: 'blue',
  },
  bookNowButton: {
      backgroundColor: 'blue',
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

export default SelectedTimeSlot;