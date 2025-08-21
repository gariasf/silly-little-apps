import { Text, StyleSheet, View, Pressable } from 'react-native';

export default function GoalItem({ item, onDelete }) {
  return (
    <Pressable onPress={onDelete.bind(null, item.key)}>
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{item.text}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  goalText: {
    color: '#fff'
  }
});
