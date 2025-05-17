import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import CourseListScreen from '../screens/CourseListScreen';
import UserProfileScreen from '../screens/UserProfileScreen';
import colors from '../constants/colors';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
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
