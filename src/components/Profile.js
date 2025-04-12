import React from 'react';
import {View, Text,Image,StyleSheet,TouchableOpacity,ScrollView} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';

function Profile(){

const navigation = useNavigation();

const handlePress = () => {
    navigation.navigate('Category'); // Replace 'ProfileDetail' with your target screen name
  };

return(
<ScrollView style={{flex:1,backgroundColor:"white"}}>
<View>

// Profile Start
<Text style={{textAlign:"center",fontWeight:"bold",fontSize:24,marginTop:30}}>Profile</Text>

<View style={styles.container2}>
      <Image source={require('../assets/image.png')} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>Ketan Kumar</Text>
        <Text style={styles.email}>ketanaryan2004@gmail.com</Text>
              </View>
            </View>

// Profile End


// My profile starts
<TouchableOpacity onPress={()=>navigation.navigate("MyProfile")}>
<View style={styles.container}>
      <View style={styles.iconBackground}>
        <Ionicons name="person" size={24} color="black" />
      </View>
      <Text style={styles.title}>My Profile</Text>
       <View style={styles.spacer} /> {/* Pushes the last icon to the end */}
            <MaterialIcons name="keyboard-arrow-right" size={34} color="black" />
       </View>
</TouchableOpacity>
// My profile end

// Favourite Start

<TouchableOpacity onPress={handlePress}>
<View style={styles.container}>
      <View style={styles.iconBackground}>
        <AntDesign name="hearto" size={20} color="black" />
      </View>
      <Text style={styles.title}>Favourite</Text>
       <View style={styles.spacer} /> {/* Pushes the last icon to the end */}
            <MaterialIcons name="keyboard-arrow-right" size={34} color="black" />
       </View>
</TouchableOpacity>
// Favourite end

// Privacy Policy starts

<TouchableOpacity onPress={handlePress}>
<View style={styles.container}>
      <View style={styles.iconBackground}>
        <MaterialIcons name="privacy-tip" size={24} color="black" />
      </View>
      <Text style={styles.title}>Privacy Policy</Text>
       <View style={styles.spacer} /> {/* Pushes the last icon to the end */}
            <MaterialIcons name="keyboard-arrow-right" size={34} color="black" />
       </View>
</TouchableOpacity>
// Privacy Policy ends

// About us starts

<TouchableOpacity onPress={handlePress}>
<View style={styles.container}>
      <View style={styles.iconBackground}>
        <AntDesign name="plus" size={24} color="black" />
      </View>
      <Text style={styles.title}>About us</Text>
       <View style={styles.spacer} /> {/* Pushes the last icon to the end */}
            <MaterialIcons name="keyboard-arrow-right" size={34} color="black" />
       </View>
</TouchableOpacity>
// About us ends

// setting starts

<TouchableOpacity onPress={()=> navigation.navigate("Setting")}>
<View style={styles.container}>
      <View style={styles.iconBackground}>
        <AntDesign name="setting" size={24} color="black" />
      </View>
      <Text style={styles.title}>Settings</Text>
       <View style={styles.spacer} /> {/* Pushes the last icon to the end */}
            <MaterialIcons name="keyboard-arrow-right" size={34} color="black" />
       </View>
</TouchableOpacity>
// setting end

// Logout starts

<TouchableOpacity onPress={()=>navigation.navigate("Signup")} style={{marginBottom:90}}>
<View style={styles.container}>
      <View style={styles.iconBackground}>
        <Entypo name="log-out" size={24} color="black" />
      </View>
      <Text style={styles.title}>Logout</Text>
       <View style={styles.spacer} /> {/* Pushes the last icon to the end */}
            <MaterialIcons name="keyboard-arrow-right" size={34} color="black" />
       </View>
</TouchableOpacity>

// Logout end
</View>

</ScrollView>
);
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#E0E3E7',
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center', // Align items vertically
    padding: 15,
    marginHorizontal:20,
    marginVertical:10
  },
  iconBackground: {
      padding: 10,
      borderRadius: 50,
      backgroundColor: '#F1F4F8',
    },
    title: {
      fontSize: 20,
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
    });

export default Profile;