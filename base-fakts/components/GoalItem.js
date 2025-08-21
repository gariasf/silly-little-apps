import { Text, StyleSheet, View, Pressable } from 'react-native';

export default function GoalItem({ item, onDelete }) {
  return (
      <View style={styles.goalItem}>
        <Pressable
          android_ripple={{ color: '#210644' }}
          onPress={onDelete.bind(null, item.key)}
          style={({pressed}) => pressed && styles.pressedItem}
        >
          <Text style={styles.goalText}>{item.text}</Text>
        </Pressable>
      </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    padding: 8,
    color: '#fff'
  }
});
