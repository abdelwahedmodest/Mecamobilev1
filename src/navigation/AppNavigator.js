import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { useAuth } from '../context/AuthContext';
import CourseDetailScreen from '../screens/CourseDetailScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import LessonScreen from '../screens/LessonScreen';
import LoginScreen from '../screens/LoginScreen';
import ProfileScreen from '../screens/ProfileScreen';
import QuizScreen from '../screens/QuizScreen';
import RegisterScreen from '../screens/RegisterScreen';
import TabNavigator from './TabNavigator';

const Stack = createStackNavigator();

const AuthStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen 
      name="Register" 
      component={RegisterScreen}
      options={{ 
        headerShown: true,
        title: "S'inscrire" 
      }} 
    />
    <Stack.Screen 
      name="ForgotPassword" 
      component={ForgotPasswordScreen}
      options={{ 
        headerShown: true,
        title: "Mot de passe oublié" 
      }} 
    />
  </Stack.Navigator>
);

const MainStack = () => (
  <Stack.Navigator>
    <Stack.Screen 
      name="Main" 
      component={TabNavigator} 
      options={{ headerShown: false }} 
    />
    <Stack.Screen 
      name="CourseDetail" 
      component={CourseDetailScreen} 
      options={({ route }) => ({ 
        title: route.params.courseTitle || 'Détail du cours' 
      })} 
    />
    <Stack.Screen 
      name="Lesson" 
      component={LessonScreen} 
      options={({ route }) => ({ 
        title: route.params.moduleTitle || 'Leçon' 
      })} 
    />
    <Stack.Screen 
      name="Quiz" 
      component={QuizScreen} 
      options={({ route }) => ({ 
        title: `Quiz: ${route.params.moduleTitle}` || 'Quiz' 
      })} 
    />
    <Stack.Screen 
      name="ProfileScreen"
      component={ProfileScreen}
      options={{
        title: 'Modifier le Profil',
        headerBackTitle: 'Retour',
      }}
    />
  </Stack.Navigator>
);

const AppNavigator = () => {
  const { isAuthenticated } = useAuth();

  return (
    <>
      {!isAuthenticated ? <AuthStack /> : <MainStack />}
    </>
  );
};

export default AppNavigator;
