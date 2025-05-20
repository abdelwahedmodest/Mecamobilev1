import React, { useState } from 'react';
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { updateUserData } from '../data/userData';

const ProfileScreen = ({ navigation, route }) => {
  const [formData, setFormData] = useState({
    name: route.params?.userData?.name || '',
    email: route.params?.userData?.email || '',
    phone: route.params?.userData?.phone || '',
    speciality: route.params?.userData?.speciality || '',
  });

  const handleSubmit = () => {
    try {
      // Update user data
      const updatedData = updateUserData({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        speciality: formData.speciality,
      });

      // Show success message and navigate back to UserProfileScreen
      Alert.alert(
        'Succès',
        'Profil mis à jour avec succès',
        [{ 
          text: 'OK', 
          onPress: () => {
            navigation.replace('UserProfile', {
              refresh: true,
              updatedUserData: updatedData
            });
          }
        }]
      );
    } catch (error) {
      Alert.alert(
        'Erreur',
        'Une erreur est survenue lors de la mise à jour du profil',
        [{ text: 'OK' }]
      );
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.label}>Nom complet</Text>
        <TextInput
          style={styles.input}
          value={formData.name}
          onChangeText={(text) => setFormData({ ...formData, name: text })}
          placeholder="Entrez votre nom complet"
        />

        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          value={formData.email}
          onChangeText={(text) => setFormData({ ...formData, email: text })}
          placeholder="Entrez votre email"
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Text style={styles.label}>Téléphone</Text>
        <TextInput
          style={styles.input}
          value={formData.phone}
          onChangeText={(text) => setFormData({ ...formData, phone: text })}
          placeholder="Entrez votre numéro de téléphone"
          keyboardType="phone-pad"
        />

        <Text style={styles.label}>Spécialité</Text>
        <TextInput
          style={styles.input}
          value={formData.speciality}
          onChangeText={(text) => setFormData({ ...formData, speciality: text })}
          placeholder="Entrez votre spécialité"
        />

        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Enregistrer les modifications</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f6f8',
  },
  form: {
    padding: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
    marginTop: 16,
  },
  input: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    fontSize: 16,
  },
  submitButton: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 30,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProfileScreen;