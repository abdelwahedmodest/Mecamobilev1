import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import CourseDetailScreen from '../screens/CourseDetailScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import LessonScreen from '../screens/LessonScreen';
import LoginScreen from '../screens/LoginScreen';
import QuizScreen from '../screens/QuizScreen';
import RegisterScreen from '../screens/RegisterScreen';
import TabNavigator from './TabNavigator';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="Main" 
        component={TabNavigator} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="CourseDetail" 
        component={CourseDetailScreen} 
        options={({ route }) => ({ title: route.params.courseTitle || 'Détail du cours' })} 
      />
      <Stack.Screen 
        name="Lesson" 
        component={LessonScreen} 
        options={({ route }) => ({ title: route.params.moduleTitle || 'Leçon' })} 
      />
      <Stack.Screen 
        name="Quiz" 
        component={QuizScreen} 
        options={({ route }) => ({ title: `Quiz: ${route.params.moduleTitle}` || 'Quiz' })} 
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{
          title: "S'inscrire",
        }}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPasswordScreen}
        options={{ title: "Mot de passe oublié" }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
