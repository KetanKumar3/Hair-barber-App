import React from 'react';
import { Text, View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';


const BottomSheet = ({navigateToReview}) => {


  return (
    <View style={styles.bottomSheetContainer}>
      <TextInput
        style={styles.inputs}
        placeholder="Enter Your Name"
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Your Phone"
      />
      <View style={styles.buttonRow}>
        <TouchableOpacity onPress={navigateToReview} style={styles.cancelButton}>
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.doneButton}>
          <Text style={styles.buttonText}>Done</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomSheetContainer: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'white',
      height: 200,
      width: '100%',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      padding: 20,
    },
    inputs: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      padding: 10,
      marginBottom: 10,
      marginTop: 15,
      color: 'black', // Add color style
    },
    input: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      padding: 10,
      marginBottom: 10,
      color: 'black', // Add color style
    },
    buttonRow: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop: 10,
    },
    cancelButton: {
      backgroundColor: 'red',
      padding: 10,
      borderRadius: 5,
      flex: 1,
      alignItems: 'center',
      marginHorizontal: 5,
    },
    doneButton: {
      backgroundColor: 'blue',
      padding: 10,
      borderRadius: 5,
      flex: 1,
      alignItems: 'center',
      marginHorizontal: 5,
    },
    buttonText: {
      color: 'white',
      fontSize: 18,
    },
});

export default BottomSheet;