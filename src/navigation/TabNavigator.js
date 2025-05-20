import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import colors from '../constants/colors';
import { useAuth } from '../context/AuthContext';
import CourseListScreen from '../screens/CourseListScreen';
import HomeScreen from '../screens/HomeScreen';
import UserProfileScreen from '../screens/UserProfileScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const { logout } = useAuth();

  return (
    <Tab.Navigator
      screenOptions={({ route, navigation }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Courses') {
            iconName = focused ? 'book' : 'book-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: 'gray',
        headerRight: () => (
          <TouchableOpacity 
            onPress={() => logout(navigation)}
            style={{ marginRight: 16 }}
          >
            <MaterialCommunityIcons 
              name="logout" 
              size={24} 
              color={colors.primary} 
            />
          </TouchableOpacity>
        ),
      })}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ title: 'Tableau de Bord' }} 
      />
      <Tab.Screen 
        name="Courses" 
        component={CourseListScreen} 
        options={{ title: 'Catalogue des Cours' }} 
      />
      <Tab.Screen 
        name="Profile" 
        component={UserProfileScreen} 
        options={{ title: 'Mon Profil' }} 
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
