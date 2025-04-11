import React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/components/Home';
import Category from './src/components/Category';
import Profile from './src/components/Profile';
import Signup from './src/components/Signup';
import SignIn from './src/components/SignIn';
import Tabs from './src/components/Tabs';
import Service from './src/components/Service';
import MeetOurExperts from './src/components/MeetOurExperts';
import SelectedTimeSlot from './src/components/SelectedTimeSlot';
import ReviewSummary from './src/components/ReviewSummary';
import Booking from './src/components/Booking';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Api from './src/components/Api';
import Details from './src/components/Details';
import Notifications from './src/components/Notifications';
import Setting from './src/components/Setting';
import MyProfile from './src/components/MyProfile';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
      <Stack.Screen name="MyProfile" component={MyProfile}
       options={{
                   headerTitle: 'My Profile',
                   headerLeft: () => {
                     const navigation = useNavigation();
                     return (
                       <TouchableOpacity onPress={() => navigation.goBack()} style={styles.headerContainer}> // Use goBack()
                         <MaterialIcons name="arrow-back-ios" size={20} color="black" style={{ marginLeft: 2 }} />
                       </TouchableOpacity>
                     );
                   },
                   headerRight: () => (
                     <TouchableOpacity onPress={() => { /* Handle right icon press */ }} style={styles.headerContainer}>
                       <MaterialIcons name="edit" size={24} color="black" />
                     </TouchableOpacity>
                   ),
                   headerTitleAlign: 'center',
                 }}
       />
      <Stack.Screen name="Setting" component={Setting}
      options={{
                                 headerTitle: 'Settings',
                                 headerLeft: () => {
                                   const navigation = useNavigation();
                                   return (
                                     <TouchableOpacity onPress={() => navigation.goBack()} style={styles.headerContainer}> // Use goBack()
                                       <MaterialIcons name="arrow-back-ios" size={20} color="black" style={{ marginLeft: 2 }} />
                                     </TouchableOpacity>
                                   );
                                 },
                                 headerTitleAlign: 'center',
                                                     headerTitleStyle: { // Add this style
                                                           fontWeight: 'bold',
                                                           fontSize: 22, // Adjust as needed
                                                         },
                     }}
       />

       <Stack.Screen name="ReviewSummary" component={ReviewSummary}
       options={{
                           headerTitle: 'Review Summary',
                           headerLeft: () => {
                             const navigation = useNavigation();
                             return (
                               <TouchableOpacity onPress={() => navigation.goBack()} style={styles.headerContainer}> // Use goBack()
                                 <MaterialIcons name="arrow-back-ios" size={20} color="black" style={{ marginLeft: 2 }} />
                               </TouchableOpacity>
                             );
                           },
                           headerTitleAlign: 'center',
                                               headerTitleStyle: { // Add this style
                                                     fontWeight: 'bold',
                                                     fontSize: 22, // Adjust as needed
                                                   },
               }}
        />

        <Stack.Screen name="SelectedTimeSlot" component={SelectedTimeSlot}
        options={{
                    headerTitle: 'Select Time Slot',
                    headerLeft: () => {
                      const navigation = useNavigation();
                      return (
                        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.headerContainer}> // Use goBack()
                          <MaterialIcons name="arrow-back-ios" size={20} color="black" style={{ marginLeft: 2 }} />
                        </TouchableOpacity>
                      );
                    },
                    headerTitleAlign: 'center',
                                        headerTitleStyle: { // Add this style
                                              fontWeight: 'bold',
                                              fontSize: 22, // Adjust as needed
                                            },
        }}
        />

        <Stack.Screen
          name="Service"
          component={Service}
          options={{
            headerTitle: 'Service Details',
            headerLeft: () => {
              const navigation = useNavigation();
              return (
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.headerContainer}> // Use goBack()
                  <MaterialIcons name="arrow-back-ios" size={20} color="black" style={{ marginLeft: 2 }} />
                </TouchableOpacity>
              );
            },
            headerRight: () => (
              <TouchableOpacity onPress={() => { /* Handle right icon press */ }} style={styles.headerContainer}>
                <Entypo name="heart-outlined" size={24} color="black" />
              </TouchableOpacity>
            ),
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen name="MainTabs" component={Tabs} options={{ headerShown: false }} />
        <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
        <Stack.Screen name="MeetOurExperts" component={MeetOurExperts}
        options={{
                    headerTitle: 'Meet Our Experts',
                    headerLeft: () => {
                      const navigation = useNavigation();
                      return (
                        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.headerContainer}> // Use goBack()
                          <MaterialIcons name="arrow-back-ios" size={20} color="black" style={{ marginLeft: 2 }} />
                        </TouchableOpacity>
                      );
                    },

                    headerTitleAlign: 'center',
                    headerTitleStyle: { // Add this style
                          fontWeight: 'bold',
                          fontSize: 22, // Adjust as needed
                        },

                  }}/>
                  <Stack.Screen name="Booking" component={Booking} options={{ headerShown: false }} />

        <Stack.Screen name="Notifications" component={Notifications}
               options={{
                                   headerTitle: 'Notifications',
                                   headerLeft: () => {
                                     const navigation = useNavigation();
                                     return (
                                       <TouchableOpacity onPress={() => navigation.goBack()} style={styles.headerContainer}> // Use goBack()
                                         <MaterialIcons name="arrow-back-ios" size={20} color="black" style={{ marginLeft: 2 }} />
                                       </TouchableOpacity>
                                     );
                                   },
                                   headerTitleAlign: 'center',
                                                       headerTitleStyle: { // Add this style
                                                             fontWeight: 'bold',
                                                             fontSize: 24, // Adjust as needed
                                                           },
                       }}
                />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    marginHorizontal: 20,
    padding: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 50,
  },
});

export default App;