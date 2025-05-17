import AsyncStorage from '@react-native-async-storage/async-storage';

const USER_KEY = '@mecamobile:user';

const TEST_USERS = {
  'admin@mecamobile.fr': {
    password: 'Admin@123',
    name: 'Admin Mecamobile',
    role: 'admin'
  },
  'prof@mecamobile.fr': {
    password: 'Prof@123',
    name: 'Jean Dupont',
    role: 'instructor'
  },
  'etudiant1@mecamobile.fr': {
    password: 'Student@123',
    name: 'Marie Martin',
    role: 'student'
  },
  'etudiant2@mecamobile.fr': {
    password: 'Student@123',
    name: 'Thomas Bernard',
    role: 'student'
  }
};

class AuthService {
  constructor() {
    this.user = null;
  }

  // User login
  async login(email, password) {
    try {
      // Vérification des identifiants de test
      const testUser = TEST_USERS[email.toLowerCase()];
      
      if (!testUser) {
        throw new Error('Utilisateur non trouvé');
      }
      
      if (testUser.password !== password) {
        throw new Error('Mot de passe incorrect');
      }

      const user = {
        email: email.toLowerCase(),
        name: testUser.name,
        role: testUser.role
      };

      await this.setUser(user);
      return user;

    } catch (error) {
      console.error('Login error:', error.message);
      throw error;
    }
  }

  // User registration
  async register(email, password, name) {
    try {
      // Vérifier si l'email existe déjà
      if (TEST_USERS[email.toLowerCase()]) {
        throw new Error('Cet email est déjà utilisé');
      }

      // Ajouter le nouvel utilisateur
      const newUser = {
        email: email.toLowerCase(),
        name,
        role: 'student'
      };

      await this.setUser(newUser);
      return newUser;
    } catch (error) {
      console.error('Registration error:', error.message);
      throw error;
    }
  }

  // Password reset
  async resetPassword(email) {
    try {
      // TODO: Implement your API call here
      const response = await fetch('YOUR_API_ENDPOINT/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error('Password reset failed');
      }

      return true;
    } catch (error) {
      console.error('Password reset error:', error);
      throw error;
    }
  }

  // Logout user
  async logout() {
    try {
      await AsyncStorage.removeItem(USER_KEY);
      this.user = null;
    } catch (error) {
      console.error('Logout error:', error);
      throw error;
    }
  }

  // Get current user
  async getCurrentUser() {
    try {
      if (this.user) return this.user;

      const userData = await AsyncStorage.getItem(USER_KEY);
      if (userData) {
        this.user = JSON.parse(userData);
        return this.user;
      }
      return null;
    } catch (error) {
      console.error('Get user error:', error);
      return null;
    }
  }

  // Set user data
  async setUser(userData) {
    try {
      await AsyncStorage.setItem(USER_KEY, JSON.stringify(userData));
      this.user = userData;
    } catch (error) {
      console.error('Set user error:', error);
      throw error;
    }
  }

  // Check if user is authenticated
  async isAuthenticated() {
    const user = await this.getCurrentUser();
    return !!user;
  }
}

export default new AuthService();