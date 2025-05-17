import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import QuizQuestion from '../components/QuizQuestion';
import colors from '../constants/colors';

const QuizScreen = ({ route, navigation }) => {
  const { quiz } = route.params;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswerSelect = (answer) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestionIndex]: answer,
    });
  };

  const calculateScore = () => {
    let correctAnswers = 0;
    quiz.questions.forEach((question, index) => {
      if (selectedAnswers[index] === question.correctAnswer) {
        correctAnswers++;
      }
    });
    return (correctAnswers / quiz.questions.length) * 100;
  };

  const handleSubmit = () => {
    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResults(true);
    }
  };

  if (showResults) {
    const score = calculateScore();
    return (
      <View style={styles.container}>
        <Text variant="headlineMedium" style={styles.scoreText}>
          Score: {Math.round(score)}%
        </Text>
        <Button
          mode="contained"
          onPress={() => navigation.goBack()}
          style={styles.button}
        >
          Terminer
        </Button>
      </View>
    );
  }

  const currentQuestion = quiz.questions[currentQuestionIndex];

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text variant="titleLarge" style={styles.progress}>
          Question {currentQuestionIndex + 1}/{quiz.questions.length}
        </Text>
        <QuizQuestion
          question={currentQuestion.question}
          options={currentQuestion.options}
          selectedAnswer={selectedAnswers[currentQuestionIndex]}
          onAnswerSelect={handleAnswerSelect}
        />
      </ScrollView>
      <Button
        mode="contained"
        onPress={handleSubmit}
        style={styles.button}
        disabled={!selectedAnswers[currentQuestionIndex]}
      >
        {currentQuestionIndex < quiz.questions.length - 1 ? 'Suivant' : 'Terminer'}
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 16,
  },
  scrollContent: {
    flexGrow: 1,
  },
  progress: {
    textAlign: 'center',
    marginBottom: 16,
    color: colors.text,
  },
  button: {
    marginTop: 16,
    marginBottom: 16,
  },
  scoreText: {
    textAlign: 'center',
    marginVertical: 24,
    color: colors.text,
  },
});

export default QuizScreen;