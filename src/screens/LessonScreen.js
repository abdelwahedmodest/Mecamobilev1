import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Button, Linking } from 'react-native';
import { LESSON_CONTENT } from '../data/courseData'; // Import lesson data

const LessonScreen = ({ route, navigation }) => {
  const { moduleId, moduleTitle } = route.params; // courseId is also available if needed
  const lesson = LESSON_CONTENT[moduleId];

  if (!lesson) {
    return (
      <View style={styles.container}>
        <Text style={styles.lessonTitle}>Contenu non trouvé</Text>
        <Text>Le contenu de cette leçon n'est pas encore disponible.</Text>
        <Button title="Retour au module" onPress={() => navigation.goBack()} />
      </View>
    );
  }

  const openVideo = () => {
    if (lesson.videoUrl) {
      Linking.canOpenURL(lesson.videoUrl).then(supported => {
        if (supported) {
          Linking.openURL(lesson.videoUrl);
        } else {
          alert("Impossible d'ouvrir le lien vidéo.");
        }
      });
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.moduleTitleText}>Module : {moduleTitle}</Text>
      <Text style={styles.lessonTitle}>{lesson.title}</Text>
      
      {lesson.imageUrl && 
        <Image source={{ uri: lesson.imageUrl }} style={styles.image} resizeMode="contain" />
      }
      
      <Text style={styles.textContent}>{lesson.textContent}</Text>
      
      {lesson.videoUrl && 
        <View style={styles.videoContainer}>
          <Button title="Regarder la vidéo (YouTube)" onPress={openVideo} />
          <Text style={styles.videoNote}>Remarque : Ceci ouvrira YouTube ou un navigateur.</Text>
        </View>
      }

      <View style={styles.navigationButtons}>
        {/* Basic navigation, can be improved with actual previous/next lesson logic */}
        <Button title="Leçon Précédente" onPress={() => alert('Logique de navigation vers leçon précédente à implémenter')} disabled />
        <Button title="Leçon Suivante" onPress={() => alert('Logique de navigation vers leçon suivante à implémenter')} disabled />
      </View>
      <Button title="Marquer comme terminé et retourner" onPress={() => navigation.goBack()} />
      <View style={styles.quizButtonContainer}>
        <Button title="Passer au Quiz du Module" onPress={() => navigation.navigate('Quiz', { moduleId: moduleId, moduleTitle: moduleTitle })} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#ffffff',
  },
  moduleTitleText: {
    fontSize: 16,
    color: '#555',
    marginBottom: 8,
    textAlign: 'center',
  },
  lessonTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    color: '#333',
  },
  image: {
    width: '100%',
    height: 220,
    marginBottom: 16,
    borderRadius: 8,
    backgroundColor: '#e0e0e0', // Placeholder background for image loading
  },
  textContent: {
    fontSize: 17,
    lineHeight: 25,
    color: '#444',
    marginBottom: 20,
    textAlign: 'justify',
  },
  videoContainer: {
    marginVertical: 20,
    alignItems: 'center',
  },
  videoNote: {
    fontSize: 12,
    color: '#777',
    marginTop: 5,
  },
  navigationButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    marginTop: 10,
  },
  quizButtonContainer: {
    marginTop: 15,
    marginBottom: 20,
  },
});

export default LessonScreen;
