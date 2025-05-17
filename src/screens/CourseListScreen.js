import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { COURSES_DATA } from '../data/courseData'; 
import CourseCard from '../components/CourseCard';
import colors from '../constants/colors';

const CourseListScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [filteredCourses, setFilteredCourses] = React.useState(COURSES_DATA);

  const onChangeSearch = (query) => {
    setSearchQuery(query);
    
    if (query.trim() === '') {
      setFilteredCourses(COURSES_DATA);
    } else {
      const filtered = COURSES_DATA.filter(course =>
        course.title.toLowerCase().includes(query.toLowerCase()) ||
        course.description.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredCourses(filtered);
    }
  };

  const renderCourseItem = ({ item }) => (
    <CourseCard
      course={item}
      onPress={() => navigation.navigate('CourseDetail', { 
        courseId: item.id, 
        courseTitle: item.title
      })}
    />
  );

  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Rechercher un cours"
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={styles.searchBar}
      />
      
      {filteredCourses.length > 0 ? (
        <FlatList
          data={filteredCourses}
          renderItem={renderCourseItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.listContainer}
        />
      ) : (
        <View style={styles.noResultsContainer}>
          <Text style={styles.noResultsText}>
            Aucun cours ne correspond à votre recherche
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: colors.background,
  },
  searchBar: {
    marginBottom: 16,
    elevation: 2,
  },
  listContainer: {
    paddingBottom: 20,
  },
  noResultsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  noResultsText: {
    fontSize: 16,
    color: colors.lightText,
    textAlign: 'center',
  },
});

export default CourseListScreen;
