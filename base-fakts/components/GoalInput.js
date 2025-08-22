import { Button, StyleSheet, View, TextInput, Modal, Image } from 'react-native';
import { useState } from 'react';

export default function GoalInput({ onAddGoal, onCancel, visible }) {
  const [enteredGoalText, setEnteredGoalText] = useState('');

  function goalInputHandler(text) {
    setEnteredGoalText(text);
  }

  function addGoalHandler() {
    if (enteredGoalText.trim().length === 0) {
      return;
    }
    onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  }

  return (
    <Modal  visible={visible} animationType='slide'>
      <View style={styles.inputContainer}>
        <Image source={require('../assets/images/goal.png')} style={styles.image} />
        <TextInput
          placeholder='Za goal'
          style={styles.textInput}
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
         <View style={styles.button}>
           <Button title="Add ze goal" onPress={addGoalHandler} />
         </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={onCancel} />
          </View>
        </View>
      </View>


    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#311b6b'
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 24
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    width: "100%",
    marginRight: 8,
    paddingLeft: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16,
    width: "70%",
    position: "relative"
  },
  button: {
    width: 120,
    marginHorizontal: 8
  }
});
