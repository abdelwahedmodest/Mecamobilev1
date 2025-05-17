import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Card, RadioButton, Text } from 'react-native-paper';
import colors from '../constants/colors';

const QuizQuestion = ({ question, options, selectedAnswer, onAnswerSelect }) => {
  return (
    <Card style={styles.card}>
      <Card.Content>
        <Text variant="titleMedium" style={styles.question}>
          {question}
        </Text>
        <View style={styles.optionsContainer}>
          {options.map((option, index) => (
            <RadioButton.Item
              key={index}
              label={option}
              value={option}
              status={selectedAnswer === option ? 'checked' : 'unchecked'}
              onPress={() => onAnswerSelect(option)}
              style={styles.optionItem}
              labelStyle={styles.optionLabel}
              color={colors.primary}
            />
          ))}
        </View>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    marginVertical: 8,
    marginHorizontal: 16,
    elevation: 2,
    backgroundColor: '#ffffff',
  },
  question: {
    color: colors.text,
    marginBottom: 16,
    fontWeight: '600',
  },
  optionsContainer: {
    marginTop: 8,
  },
  optionItem: {
    paddingVertical: 4,
    marginVertical: 4,
    backgroundColor: colors.surface,
    borderRadius: 8,
  },
  optionLabel: {
    color: colors.text,
    fontSize: 14,
  },
});

export default QuizQuestion;