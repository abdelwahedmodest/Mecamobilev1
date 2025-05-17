import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Card, IconButton, Text } from 'react-native-paper';
import colors from '../constants/colors';

const LessonCard = ({ lesson, onPress, isCompleted }) => {
  return (
    <Card style={styles.card} onPress={onPress}>
      <Card.Content style={styles.content}>
        <View style={styles.textContainer}>
          <Text variant="titleMedium" style={[styles.title, isCompleted && styles.completedText]}>
            {lesson.title}
          </Text>
          <Text variant="bodyMedium" style={[styles.duration, isCompleted && styles.completedText]}>
            Durée : {lesson.duration}
          </Text>
        </View>
        <View style={styles.iconContainer}>
          {isCompleted ? (
            <IconButton
              icon="check-circle"
              color={colors.success}
              size={24}
            />
          ) : (
            <IconButton
              icon="play-circle"
              color={colors.primary}
              size={24}
            />
          )}
        </View>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 12,
    elevation: 2,
    backgroundColor: '#ffffff',
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
    marginRight: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
  },
  duration: {
    fontSize: 14,
    color: colors.lightText,
    marginTop: 4,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  completedText: {
    textDecorationLine: 'line-through',
  },
});

export default LessonCard;