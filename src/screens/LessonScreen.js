import React, { useRef, useState } from 'react';
import {
  Button,
  Dimensions,
  Image,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Make sure to install this package
import { LESSON_CONTENT } from '../data/courseData'; // Import lesson data

const LessonScreen = ({ route, navigation }) => {
  const { moduleId, moduleTitle } = route.params; // courseId is also available if needed
  const lesson = LESSON_CONTENT[moduleId];
  const scrollViewRef = useRef(null);
  const [imageError, setImageError] = useState(false);

  const windowHeight = Dimensions.get('window').height;
  const windowWidth = Dimensions.get('window').width;

  if (!lesson) {
    return (
      <View style={styles.container}>
        <Text style={styles.lessonTitle}>Contenu non trouvé</Text>
        <Text>Le contenu de cette leçon est pas encore disponible.</Text>
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

  const scrollToTop = () => {
    scrollViewRef.current?.scrollTo({ y: 0, animated: true });
  };

  const scrollToBottom = () => {
    scrollViewRef.current?.scrollToEnd({ animated: true });
  };

  return (
    <View style={styles.mainContainer}>
      <ScrollView 
        ref={scrollViewRef}
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={true}
        persistentScrollbar={true}
        scrollEventThrottle={16}
        overScrollMode="always"
        bounces={true}
      >
        <View style={styles.content}>
          <Text style={styles.moduleTitleText}>Module : {moduleTitle}</Text>
          <Text style={styles.lessonTitle}>{lesson.title}</Text>
          
          {/* Text content first */}
          <View style={styles.textWrapper}>
            <Text style={styles.textContent}>
              {lesson.textContent}
            </Text>
          </View>
          
          {/* Image after text */}
          {lesson.imageUrl && 
            <View style={styles.imageContainer}>
              <Image 
                source={imageError ? require('../assets/placeholder.png') : { uri: lesson.imageUrl }}
                style={[styles.image, { width: windowWidth - 32 }]}
                resizeMode="contain"
                onError={() => setImageError(true)}
              />
            </View>
          }
          
          {/* Video after image */}
          {lesson.videoUrl && 
            <View style={styles.videoContainer}>
              <TouchableOpacity 
                style={styles.videoButton} 
                onPress={openVideo}
              >
                <Icon name="play-circle-filled" size={50} color="#2196F3" />
                <Text style={styles.videoButtonText}>Regarder la vidéo</Text>
              </TouchableOpacity>
              <Text style={styles.videoNote}>Remarque : Ceci ouvrira YouTube ou un navigateur.</Text>
            </View>
          }

          {/* Rest of the navigation buttons */}
          <View style={styles.navigationButtons}>
            <Button title="Leçon Précédente" onPress={() => alert('Logique de navigation vers leçon précédente à implémenter')} disabled />
            <Button title="Leçon Suivante" onPress={() => alert('Logique de navigation vers leçon suivante à implémenter')} disabled />
          </View>
          <Button title="Marquer comme terminé et retourner" onPress={() => navigation.goBack()} />
          <View style={styles.quizButtonContainer}>
            <Button title="Passer au Quiz du Module" onPress={() => navigation.navigate('Quiz', { moduleId: moduleId, moduleTitle: moduleTitle })} />
          </View>
        </View>
      </ScrollView>
      
      <View style={styles.scrollButtons}>
        <TouchableOpacity 
          style={styles.scrollButton} 
          onPress={scrollToTop}
        >
          <Icon name="arrow-upward" size={24} color="#fff" />
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.scrollButton} 
          onPress={scrollToBottom}
        >
          <Icon name="arrow-downward" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
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
    height: 220,
    backgroundColor: '#f5f5f5',
  },
  textContent: {
    fontSize: 16,
    lineHeight: 24,
    color: '#444',
    textAlign: 'justify',
  },
  videoContainer: {
    width: '100%',
    marginVertical: 16,
  },
  videoNote: {
    fontSize: 12,
    color: '#777',
    marginTop: 8,
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
  containerWithButtons: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  scrollButtons: {
    position: 'absolute',
    right: 16,
    bottom: 16,
    flexDirection: 'column',
    gap: 8,
  },
  scrollButton: {
    backgroundColor: '#2196F3',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  scrollableText: {
    flex: 1,
    paddingBottom: 20,
  },
  scrollView: {
    flex: 1,
    width: '100%',
  },
  contentContainer: {
    flexGrow: 1,
    paddingHorizontal: 16,
    paddingBottom: 80, // Space for scroll buttons
  },
  textWrapper: {
    marginVertical: 16,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  content: {
    padding: 16,
  },
  imageContainer: {
    width: '100%',
    alignItems: 'center',
    marginVertical: 16,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    overflow: 'hidden',
  },
  videoButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 16,
    borderRadius: 8,
    width: '100%',
    justifyContent: 'center',
  },
  videoButtonText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#2196F3',
    fontWeight: 'bold',
  },
});

export default LessonScreen;
