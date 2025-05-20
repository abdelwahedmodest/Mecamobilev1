import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Card, Title, Paragraph, ProgressBar } from 'react-native-paper';
import colors from '../constants/colors';

// Exemple de données utilisateur - À remplacer par des données réelles plus tard
const USER_DATA = {
  name: 'abdelwahed samil',
  coursesEnrolled: [
    { id: '1', title: 'Introduction à la Mécanique Moteur', progress: 0.75 },
    { id: '2', title: 'Systèmes de Freinage : Théorie et Pratique', progress: 0.40 },
  ],
};

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.welcomeSection}>
        <Text style={styles.title}>Tableau de Bord des Cours</Text>
        <Text style={styles.welcomeText}>Bienvenue sur Mecamobile, {USER_DATA.name}!</Text>
      </View>
      
      <Text style={styles.sectionTitle}>Vos cours en cours</Text>
      {USER_DATA.coursesEnrolled.length > 0 ? (
        USER_DATA.coursesEnrolled.map((course) => (
          <Card 
            key={course.id} 
            style={styles.courseCard}
            onPress={() => navigation.navigate('CourseDetail', { 
              courseId: course.id, 
              courseTitle: course.title 
            })}
          >
            <Card.Content>
              <Title>{course.title}</Title>
              <Paragraph>Progression: {Math.round(course.progress * 100)}%</Paragraph>
              <ProgressBar 
                progress={course.progress} 
                color={colors.primary} 
                style={styles.progressBar} 
              />
            </Card.Content>
          </Card>
        ))
      ) : (
        <Text style={styles.noCourses}>
          Vous êtes pas  encore inscrit à aucun cours pour le moment
        </Text>
      )}
      
      <TouchableOpacity 
        style={styles.exploreCourses}
        onPress={() => navigation.navigate('Courses')}
      >
        <Text style={styles.exploreCoursesText}>Explorer tous les cours</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  welcomeSection: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    color: colors.primary,
  },
  welcomeText: {
    fontSize: 16,
    color: '#333',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 10,
  },
  courseCard: {
    marginBottom: 12,
    elevation: 2,
  },
  progressBar: {
    marginTop: 10,
    height: 8,
    borderRadius: 4,
  },
  noCourses: {
    textAlign: 'center',
    marginVertical: 20,
    fontStyle: 'italic',
    color: '#777',
  },
  exploreCourses: {
    marginTop: 20,
    backgroundColor: colors.primary,
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  exploreCoursesText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default HomeScreen;
