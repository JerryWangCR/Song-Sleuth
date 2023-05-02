import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

export const EndScreen = ({score}) => {
  const GoToNewGame = () => {
  };
  
  const GoToGameModes = () => {
  };

  let EndScoreText; //add more stuff
  switch (score) {
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
        <Text style={styles.largeText}>{score}/10</Text>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#312D2D',
  },
  textBox: {
    width: '80%',
    height: '30%',
    backgroundColor: '#1B1B1F',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  largeText: {
    fontSize: 80,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  smallText: {
    fontSize: 24,
    color: '#fff',
    textAlign: 'center',
    marginTop: 10,
  },
  button: {
    width: '80%',
    height: 60,
    borderRadius: 30,
    backgroundColor: '#1B1B1F',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});
