// src/components/CourseCard.js
import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { Card, Text } from 'react-native-paper';
import colors from '../constants/colors';

const CourseCard = ({ course, onPress }) => {
  return (
    <Card style={styles.card} onPress={onPress}>
      <Image 
        source={course.image} 
        style={styles.image}
        resizeMode="cover"
      />
      <Card.Content style={styles.content}>
        <Text variant="titleMedium" style={styles.title}>
          {course.title}
        </Text>
        <Text variant="bodyMedium" style={styles.duration}>
          Durée : {course.duration} min
        </Text>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 16,
    elevation: 2,
    backgroundColor: colors.surface,
  },
  image: {
    width: 100,
    height: 100,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  content: {
    padding: 16,
  },
  title: {
    color: colors.text,
    marginBottom: 8,
  },
  duration: {
    color: colors.lightText,
  },
});

export default CourseCard;
