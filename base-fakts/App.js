import { Button, Text, StyleSheet, View, TextInput, FlatList } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [goals, setGoals] = useState([]);

  function goalInputHandler(text) {
    setEnteredGoalText(text);
  }

  function addGoalHandler() {
    setGoals(prevGoals => [...prevGoals, {
      key: Math.random().toString(),
      text: enteredGoalText
    }]);
  }

  return (
    <View style={styles.appContainer}>
     <View style={styles.inputContainer}>
       <TextInput placeholder='Za goal' style={styles.textInput} onChangeText={goalInputHandler} />
       <Button title="Add ze goal" onPress={addGoalHandler} />
     </View>
     <View  style={styles.goalsContainer}>
    <FlatList
        data={goals}
        renderItem={({ item }) => (
          <View style={styles.goalItem}>
            <Text style={styles.goalText}>{item.text}</Text>
          </View>
        )}
    />
     </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 24
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    width: "70%",
    marginRight: 8,
    paddingLeft: 8
  },
  goalsContainer: {
    flex: 8
  },
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
