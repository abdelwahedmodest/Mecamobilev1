import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';

const PROGRESS_KEY = '@mecamobile:progress';

const useProgress = () => {
  const [progress, setProgress] = useState({
    completedLessons: {},
    courseProgress: {},
  });

  useEffect(() => {
    loadProgress();
  }, []);

  const loadProgress = async () => {
    try {
      const savedProgress = await AsyncStorage.getItem(PROGRESS_KEY);
      if (savedProgress) {
        setProgress(JSON.parse(savedProgress));
      }
    } catch (error) {
      console.error('Error loading progress:', error);
    }
  };

  const saveProgress = async (newProgress) => {
    try {
      await AsyncStorage.setItem(PROGRESS_KEY, JSON.stringify(newProgress));
      setProgress(newProgress);
    } catch (error) {
      console.error('Error saving progress:', error);
    }
  };

  const markLessonComplete = async (lessonId) => {
    const newProgress = {
      ...progress,
      completedLessons: {
        ...progress.completedLessons,
        [lessonId]: true,
      },
    };
    await saveProgress(newProgress);
  };

  const updateCourseProgress = async (courseId, percentComplete) => {
    const newProgress = {
      ...progress,
      courseProgress: {
        ...progress.courseProgress,
        [courseId]: percentComplete,
      },
    };
    await saveProgress(newProgress);
  };

  const isLessonCompleted = (lessonId) => {
    return !!progress.completedLessons[lessonId];
  };

  const getCourseProgress = (courseId) => {
    return progress.courseProgress[courseId] || 0;
  };

  return {
    progress,
    markLessonComplete,
    updateCourseProgress,
    isLessonCompleted,
    getCourseProgress,
  };
};

export default useProgress;