import React from 'react';
import { View, Text, StyleSheet, ScrollView, Button, Image } from 'react-native';
import { COURSES_DATA } from '../data/courseData'; // Import course data

const CourseDetailScreen = ({ route, navigation }) => {
  const { courseId } = route.params;
  const course = COURSES_DATA.find(c => c.id === courseId);

  if (!course) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Cours non trouvé</Text>
        <Text>Désolé, les détails de ce cours ne sont pas disponibles.</Text>
        <Button title="Retour à la liste des cours" onPress={() => navigation.goBack()} />
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{course.title}</Text>
      {course.imageUrl && 
        <Image source={{ uri: course.imageUrl }} style={styles.courseImage} resizeMode="cover" />
      }
      <Text style={styles.description}>{course.description}</Text>
      
      <Text style={styles.modulesHeader}>Modules du Cours :</Text>
      {course.modules && course.modules.map(module => (
        <View key={module.id} style={styles.moduleItem}>
          <Text style={styles.moduleTitle}>{module.title}</Text>
          <Text style={styles.moduleDuration}>Durée : {module.duration}</Text>
          <Button 
            title="Commencer le module"
            onPress={() => navigation.navigate('Lesson', { moduleId: module.id, moduleTitle: module.title, courseId: course.id })}
          />
        </View>
      ))}
      {(!course.modules || course.modules.length === 0) && <Text>Aucun module disponible pour ce cours pour le moment.</Text>}

      <View style={styles.enrollButtonContainer}>
        <Button title="S'inscrire à ce cours" onPress={() => alert(`Inscription au cours : ${course.title}`)} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
    color: '#333',
  },
  courseImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 15,
  },
  description: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
    lineHeight: 22,
    textAlign: 'justify',
  },
  modulesHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#444',
  },
  moduleItem: {
    backgroundColor: '#ffffff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  moduleTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 5,
  },
  moduleDuration: {
    fontSize: 14,
    color: '#777',
    marginBottom: 10,
  },
  enrollButtonContainer: {
    marginTop: 20,
    marginBottom: 20,
  },
});

export default CourseDetailScreen;
