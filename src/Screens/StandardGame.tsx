import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Text, View, Button } from "react-native";
import { fetchRandomSongs } from "../Services/fetchRandomSongs";
import { EndScreen } from "./EndScreen";

type Song = {
    name: string;
};

export const StandardGame = () => {
  const [songs, setSongs] = useState<string[]>(["a","b","c","d"]);
  const [correctAnswer, setCorrectAnswer] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [round, setRound] = useState<number>(1);
  const [buttonColors, setButtonColors] = useState<Array<string>>([
      "#1B1B1F",
      "#1B1B1F",
      "#1B1B1F",
      "#1B1B1F",
    ]);

  const generateNewQuestion = async () => {
    console.log("new question");
    const newSongs = ["a","b","c","d"];
    const randomIndex = Math.floor(Math.random() * newSongs.length);
    console.log(randomIndex);
    setSongs(newSongs);
    setCorrectAnswer(randomIndex);
  };

  const isStandardGameOver = (round, correct) => {
    return round >= 10;
  };

  const isAlternateGameOver = (round, correct) => {
    return round - correct >= 3
  };

  const handleButtonClick = (buttonIndex: number) => {
    if (buttonIndex === correctAnswer) {
      setScore(score + 1);
      setButtonColors((prevState) => ({
        ...prevState,
        [buttonIndex]: "green",
      }));
    } else {
      setButtonColors((prevState) => ({
        ...prevState,
        [buttonIndex]: "red",
        [correctAnswer]: "green"
      }));
    }
    setTimeout(() => {
      setRound(round + 1);
      setButtonColors((prevState) => ({
        ...prevState,
        [buttonIndex]: "#1B1B1F",
        [correctAnswer]: "#1B1B1F",
      }));
    }, 500);
    if (isStandardGameOver(round,score)) {
      console.log("Final Score:", score);
      return(<EndScreen />) //add endscreen page with score as parameter
    }
    else {
      generateNewQuestion();
    }
  };

  useEffect(() => {
    generateNewQuestion();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.gameContainer}>
        <View style={styles.textBox}>
          <Text style={styles.smallText}> What Song is this? </Text>
          <Text style={styles.smallText}> Round {round} </Text>
          <Text style={styles.smallText}> Score: {score} </Text>
        </View>
        {songs && songs.map((song, index) => (
          <Button
            key={index}
            style={{...styles.button, backgroundColor: buttonColors[index]}}
            color={buttonColors[index]}
            onPress={() => handleButtonClick(index)}
            title={song}
          >
          </Button>
        ))}
      </View>
    </SafeAreaView>
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
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
});
