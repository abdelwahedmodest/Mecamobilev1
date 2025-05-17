/**
 * Helper functions for the Mecamobile application
 */

// Format duration from minutes to readable string
export const formatDuration = (minutes) => {
  if (!minutes) return '0 min';
  if (minutes < 60) return `${minutes} min`;
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  return remainingMinutes > 0 ? `${hours}h ${remainingMinutes}min` : `${hours}h`;
};

// Calculate progress percentage
export const calculateProgress = (completed, total) => {
  if (!total) return 0;
  return Math.round((completed / total) * 100);
};

// Validate email format
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Format date to French locale
export const formatDate = (date) => {
  return new Date(date).toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

// Truncate text with ellipsis
export const truncateText = (text, maxLength = 100) => {
  if (!text || text.length <= maxLength) return text;
  return `${text.slice(0, maxLength)}...`;
};

// Generate random avatar color
export const generateAvatarColor = (name) => {
  const colors = [
    '#FF6B6B', '#4ECDC4', '#45B7D1', 
    '#96CEB4', '#FFEEAD', '#D4A5A5'
  ];
  const index = name
    .split('')
    .reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return colors[index % colors.length];
};

// Sort items by date
export const sortByDate = (items, key = 'date', ascending = false) => {
  return [...items].sort((a, b) => {
    const dateA = new Date(a[key]);
    const dateB = new Date(b[key]);
    return ascending ? dateA - dateB : dateB - dateA;
  });
};

// Deep clone object
export const deepClone = (obj) => {
  return JSON.parse(JSON.stringify(obj));
};

// Extract initials from name
export const getInitials = (name) => {
  return name
    .split(' ')
    .map(word => word.charAt(0))
    .join('')
    .toUpperCase()
    .slice(0, 2);
};

// Handle API errors
export const handleApiError = (error) => {
  if (error.response) {
    // Server responded with error
    return error.response.data.message || 'Une erreur est survenue';
  } else if (error.request) {
    // No response received
    return 'Impossible de contacter le serveur';
  } else {
    // Request setup error
    return 'Erreur de requête';
  }
};