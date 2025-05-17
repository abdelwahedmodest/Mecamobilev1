import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import colors from '../constants/colors';

const ProgressBar = ({ progress, label = true }) => {
  const percentage = Math.min(Math.max(progress, 0), 100);
  
  return (
    <View style={styles.container}>
      <View style={styles.progressContainer}>
        <View style={[styles.progressBar, { width: `${percentage}%` }]} />
      </View>
      {label && (
        <Text variant="bodySmall" style={styles.label}>
          {`${Math.round(percentage)}%`}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  progressContainer: {
    flex: 1,
    height: 8,
    backgroundColor: colors.lightGrey,
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: colors.primary,
    borderRadius: 4,
  },
  label: {
    marginLeft: 8,
    color: colors.text,
    fontSize: 12,
  },
});

export default ProgressBar;