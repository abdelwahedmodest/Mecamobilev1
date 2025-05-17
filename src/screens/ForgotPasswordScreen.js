import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text, TextInput } from 'react-native-paper';
import colors from '../constants/colors';

const ForgotPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleResetPassword = async () => {
    if (!email) {
      setError('Veuillez saisir votre adresse e-mail');
      return;
    }

    setLoading(true);
    setError('');

    try {
      // TODO: Implement password reset logic here
      // await auth.sendPasswordResetEmail(email);
      setSuccess(true);
    } catch (err) {
      setError('Une erreur est survenue. Veuillez réessayer.');
      console.error('Password reset error:', err);
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <View style={styles.container}>
        <Text variant="headlineSmall" style={styles.successText}>
          Instructions envoyées !
        </Text>
        <Text style={styles.messageText}>
          Consultez votre boîte mail pour réinitialiser votre mot de passe.
        </Text>
        <Button
          mode="contained"
          onPress={() => navigation.navigate('Login')}
          style={styles.button}
        >
          Retour à la connexion
        </Button>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text variant="headlineSmall" style={styles.title}>
        Réinitialiser le mot de passe
      </Text>
      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        mode="outlined"
        keyboardType="email-address"
        autoCapitalize="none"
        style={styles.input}
      />
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
      <Button
        mode="contained"
        onPress={handleResetPassword}
        loading={loading}
        disabled={loading}
        style={styles.button}
      >
        Envoyer les instructions
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: colors.background,
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    marginBottom: 24,
    color: colors.text,
  },
  input: {
    marginBottom: 16,
  },
  button: {
    marginTop: 16,
  },
  errorText: {
    color: colors.error,
    textAlign: 'center',
  },
  successText: {
    color: colors.success,
    textAlign: 'center',
    marginBottom: 16,
  },
  messageText: {
    textAlign: 'center',
    marginBottom: 24,
    color: colors.text,
  },
});

export default ForgotPasswordScreen;