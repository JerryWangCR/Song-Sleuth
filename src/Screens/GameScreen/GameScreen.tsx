import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import MultipleChoiceGrid from '../../Components/MultipleChoice/MultipleChoiceGrid/MultipleChoiceGrid';
import styles from './GameScreenStyles'

const GameScreen = () => {
  const [score, setScore] = useState(0);

  const GoToNewGame = () => {
  };

  const GoToGameModes = () => {
  };

  useEffect(() => {
    setScore(0);
  }, []);


  return (
    <View style={styles.container}>
      <View style={styles.textBox}>
        <Text style={styles.largeText}>Score: {score}/10</Text>
      </View>
      <Image source={require('../../../assets/SongSleuthAlbumCover.png')}/>
        <MultipleChoiceGrid></MultipleChoiceGrid>
      
        
      

    </View>
  );
};

export default GameScreen;