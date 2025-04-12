import React from 'react';
import {Text,View,StyleSheet,TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Setting = () => {

const navigation = useNavigation();

const handlePress = () => {
    navigation.navigate('Category');
};

return(
<View style={{flex:1,backgroundColor:"white"}}>
// Change Password Starts
<TouchableOpacity onPress={handlePress}>
<View style={[styles.container, { marginTop:50}]}>
      <View style={styles.iconBackground}>
        <MaterialIcons name="lock-outline" size={24} color="black" />
      </View>
      <Text style={styles.title}>Change Password</Text>
       <View style={styles.spacer} />
            <MaterialIcons name="keyboard-arrow-right" size={34} color="black" />
       </View>
</TouchableOpacity>
// Change Password end

// Terms and Conditions Starts
<TouchableOpacity onPress={handlePress}>
<View style={styles.container}>
      <View style={styles.iconBackground}>
        <FontAwesome5 name="shield-alt" size={24} color="black" />
      </View>
      <Text style={styles.title}>Terms & Conditions</Text>
       <View style={styles.spacer} />
            <MaterialIcons name="keyboard-arrow-right" size={34} color="black" />
       </View>
</TouchableOpacity>
// Terms and Conditions end

// Delete account starts

<TouchableOpacity onPress={handlePress}>
<View style={styles.container}>
      <View style={styles.iconBackground}>
        <MaterialIcons name="delete-outline" size={24} color="black" />
      </View>
      <Text style={styles.title}>Delete account</Text>
       <View style={styles.spacer} />
            <MaterialIcons name="keyboard-arrow-right" size={34} color="black" />
       </View>
</TouchableOpacity>

// Delete account end
</View>
);
}

const styles = StyleSheet.create({
container: {
    borderWidth: 2,
    borderColor: '#E0E3E7',
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center', // Align items vertically
    padding: 15,
    marginHorizontal:20,
    marginVertical:10,

  },
  iconBackground: {
      padding: 10,
      borderRadius: 50,
      backgroundColor: '#F1F4F8',
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      marginLeft: 25,
    },
    spacer: {
        flex: 1, // Takes up all available space, pushing the next element to the end
      },

    container2: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 30,
        marginVertical: 25,
      },
      image: {
        width: 50, // Changed width here
        height: 50, // Changed height here
        borderRadius: 25,
      },
      textContainer: {
          marginLeft: 20,
        },
        name: {
          fontWeight: 'bold',
          fontSize: 20,
        },
        email: {
          fontSize: 15,
        },
})
export default Setting;