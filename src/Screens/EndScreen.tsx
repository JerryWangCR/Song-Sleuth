import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import styles from './EndScreenStyles';

const MyPage: React.FC = () => {
  const [counter, setCounter] = useState(0);

  const GoToNewGame = () => {
  };
  
  const GoToGameModes = () => {
  };

  useEffect(() => {
    setCounter(0);
  }, []);

  let EndScoreText;
  switch (counter) {
    case 0:
      EndScoreText = 'Wow...';
      break;
    case 5:
      EndScoreText = 'Halfway there';
      break;
    case 10:
      EndScoreText = 'Nice Job';
      break;
    default:
      EndScoreText = 'Better Luck Next Time!';
      break;
  }
  return (
    <View style={styles.container}>
      <View style={styles.textBox}>
        <Text style={styles.largeText}>{counter}/10</Text>
        <Text style={styles.smallText}>{EndScoreText}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={GoToNewGame}>
        <Text style={styles.buttonText}>Play Again</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={GoToGameModes}>
        <Text style={styles.buttonText}>Try Another Game Mode</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MyPage;