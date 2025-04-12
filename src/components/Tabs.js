import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import Category from './Category';
import Profile from './Profile';
import Booking from './Booking';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Text, View, StyleSheet,TouchableOpacity } from 'react-native';
import {useNavigation} from '@react-navigation/native';
const Tab = createBottomTabNavigator();

const Tabs = () => {
const navigation = useNavigation();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          elevation: 5,
          backgroundColor: '#ffffff',
          borderRadius: 15,
          height: 90

        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{

          headerTitle: '', // Remove default title
          headerLeft: () => (
             <Text style={styles.headerLeftText}>Welcome back,</Text>
          ),
          headerRight: () => (
             <TouchableOpacity style={styles.headerRightContainer} onPress={() => navigation.navigate('Notifications')}>
                  <Ionicons name="notifications" size={20} color="black" />
             </TouchableOpacity>
          ),
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabItem}>
              <Ionicons name="home" size={24} color={focused ? 'blue' : 'black'} />
              <Text style={[styles.tabLabel, { color: focused ? 'blue' : 'black' }]}>Home</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Category"
        component={Category}
        options={{
          headerShown:false,
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabItem}>
              <Ionicons name="apps" size={24} color={focused ? 'blue' : 'black'} />
              <Text style={[styles.tabLabel, { color: focused ? 'blue' : 'black' }]}>Category</Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
              name="Booking"
              component={Booking}
              options={{
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                  <View style={styles.tabItem}>
                    <MaterialCommunityIcons name="book-check" size={24} color={focused ? 'blue' : 'black'} />
                    <Text style={[styles.tabLabel, { color: focused ? 'blue' : 'black' }]}>Booking</Text>
                  </View>
                ),
              }}
            />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabItem}>
              <Ionicons name="person" size={24} color={focused ? 'blue' : 'black'} />
              <Text style={[styles.tabLabel, { color: focused ? 'blue' : 'black' }]}>Profile</Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabItem: {
    justifyContent: 'center',
    alignItems: 'center',
    width:100,
    height:90,
    marginTop:40
  },
  tabLabel: {
    fontSize: 15,

  },
  headerLeftText: {
      fontSize: 24,
      fontWeight: 'bold',
      marginLeft: 20, // Add some left margin
    },
    headerRightContainer: {
      marginRight: 20, // Add some right margin
      padding: 10, // Add padding for touchable area
      backgroundColor:"#e0e0e0",
      borderRadius:50
    },
});

export default Tabs;