import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import GameScreen from './src/Screens/GameScreen/GameScreen'

export default function App() {
  return (
    <View style={styles.container}>
      <GameScreen></GameScreen>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderStyle: 'solid',
    borderColor: 'black',
    borderRadius: 5,
    borderWidth: 5
  },
});
