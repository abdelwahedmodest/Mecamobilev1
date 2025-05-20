import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useAuth } from '../context/AuthContext';

// Sample User Data - replace with actual data later
const USER_DATA = {
  name: 'Abdelwahed Jean',
  email: 'abdelwahed.jean@gmail.com',
  avatarUrl: './src/assets/logo.png',
  coursesEnrolled: [
    { id: '1', title: 'Introduction à la Mécanique Moteur', progress: 95 },
    { id: '2', title: 'Systèmes de Freinage : Théorie et Pratique', progress: 25 },
  ],
  badges: [
    { id: 'b1', name: 'Pro du Moteur', icon: '🏆' },
    { id: 'b2', name: 'As du Freinage', icon: '🛠️' },
  ],
};

const UserProfileScreen = ({ route, navigation }) => {
  const { logout } = useAuth();

  // Add effect to handle updated data
  React.useEffect(() => {
    if (route.params?.refresh && route.params?.updatedUserData) {
      // Update the UI with new data
      const updatedData = route.params.updatedUserData;
      // Update your UI state here
    }
  }, [route.params]);

  const handleLogout = () => {
    logout(); // Clear authentication state
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }], // Navigate to Login screen and clear navigation stack
    });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: USER_DATA.avatarUrl }} style={styles.avatar} />
        <Text style={styles.userName}>{USER_DATA.name}</Text>
        <Text style={styles.userEmail}>{USER_DATA.email}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Mes Cours Inscrits</Text>
        {USER_DATA.coursesEnrolled.map(course => (
          <View key={course.id} style={styles.courseItem}>
            <Text style={styles.courseTitle}>{course.title}</Text>
            <View style={styles.progressBarContainer}>
              <View style={[styles.progressBar, { width: `${course.progress}%` }]} />
            </View>
            <Text style={styles.progressText}>{course.progress}% complété</Text>
          </View>
        ))}
        {USER_DATA.coursesEnrolled.length === 0 && <Text>Vous etes  non   inscrit à aucun cours pour le moment.</Text>}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Mes Badges et Certificats</Text>
        <View style={styles.badgesContainer}>
          {USER_DATA.badges.map(badge => (
            <View key={badge.id} style={styles.badgeItem}>
              <Text style={styles.badgeIcon}>{badge.icon}</Text>
              <Text style={styles.badgeName}>{badge.name}</Text>
            </View>
          ))}
          {USER_DATA.badges.length === 0 && <Text>Aucun badge gagné pour le moment.</Text>}
        </View>
      </View>

      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('ProfileScreen', { 
          userData: {
            name: USER_DATA.name,
            email: USER_DATA.email,
            phone: USER_DATA.phone || '',
            speciality: USER_DATA.speciality || '',
          }
        })}
      >
        <Text style={styles.buttonText}>Modifier le Profil</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={[styles.button, styles.logoutButton]} 
        onPress={handleLogout}
      >
        <Text style={styles.buttonText}>Se Déconnecter</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f6f8',
  },
  header: {
    backgroundColor: '#007bff',
    padding: 30,
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
    borderWidth: 3,
    borderColor: '#fff',
  },
  userName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  userEmail: {
    fontSize: 16,
    color: '#e0e0e0',
  },
  section: {
    backgroundColor: '#ffffff',
    padding: 20,
    marginBottom: 10,
    marginHorizontal: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  courseItem: {
    marginBottom: 15,
  },
  courseTitle: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 5,
  },
  progressBarContainer: {
    height: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    overflow: 'hidden',
    marginBottom: 5,
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#4caf50',
  },
  progressText: {
    fontSize: 12,
    color: '#555',
    textAlign: 'right',
  },
  badgesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  badgeItem: {
    alignItems: 'center',
    marginRight: 20,
    marginBottom: 10,
    minWidth: 80,
  },
  badgeIcon: {
    fontSize: 40,
    marginBottom: 5,
  },
  badgeName: {
    fontSize: 14,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal: 10,
    marginTop: 10,
  },
  logoutButton: {
    backgroundColor: '#dc3545',
    marginTop: 10,
    marginBottom: 20,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default UserProfileScreen;

