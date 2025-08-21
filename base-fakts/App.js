import { Button, Text, StyleSheet, View, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
     <View style={styles.inputContainer}>
       <TextInput placeholder='Za goal' style={styles.textInput}  />
       <Button title="Add ze goal" />
     </View>
     <View style={styles.goalsContainer}>
       <Text>List of goals...</Text>
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
  }
});
