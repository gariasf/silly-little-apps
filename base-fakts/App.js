import { StyleSheet, View, FlatList, Button } from 'react-native';
import { useState } from 'react';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [goals, setGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  function addGoalHandler(enteredGoalText) {
    setGoals(prevGoals => [...prevGoals, {
      key: Math.random().toString(),
      text: enteredGoalText
    }]);
    endAddGoalHandler();
  }

  function deleteGoalHandler(id) {
    setGoals(prevGoals => prevGoals.filter(goal => goal.key !== id));
  }

  return (
   <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button title="Add Ze Goal" color="#a965ec" onPress={startAddGoalHandler} />
        <GoalInput onAddGoal={addGoalHandler} onCancel={endAddGoalHandler} visible={modalIsVisible} />
        <View style={styles.goalsContainer}>
          <FlatList
            data={goals}
            renderItem={({ item }) => <GoalItem item={item} onDelete={deleteGoalHandler} />}
          />
        </View>
      </View>
   </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 80,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 8
  }
});
